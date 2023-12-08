
var blur = document.getElementById('blur-range');
var brightness = document.getElementById('brightness-range');
var grayscale = document.getElementById('grayscale-range');
var invert = document.getElementById('invert-range');
var opacity = document.getElementById('opacity-range');
var saturate = document.getElementById('saturate-range');

var blurCheck = false;
var grayCheck = false;
var brightnessCheck = false;
var invertCheck = false;
var opacityCheck = false;

$('#filter-sliders').on('click', function (e) {
    if ($('#blur-box').prop("checked")) {
        console.log('blurCheck');
        blurCheck = true;
        if (blurCheck) {
            drawCanvas();
        }
    }
    else {
        blurCheck = false;
    }

    if ($('#grayscale-box').prop("checked")) {
        console.log('grayCheck');
        grayCheck = true;
        if (grayCheck) {
            drawCanvas();
        }
    }
    else {
        grayCheckblurCheck = false;
    }

    if ($('#brightness-box').prop("checked")) {
        console.log('brightnessCheck');
        brightnessCheck = true;
        if (brightnessCheck) {
            drawCanvas();
        }
    }
    else {
        brightnessCheck = false;
    }

    if ($('#invert-box').prop("checked")) {
        console.log('invertCheck');
        invertCheck = true;
        if (invertCheck) {
            drawCanvas();
        }
    }
    else {
        invertCheck = false;
    }

    //Check Opacity
    if ($('#opacity-box').prop("checked")) {
        console.log('opacity');
        opacityCheck = true;

        if (opacityCheck) {
            drawCanvas();
        }
    }
    else {
        opacityCheck = false;
    }


    //Reset all
    $('#remove-all').click(() => {
        contextReal.canvas.style.filter = null;
        $('.filter-boxes input').prop('checked', false)
    })



});

function drawCanvas() {
    console.log("drawcanvas")
    contextReal.canvas.style.filter = `blur(${this.blur.value}px) grayscale(${this.grayscale.value}%) brightness(${this.brightness.value}%) invert(${this.invert.value}%) opacity(${this.opacity.value}%)`
}

