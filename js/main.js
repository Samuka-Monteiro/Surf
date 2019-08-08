let image = document.getElementsByClassName('media-image');
new simpleParallax(image);

let image1 = document.getElementsByClassName('01');
new simpleParallax(image1, {
    scale: 1.1,
    orientation: 'left'
});

let image2 = document.getElementsByClassName('02');
new simpleParallax(image2, {
    orientation: 'right'
});
let image3 = document.getElementsByClassName('03');
new simpleParallax(image3);
