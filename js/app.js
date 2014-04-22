//// Problem : Users click on an image and goes to a dead end
//// Solution : Create an overlay with the large image - lightbox
//// /
//
////==== Cashe Vars ====//
//var $imgGalleryLinks = $('#imageGallery a');
//var $overlay = $('<div id="overlay"></div>');
//var $image = $("<img>");
//var $caption = $('<p></p>')
//
//
////==== Add an overlay =====//
//$overlay.append($image);
//$overlay.append($caption);
//$("body").append($overlay);
////A. An Image
//// B. A caption
//
////==== Capture the click event on a link to an image ====//
//
//// A. Capture the click event on a link to an image
//$imgGalleryLinks.click(function (event) {
//
//    //B. prevent the default link behavior
//    event.preventDefault();
//
//    //C. Cashe the href attr
//    var imgLocal = $(this).attr("href");
//
//    //E. Update overlay with the image linked in the link
//    $image.attr("src", imgLocal);
//
//    // D. Show the overlay  
//    $overlay.fadeIn("slow");
//
//    //F. Get child's alt att. and set as a caption
//    var captionText = $(this).children("img").attr("alt");
//    $caption.text(captionText);
//});
//
//
////==== When overlay is clicked ====/
////A.hide overlay
//$overlay.click(function () {
//    $overlay.fadeOut("slow");
//    $gallery.removeClass("blurred");
//});

//==== Extra Credit! ====//
// Make the lightbox into a gallery that users can click through!

// ==== What's the problem? ====//
//Instead of closing the gallery when you click on the overlay I want to advance the image backward or forward. I would like to add an X for closing the pop up. 
// It'd be cool to use keyboard arrows to scroll through the gallery as well. 
// Push your self to get better. 

//==== Solution: ====//

// Add button to the left & right sides of the IMG that will advance the image. Add a close button. Disable the clicking off of the image to close the overlay

// New Cashe
var $imgGalleryLinks = $('#imageGallery a');
var $imgWidget = $('<section class="img-widget"><div class="widget-inner"><img class="gallery-img" /><p class="caption"></p><a class="next-btn" href="#"><i class="icon icon-arrowthin-e"></i></a><a class="prev-btn" href="#"><i class="icon icon-arrowthin-w"></i></a><a class="close-btn" href="#"><i class="icon icon-closeThin"></i></a></div></section>');
var $gallery = $(".gallery");
var $image = $imgWidget.find(".gallery-img");
var $caption = $imgWidget.find(".caption");
var $nextBtn = $imgWidget.find(".next-btn");
var $prevBtn = $imgWidget.find(".prev-btn");
var $closeBtn = $imgWidget.find(".close-btn");


// ==== Generate the Widget on the Page ====//
$('body').append($imgWidget);

// ==== Bring up the widget ====//
// When we click an image, the widget needs to come up. Until then it needs to be hidden. Clicking the image should also apply the class of "blurred" to the gallery.

$imgGalleryLinks.click(function (event) {

    // Prevent default
    event.preventDefault();

    // Blur the background
    $gallery.addClass("blurred");

    // make the image src
    var imgLocal = $(this).attr("href");

    $image.attr("src", imgLocal);

    // Make the caption text
    var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);

    // Console log
    console.log(imgLocal);
    console.log(captionText);


    $imgWidget.fadeIn("fast");

});


// ==== Advance Next & Back ====//

// ==== Hide the Widget ====//
$closeBtn.click(function (event) {
    event.preventDefault();
    console.log("CLOSE");
    $imgWidget.fadeOut("fast");
    $gallery.removeClass("blurred");
});