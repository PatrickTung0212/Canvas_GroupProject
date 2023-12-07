var imageLoader = document.getElementById("btn-upload");
imageLoader.addEventListener("change", handleImage, false);

function handleImage(e) {
    var reader = new FileReader();
    reader.onload = function (event) {
        var img = new Image();
        img.onload = function () {
            contextReal.width = img.width;
            contextReal.height = img.height;
            contextReal.drawImage(img, 0, 0);
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(e.target.files[0]);
    beforeDraw();
}

$("#btn-upload").click(function () {
    console.log("Clicked upload")
    $("#upload").trigger("click");
});
