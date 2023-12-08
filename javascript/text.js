let fontBoxCounter = false;  

$('#font-picker-selector').change( function() {
    styleGuide.font = ($('#font-picker-selector option:selected').text());
});

class Text extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.origX = null;
        this.origY = null;
    }

    onMouseDown(coord, styleGuide, event){  
        
        if (fontBoxCounter == false) {
            
            this.origX = coord[0];
            this.origY = coord[1];
            this.contextReal.font = `${styleGuide.textSize}px ${styleGuide.font}`;
            this.contextReal.fillStyle = styleGuide.fillColor;
            var input = document.createElement('input');
            input.type = 'text';
            input.style.position = 'absolute';
            input.style.border = "2px red solid";
            input.style.placeholder = 'Type please!';
            input.style.height = 40;
            input.style.width = 500;
            input.style.font = styleGuide.font;
            input.placeholder = "To add text, click here, type, and push 'Enter'";
            console.log("Mouse coordX:" + coord[0])
            console.log("Mouse coordY:" + coord[1])
            console.log((this.origX) + parseInt($("#canvas-real").css('left'), 10) )
            this.origX = (this.origX) + parseInt($("#canvas-real").css('left'), 10) 
            input.style.left = (this.origX) + 'px'; //the position of input when you click mouse//
            input.style.top = (this.origY) + 'px';
            input.id= 'textBox' 
            document.body.appendChild(input);
            fontBoxCounter = true;

            input.onkeydown = function handleEnter(input) {
                if (input.key == 'Enter') {
                    this.typedText= document.getElementById("textBox").value;
                    contextReal.fillText(this.typedText,coord[0] + 20,coord[1]+10);
                    document.body.removeChild(this);
                    fontBoxCounter = false;
                    beforeDraw();
                }
            };   
        } 
    }

    onDragging(){}
    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(coord){
        // if(coord[0] < this.origX + 300 && coord[0] > this.origX - 300 && coord[1] < this.origY + 40 && coord[1] > this.origY - 40) {
        // } else {
        //     $('#textBox').remove();
        //     fontBoxCounter = false;
        // }
    }
    onMouseEnter(){}
}
