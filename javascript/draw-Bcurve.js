class DrawBCurve extends PaintFunction{
    constructor(contextReal, contextDraft){
        super();
        this.contextReal = contextReal;    
        this.contextDraft = contextDraft;
        this.cp1 = false;
        this.cp2 = false;   
        this.endpointX = 0;
        this.endpointY = 0;  
        this.controlPointX = 0;
        this.controlPointY = 0;

        this.reset = false;
    }
    
    onMouseDown(coord, styleGuide, event){

        // this.contextReal.fillStyle = "#f44"
        // this.contextDraft.fillStyle = "#f44"

        if(this.reset == true){
            this.cp1 = false;
            this.cp2 = false;   
            this.endpointX = 0;
            this.endpointY = 0;  
            this.controlPointX = 0;
            this.controlPointY = 0;
            this.reset = false;
        }

        if(this.cp1 == false && this.cp2 == false)
        {
            this.x1 = coord[0];
            this.y1 = coord[1];
            console.log("first time")
        } 

        if(this.cp1 == true && this.cp2 == false)
        {
            // this.x1 = coord[0];
            // this.y1 = coord[1];
            console.log("second time")
        } 

        
        if(this.cp1 == true && this.cp2 == true)
        {
            this.reset = true;
            console.log("third time")
        } 
    }

    onDragging(coord,event){
        // this.contextReal.fillStyle = "#f44"
        // this.contextDraft.fillStyle = "#f44"
        if(this.cp1 == false && this.cp2 == false)
        {
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);

            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.x1, this.y1);
            this.contextDraft.bezierCurveTo(this.x1, this.y1, this.x1, this.y1, coord[0],coord[1])
            this.contextDraft.stroke();
        }

        if(this.cp1 == true && this.cp2 == false)
        {
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);

            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.x1, this.y1);
            this.contextDraft.bezierCurveTo(coord[0], coord[1], coord[0], coord[1],  this.endpointX,  this.endpointY)
            this.contextDraft.stroke();
        }

        if(this.cp1 == true && this.cp2 == true)
        {
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);

            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.x1, this.y1);
            this.contextDraft.bezierCurveTo( this.controlPointX,  this.controlPointY, coord[0], coord[1],  this.endpointX,  this.endpointY)
            // this.contextDraft.bezierCurveTo(coord[0],  coord[1],this.controlPointX, this.controlPointY,  this.endpointX,  this.endpointY)
            this.contextDraft.stroke();
        }
    }

    onMouseUp(coord,event){
        // this.contextReal.fillStyle = "#f44"
        // this.contextDraft.fillStyle = "#f44"

        if(this.cp1 == true && this.cp2 == true)
        {
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.x1, this.y1);
            this.contextDraft.bezierCurveTo( this.controlPointX,  this.controlPointY, coord[0], coord[1],  this.endpointX,  this.endpointY)
            // this.contextDraft.bezierCurveTo(coord[0],  coord[1],this.controlPointX, this.controlPointY,  this.endpointX,  this.endpointY)
            this.contextDraft.stroke();

            this.contextReal.beginPath();
            this.contextReal.moveTo(this.x1, this.y1);
            this.contextReal.bezierCurveTo( this.controlPointX,  this.controlPointY, coord[0], coord[1],  this.endpointX,  this.endpointY)
            // this.contextDraft.bezierCurveTo(coord[0],  coord[1],this.controlPointX, this.controlPointY,  this.endpointX,  this.endpointY)
            this.contextReal.stroke();
            

            beforeDraw();
        }

        if(this.cp1 == true && this.cp2 == false)
        {
             this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.x1, this.y1);
            this.contextDraft.bezierCurveTo(coord[0], coord[1], coord[0], coord[1],  this.endpointX,  this.endpointY)
            this.contextDraft.stroke();

            // this.contextReal.beginPath();
            // this.contextReal.moveTo(this.x1, this.y1);
            // this.contextReal.bezierCurveTo(coord[0], coord[1], coord[0], coord[1],  this.endpointX,  this.endpointY)
            // this.contextReal.stroke();

            this.cp2 = true;
            this.controlPointX = coord[0]
            this.controlPointY = coord[1]

        }


        if(this.cp1 == false && this.cp2 == false)
        {
            // this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.x1, this.y1);
            this.contextDraft.bezierCurveTo(this.x1, this.y1, this.x1, this.y1, coord[0],coord[1])
            this.contextDraft.stroke();

            // this.contextReal.beginPath();
            // this.contextReal.moveTo(this.x1, this.y1);
            // this.contextReal.bezierCurveTo(this.x1, this.y1, this.x1, this.y1, coord[0],coord[1])
            // this.contextReal.stroke();

            this.cp1 = true;
            this.endpointX = coord[0]
            this.endpointY = coord[1]

          
        }

    
       

    }

    onMouseMove(){}
    onMouseLeave(){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.reset == true;
    }
    onMouseEnter(){}

    // drawCurve(coord) {
    //     // this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
    //     this.contextDraft.beginPath();
    //     this.contextDraft.moveTo(this.origX,this.origY);
    //     this.contextDraft.quadraticCurveTo(coord[0],coord[1],this.endX,this.endY);
    //     this.contextDraft.stroke();
    // }

}