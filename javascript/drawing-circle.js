class DrawCircle extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown(coord, styleGuide, e) {
        setCanvasToStyleGuide(1);
        
        // this.contextReal.fillStyle = "#f44";
        // this.contextDraft.fillStyle = "#f44";
        this.x1 = coord[0];
        this.y1 = coord[1];
    }

    //Draw canvas draft
    onDragging(coord, e) {
        // this.contextReal.fillStyle = "#f44";
        // this.contextDraft.fillStyle = "#f44";
        this.contextDraft.clearRect(0, 0,  canvasDraft.width,  canvasDraft.height);

        const centerX = (coord[0] + this.x1) / 2;
        const centerY = (coord[1] + this.y1) / 2;
        const radiusX = Math.abs(coord[0] - this.x1) / 2;
        const radiusY = Math.abs(coord[1] - this.y1) / 2;

        this.contextDraft.beginPath();
        this.contextDraft.ellipse(
            centerX,
            centerY,
            radiusX,
            radiusY,
            0,
            0,
            2 * Math.PI
        );
        this.contextDraft.fill();
    }

    //Clear canvas draft
    //Draw canvas real
    onMouseUp(coord, e) {
        // this.contextReal.fillStyle = "#f44";
        // this.contextDraft.fillStyle = "#f44";
        this.contextDraft.clearRect(0, 0,  canvasDraft.width,  canvasDraft.height);

        const centerX = (coord[0] + this.x1) / 2;
        const centerY = (coord[1] + this.y1) / 2;
        const radiusX = Math.abs(coord[0] - this.x1) / 2;
        const radiusY = Math.abs(coord[1] - this.y1) / 2;

        this.contextReal.beginPath();
        this.contextReal.ellipse(
            centerX,
            centerY,
            radiusX,
            radiusY,
            0,
            0,
            2 * Math.PI
        );
        this.contextReal.fill();

        beforeDraw();
    }

    //No need
    onMouseMove() {}
}