/**********************************************
 * The Canvas
 * ==================================
 ***********************************************/

let canvasReal = document.getElementById("canvas-real");
let contextReal = canvasReal.getContext("2d");
let canvasDraft = document.getElementById("canvas-draft");
let contextDraft = canvasDraft.getContext("2d");
let currentFunction;
let dragging = false;

$("#canvas-draft").mousedown(function (e) {
  if (currentFunction == null) {
    return;
  }

  let mouseX = e.offsetX;
  let mouseY = e.offsetY;

  currentFunction.onMouseDown([mouseX, mouseY],styleGuide, e);
  dragging = true;
});

$("#canvas-draft").mousemove(function (e) {

  if (currentFunction == null) {
    return;
  }
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;

  if (dragging) {
    currentFunction.onDragging([mouseX, mouseY],styleGuide, e);
  }
  currentFunction.onMouseMove([mouseX, mouseY], styleGuide,e);
});

$("#canvas-draft").mouseup(function (e) {
  if (currentFunction == null) {
    return;
  }
  dragging = false;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseUp([mouseX, mouseY],styleGuide, e);
});

$("#canvas-draft").mouseleave(function (e) {
  if (currentFunction == null) {
    return;
  }
  dragging = false;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseLeave([mouseX, mouseY],styleGuide, e);
});

$("#canvas-draft").mouseenter(function (e) {
  if (currentFunction == null) {
    return;
  }
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseEnter([mouseX, mouseY], styleGuide,e);
});

function setCanvasToStyleGuide(multiplier) {
  contextReal.restore();
  contextDraft.restore();
  contextReal.strokeStyle = contextDraft.strokeStyle = styleGuide.drawColor;
  if (styleGuide.fillColor != 'rgba(0, 0, 0, 0)') {
    contextReal.lineWidth = contextDraft.lineWidth = styleGuide.penWidth * multiplier;
  } else { contextReal.lineWidth = contextDraft.lineWidth = styleGuide.penWidth; }
  contextReal.fillStyle = contextDraft.fillStyle = styleGuide.fillColor;
  contextReal.setLineDash(styleGuide.dashed);
  contextDraft.setLineDash(styleGuide.dashed);
  contextReal.lineCap = contextDraft.lineCap = styleGuide.lineCap;
}

let styleGuide = {
  drawColor: "rgb(0,0,0)", fillColor: "rgb(0,0,255)", penWidth: 10,
  dashed: [], lineCap: "round", // for dashes, put in the distance, for none make array empty
  emojiSource: '', emojiLength: 72, backgroundColor: 'white',
  textSize: 15, font: 'Arial'
};

let keyListeners = {shift: false, escape: false} //, escape: false, delete: false, type: true} 


