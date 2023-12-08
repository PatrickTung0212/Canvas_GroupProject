 // Get all the color-square-mini elements
 var colorSquares = document.querySelectorAll('.color-square-mini');

 // Add event listener to each color-square-mini element
 colorSquares.forEach(function(colorSquare) {
   colorSquare.addEventListener('click', function() {
     // Remove the 'selected' class from all color-square-mini elements
     colorSquares.forEach(function(square) {
       square.classList.remove('selected');
     });

     // Get the background color of the clicked element
     var backgroundColor = window.getComputedStyle(colorSquare).backgroundColor;

     // Update the drawColor in styleGuide object
     styleGuide.drawColor = backgroundColor;

     // Add the 'selected' class to the clicked element
     colorSquare.classList.add('selected');

     // Log the updated drawColor value
     console.log('drawColor:', styleGuide.drawColor);
   });
 });