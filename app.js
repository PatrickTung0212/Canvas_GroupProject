$(() => {
	let canvas = document.getElementById("mycanvas");
	let context = canvas.getContext("2d");
	let canvasDraft = document.getElementById("mycanvasdraft");
	let contextDraft = canvasDraft.getContext("2d");
	let currentFunction;
	let dragging;

	$("#circle").on("click", function (e) {
		currentFunction = new DrawCircle(context, contextDraft);
	});

	//make a circle
	$("#mycanvasdraft").on("mousedown", function (e) {
		let xcoord = e.offsetX;
		let ycoord = e.offsetY;
		dragging = true;
		currentFunction.onMouseDown(e, xcoord, ycoord);
	});

	$("#mycanvasdraft").on("mouseup", function (e) {
		dragging = false;
		let xcoord = e.offsetX;
		let ycoord = e.offsetY;
		currentFunction.onMouseUp(e, xcoord, ycoord);
	});

	$("#mycanvasdraft").on("mousemove", function (e) {
		// console.log("hi")
		let xcoord = e.offsetX;
		let ycoord = e.offsetY;

		if (dragging) {
			currentFunction.onDragging(e, xcoord, ycoord);
		} else {
			currentFunction.onMouseMove(e, xcoord, ycoord);
		}
	});

	class PaintFunction {
		constructor() {}
		onMouseDown() {}
		onMouseUp() {}
		onDragging() {}
		onMouseMove() {}
	}

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

	// $("#mycanvas").on("click", function (e) {
	// 	// console.log(e.offsetX, e.offsetY)

	// 	context.fillStyle = "red";
	// 	console.log(context);
	// });
});