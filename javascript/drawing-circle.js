class DrawCircle extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown(coord, e) {
        
        this.contextReal.fillStyle = "#f44";
        this.contextDraft.fillStyle = "#f44";
        this.x1 = coord[0];
        this.y1 = coord[1];
    }

    //Draw canvas draft
    onDragging(coord, e) {
        this.contextReal.fillStyle = "#f44";
        this.contextDraft.fillStyle = "#f44";
        this.contextDraft.clearRect(0, 0,  canvasDraft.width,  canvasDraft.height);

        this.contextDraft.beginPath();
        this.contextDraft.ellipse(
            this.x1,
            this.y1,
            Math.abs(coord[0] - this.x1),
            Math.abs(coord[1] - this.y1),
            0,
            0,
            2 * Math.PI
        );
        this.contextDraft.fill();
    }

    //Clear canvas draft
    //Draw canvas real
    onMouseUp(coord, e) {
        this.contextReal.fillStyle = "#f44";
        this.contextDraft.fillStyle = "#f44";
        this.contextDraft.clearRect(0, 0,  canvasDraft.width,  canvasDraft.height);
        this.contextReal.beginPath();
        this.contextReal.ellipse(
            this.x1,
            this.y1,
            Math.abs(coord[0] - this.x1),
            Math.abs(coord[1] - this.y1),
            0,
            0,
            2 * Math.PI
        );
        this.contextReal.fill();

    }

    //No need
    onMouseMove() {}
}