$(document).ready(function () {
    let cartItemName01 = $('#cartItem01 .sockName');
    let cartItemName02 = $('#cartItem02 .sockName');
    let cartItemName03 = $('#cartItem03 .sockName');

    /* ID 0001 */
    const sockName1 = $('#0001 .sockName');
    const addToCart0001 = $('#0001 .addToCart');

    addToCart0001.on('click', function() {
        cartItemName01.text(sockName1.text());
        console.log("Sock " + sockName1.text() + " was added to cart.");
    });

    /* ID 0002 */
    const sockName2 = $('#0002 .sockName').text();
    const addToCart0002 = $('#0002 .addToCart');

    addToCart0002.on('click', function() {
        console.log("Sock " + sockName2 + " was clicked.");
    });

    /* ID 0003 */
    const sockName3 = $('#0003 .sockName').text();
    const addToCart0003 = $('#0003 .addToCart');

    addToCart0003.on('click', function() {
        console.log("Sock ID 0003 was clicked.");
    });

    /* ID 0004 */
    const sockName4 = $('#0004 .sockName').text();
    const addToCart0004 = $('#0004 .addToCart');

    addToCart0004.on('click', function() {
        console.log("Sock ID 0004 was clicked.");
    });

    /* ID 0005 */
    const sockName5 = $('#0005 .sockName').text();
    const addToCart0005 = $('#0005 .addToCart');

    addToCart0005.on('click', function() {
        console.log("Sock ID 0005 was clicked.");
    });

    /* ID 0006 */
    const sockName6 = $('#0006 .sockName').text();
    const addToCart0006 = $('#0006 .addToCart');

    addToCart0006.on('click', function() {
        console.log("Sock ID 0006 was clicked.");
    });

    /* ID 0007 */
    const sockName7 = $('#0007 .sockName').text();
    const addToCart0007 = $('#0007 .addToCart');

    addToCart0007.on('click', function() {
        console.log("Sock ID 0007 was clicked.");
    });

    /* ID 0008 */
    const sockName8 = $('#0008 .sockName').text();
    const addToCart0008 = $('#0008 .addToCart');

    addToCart0008.on('click', function() {
        console.log("Sock ID 0008 was clicked.");
    });
});
