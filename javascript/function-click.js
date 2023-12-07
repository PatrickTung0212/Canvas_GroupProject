$('#brush-range').change(function () {
    styleGuide.penWidth = $('#brush-range').val();
    if (styleGuide.dashed != []) {
        //styleGuide.dashed = [0, 2 * styleGuide.penWidth];
    }
    console.log(styleGuide);
    $('#brush-size-number').html(styleGuide.penWidth);
});

$('#dashed-toggle').change(function () {
    if (($('#dashed-toggle')[0].checked) == true) {
        styleGuide.dashed = [0, 2 * styleGuide.penWidth];
        setCanvasToStyleGuide();
    } else {
        styleGuide.dashed = [];
        setCanvasToStyleGuide();
    }
});

$('#colorbox')[0].oninput = function () {
    console.log("changeColor");
    styleGuide.drawColor = this.value;
    styleGuide.fillColor = this.value;
    // document.documentElement.style.setProperty("--color", this.value);
};

//Downloads Image
$("#download").click((e) => {
    let image = canvasReal.toDataURL();
    let tempLink = document.createElement("a");
    tempLink.download = "image.jpg";
    tempLink.href = image;
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
});

//Uploads Image
$("#upload").change((e) => {
    console.log(contextReal.canvas.width, canvasReal.width);
    var reader = new FileReader();
    reader.onload = function (event) {
        var img = new Image();
        img.onload = function () {
            contextReal.drawImage(
                img,
                0,
                0,
                contextReal.canvas.width,
                contextReal.canvas.height
            );
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(e.target.files[0]);
});

