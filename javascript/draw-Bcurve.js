class DrawBCurve extends PaintFunction{
    constructor(contextReal, contextDraft){
        super();
        this.contextReal = contextReal;    
        this.contextDraft = contextDraft;
        this.cp1 = false;
        this.cp2 = false;     
    }
    
    onMouseDown(coord, styleGuide, event){
        this.contextReal.fillStyle = "#f44"
        this.contextDraft.fillStyle = "#f44"
        if(this.cp1 == false && this.cp2 == false)
        {
            this.x1 = x;
            this.y1 = y;
        } 
    }

    onDragging(coord,event){
        this.contextReal.fillStyle = "#f44"
        this.contextDraft.fillStyle = "#f44"
        if(this.cp1 == false && this.cp2 == false)
        {
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);

            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.x1, this.y1);
            this.contextDraft.bezierCurveTo(this.x1, this.y1, this.x1, this.y1, x,y)
            this.contextDraft.stroke();
        }
    }

    onMouseUp(coord,event){
        this.contextReal.fillStyle = "#f44"
        this.contextDraft.fillStyle = "#f44"
        if(this.cp1 == false && this.cp2 == false)
        {
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.x1, this.y1);
            this.contextDraft.bezierCurveTo(this.x1, this.y1, this.x1, this.y1, x,y)
            this.contextDraft.stroke();

            this
        }

        beforeDraw();

    }

    onMouseMove(){}
    onMouseLeave(){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
    }
    onMouseEnter(){}

    drawCurve(coord) {
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX,this.origY);
        this.contextDraft.quadraticCurveTo(coord[0],coord[1],this.endX,this.endY);
        this.contextDraft.stroke();
    }
    drawCircle(coord, styleGuide){
        this.contextDraft.beginPath();
        this.contextDraft.arc(coord[0], coord[1], 5, 0, 2 * Math.PI);
        this.contextDraft.stroke();
        this.contextDraft.fillStyle = styleGuide.fillColor;
        this.contextDraft.fill();
    }
}