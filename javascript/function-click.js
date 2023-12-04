$('#brush-range').change( function() {
    styleGuide.penWidth = $('#brush-range').val();
    if (styleGuide.dashed != []) { 
        //styleGuide.dashed = [0, 2 * styleGuide.penWidth];
    }
    console.log(styleGuide);
    $('#brush-size-number').html(styleGuide.penWidth);
});

$('#dashed-toggle').change( function() {
    if(($('#dashed-toggle')[0].checked) == true) {
        styleGuide.dashed = [0, 2 * styleGuide.penWidth];
        setCanvasToStyleGuide();
    } else {
         styleGuide.dashed = [];
         setCanvasToStyleGuide();
    }
 });