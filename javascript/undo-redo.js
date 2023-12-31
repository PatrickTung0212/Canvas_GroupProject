// let ourCanvas = $('#canvas-real');
let undoDataStack = [];
let redoDataStack = [];

let init = false;


function beforeDraw() {
    var lastMove = canvasReal.toDataURL();
    undoDataStack.push(lastMove);
    redoDataStack = [];
}

$('#Undo').click(function undo() {

    if (undoDataStack.length == 0) {
        return;

    } else if (undoDataStack.length == 1) {
        contextReal.fillStyle = 'rgba(255, 255, 255, 1)';
        contextReal.fillRect(0, 0, canvasDraft.width, canvasDraft.height);
    } else if (undoDataStack.length > 1) {

        var lastStep = new Image();
        lastStep.src = undoDataStack[undoDataStack.length - 2];
        lastStep.onload = function () {

            contextReal.drawImage(lastStep, 0, 0);
        };
    }
    redoDataStack.push(undoDataStack.pop());
})

$('#Redo').click(function redo() {
    if (redoDataStack.length > 0) {
        var nextStep = new Image();
        nextStep.src = redoDataStack[redoDataStack.length - 1];
        nextStep.onload = function () {
            contextReal.drawImage(nextStep, 0, 0);
        };
        undoDataStack.push(redoDataStack.pop());
    }


}
)
