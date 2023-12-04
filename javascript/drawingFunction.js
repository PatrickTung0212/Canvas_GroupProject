$(()=>{
    currentFunction =  null;
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
           

  })