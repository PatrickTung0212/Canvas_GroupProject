class DrawingRectangle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event) {
    //this.contextReal.fillStyle = "#f44";
    setCanvasToStyleGuide(1);
    // contextReal.setLineDash([]);
    // contextDraft.setLineDash([]);
    this.origX = coord[0];
    this.origY = coord[1];

  }

  onDragging(coord, event) {
    // Manipulating the context draft
    //this.contextDraft.fillStyle = "#f44";
    // Allows you to actually draw out your squares
    this.contextDraft.clearRect(
      0,
      0,
      canvasDraft.width,
      canvasDraft.height
    );
    // Pass in the original x and y coordinates, followed by the new coordinates that we get for position x and y
   
    contextDraft.beginPath();
    contextDraft.rect( this.origX, this.origY, coord[0] - this.origX, coord[1] - this.origY);
    contextDraft.stroke();
    contextDraft.fill();

  }

  onMouseMove() { }

  // Committing the element to the canvas
  onMouseUp(coord) {


    // Clearing the rectangle first
    this.contextDraft.clearRect(
      0,
      0,
      canvasDraft.width,
      canvasDraft.height
    );
    // Commit that drawing to context real
    // Without this commit, it won't actually draw
    // this.contextReal.fillRect(
    //   this.origX,
    //   this.origY,
    //   coord[0] - this.origX,
    //   coord[1] - this.origY
    // );

    contextReal.beginPath();
    contextReal.rect( this.origX, this.origY, coord[0] - this.origX, coord[1] - this.origY);
    contextReal.stroke();
    contextReal.fill();



    beforeDraw();


  }
  onMouseLeave() { }
  onMouseEnter() { }
}
