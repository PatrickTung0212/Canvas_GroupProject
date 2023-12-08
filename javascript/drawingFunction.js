$(() => {
    currentFunction = null;

 


    $("#drawing-rectangle").click(() => {
        currentFunction = new DrawingRectangle(contextReal, contextDraft);
    });
    $("#drawing-line").click(() => {
        currentFunction = new DrawingLine(contextReal);
    });
    $("#drawing-circle").click(() => {
        currentFunction = new DrawCircle(contextReal, contextDraft);
        console.log("Click circle btn")
    });
    $("#Eraser").click(() => {
        currentFunction = new Eraser(contextReal, contextDraft);
        console.log("Eraser circle btn")
    });

    $("#drawing-straight-line").click(() => {
        currentFunction = new DrawingStraightLine(contextReal, contextDraft);
        console.log("Straight line btn")
    });

    $("#Curve").click(() => {
        currentFunction = new DrawingCurve(contextReal, contextDraft);
        console.log("Curve line btn")
    });

    $("#Text").click(() => {
        currentFunction = new Text(contextReal, contextDraft);
        console.log("Text btn")
    });

    $("#BCurve").click(() => {
        currentFunction = new DrawBCurve(contextReal, contextDraft);
        console.log("BCurve btn")
    });

    $('#clear-button').click(()=>{
        deleteBoard();
        beforeDraw();
    });

    $("#fill-btn").click(() => {
        currentFunction = new Fill(contextReal, contextDraft);
        console.log("fill btn")
    });

    $("#spray-btn").click(() => {
        currentFunction = new DrawingBrush(contextReal);
        console.log("spray btn")
    });






})