console.log('This works better now!')

var cookies = [
    "chocolate chip cookies",
    "lemon cookies",
    "sugar cookies",
    "oatmeal cookies",
    "snickerdoodle cookies"
];
function eat(cookies) {
  console.log('I just ate ' + cookies);
}
function eatCookies() {
for (var i = 0; i < cookies.length; i = i + 1){
  eat(cookies[i]);

}
}

var eatButton = $(".devour");
eatButton.on("click", eatCookies);

var text = $('.JordansClass');
var greenButton = $(".color");
greenButton.on("click", function() {
text.toggleClass("green");
});
