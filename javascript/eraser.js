class Eraser extends PaintFunction {
    constructor(contextReal, contextDraft) {
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
      this.lineWidth = 10; 
    }

    setLineWidth(lineWidth) {
        this.lineWidth = lineWidth;
      }
  
    onMouseDown(coord, e) {
      setCanvasToStyleGuide(1);
      this.contextReal.globalCompositeOperation = "destination-out";
      this.contextDraft.globalCompositeOperation = "destination-out";
      this.contextReal.beginPath();
      this.contextDraft.beginPath();
      this.contextReal.moveTo(coord[0], coord[1]);
      this.contextDraft.moveTo(coord[0], coord[1]);
    }
  
    onDragging(coord, e) {
      this.contextReal.lineTo(coord[0], coord[1]);
      this.contextDraft.lineTo(coord[0], coord[1]);
      this.contextReal.stroke();
      this.contextDraft.stroke();
    }
  
    onMouseUp(coord, e) {
      this.contextReal.closePath();
      this.contextDraft.closePath();
      this.contextReal.globalCompositeOperation = "source-over";
      this.contextDraft.globalCompositeOperation = "source-over";
    }
  
    onMouseMove() {}
  }