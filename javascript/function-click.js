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
    console.log("changeDrawColor");
    styleGuide.drawColor = hexToRgb(this.value);

};


$('#fillColor')[0].oninput = function () {
    console.log("changeFillColor");
    styleGuide.fillColor = hexToRgb(this.value);

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

var buttons = document.querySelectorAll('.btn');

    // Add event listener to each button
    buttons.forEach(function(button) {
      button.addEventListener('click', function() {
        console.log("Selected" + button)
        // Remove the 'btn-secondary' class from all buttons
        buttons.forEach(function(btn) {
          btn.classList.remove('btn-secondary');
          btn.classList.add('btn-primary');
        });

        // Add the 'btn-secondary' class to the clicked button
        button.classList.add('btn-secondary');
        button.classList.remove('btn-primary');
      });
    });

    $('#select-btn').click(() => {

        currentFunction = new Selecting(contextReal,contextDraft);
        
     });

