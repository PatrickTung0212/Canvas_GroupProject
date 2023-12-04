class DrawCircle extends PaintFunction {
    constructor(context, contextDraft) {
        super();
        this.context = context;
        this.contextDraft = contextDraft;
    }

    onMouseDown(e, x, y) {
        
        this.context.fillStyle = "#f44";
        this.contextDraft.fillStyle = "#f44";
        this.x1 = x;
        this.y1 = y;
    }

    //Draw canvas draft
    onDragging(e, x, y) {
        this.context.fillStyle = "#f44";
        this.contextDraft.fillStyle = "#f44";
        this.contextDraft.clearRect(0, 0, canvas.width, canvas.height);

        this.contextDraft.beginPath();
        this.contextDraft.ellipse(
            this.x1,
            this.y1,
            Math.abs(x - this.x1),
            Math.abs(y - this.y1),
            0,
            0,
            2 * Math.PI
        );
        this.contextDraft.fill();
    }

    //Clear canvas draft
    //Draw canvas real
    onMouseUp(e, x, y) {
        this.context.fillStyle = "#f44";
        this.contextDraft.fillStyle = "#f44";
        this.contextDraft.clearRect(0, 0, canvas.width, canvas.height);
        this.context.beginPath();
        this.context.ellipse(
            this.x1,
            this.y1,
            Math.abs(x - this.x1),
            Math.abs(y - this.y1),
            0,
            0,
            2 * Math.PI
        );
        this.context.fill();

    }

    //No need
    onMouseMove() {}
}