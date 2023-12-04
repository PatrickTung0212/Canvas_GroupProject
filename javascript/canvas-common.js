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

  currentFunction.onMouseDown([mouseX, mouseY], e);
  dragging = true;
});

$("#canvas-draft").mousemove(function (e) {

  if (currentFunction == null) {
    return;
  }
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;

  if (dragging) {
    currentFunction.onDragging([mouseX, mouseY], e);
  }
  currentFunction.onMouseMove([mouseX, mouseY], e);
});

$("#canvas-draft").mouseup(function (e) {
  if (currentFunction == null) {
    return;
  }
  dragging = false;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseUp([mouseX, mouseY], e);
});

$("#canvas-draft").mouseleave(function (e) {
  if (currentFunction == null) {
    return;
  }
  dragging = false;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseLeave([mouseX, mouseY], e);
});

$("#canvas-draft").mouseenter(function (e) {
  if (currentFunction == null) {
    return;
  }
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseEnter([mouseX, mouseY], e);
});


