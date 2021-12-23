const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

var slideshow = document.getElementById("slideshow");
var slideshow_text = document.getElementById("slideshow_text");
const img_paths = ["images/healthcare_goal.jpg", "images/education_goal.jpg", "images/employment_goal.jpg"];
const texts = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta venenatis nibh, eu dictum ante. Nullam ante massa, condimentum pharetra risus sed, pharetra dignissim risus. Suspendisse efficitur tincidunt turpis ac dapibus. Integer sit amet facilisis metus. Proin dapibus nibh ac ultricies rutrum. Etiam elementum lacinia nisi in convallis. Praesent malesuada magna non magna condimentum tempus. Vestibulum ac purus sit amet libero lobortis aliquam sed ut libero. Vivamus aliquam elit sem, at eleifend metus rhoncus at. Sed sapien arcu, suscipit quis iaculis a, porttitor at urna. Ut non rutrum nibh, vitae facilisis tortor. Sed pretium metus nec ullamcorper facilisis. Praesent iaculis pulvinar pulvinar. Morbi lacinia ex ac vehicula porta.",
    "Phasellus tortor risus, blandit at consequat quis, consectetur a felis. Curabitur vel suscipit tellus, ut imperdiet lorem. Nunc in enim cursus, aliquet quam sit amet, bibendum dui. Nullam sollicitudin felis et rutrum egestas. Donec nunc odio, pellentesque at interdum et, condimentum in nibh. Aliquam erat volutpat. Aenean faucibus metus id sem aliquam elementum. Cras lacinia purus nec quam mattis vulputate. Ut vel finibus elit, elementum lobortis dolor. Nulla maximus at neque vel ornare. Curabitur fringilla felis sed mollis placerat. Etiam viverra posuere velit, sit amet auctor urna porta scelerisque. Fusce ultricies urna eget commodo hendrerit. In a enim leo. Donec tincidunt vel massa nec feugiat.",
    "Cras ac arcu ac enim tristique dignissim. Etiam quis vehicula lorem, nec semper urna. Pellentesque sit amet nunc rutrum, sagittis dui blandit, blandit purus. Nam posuere sapien a aliquam consectetur. Curabitur vitae feugiat dolor. Aenean vitae ullamcorper tellus. Maecenas sed nulla vel arcu luctus scelerisque. Vivamus sit amet tempor nulla. Morbi hendrerit congue lacus sit amet bibendum. Nam et facilisis mi. Praesent lacus tellus, mollis sed vulputate non, euismod vitae est. Quisque mollis nunc laoreet, sodales ligula et, mollis turpis.",
]

show(0);
function show(i) {
    var ind = i % img_paths.length;
    slideshow.setAttribute('src', img_paths[ind]);
    slideshow_text.innerHTML = texts[ind];
    console.log(i);
    setTimeout(function() {show(i+1)}, 3000);
}