/* Wait for document to load */
$(document).ready(function () {
    const addToCart1 = $('#name1');
  
    addToCart1.click(function () {

        let icon = document.getElementById("cart1");
        let currentColor = icon.getAttribute("fill");
    
        // Toggle between green and red
        let newColor = (currentColor === "red") ? "green" : "red";
    
        // Set the new color
        icon.setAttribute("fill", newColor);

        console.log("This has been clicked");
    });
  });
