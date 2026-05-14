/****************************
For Loop
****************************/

/****************************
Main Code
****************************/
console.log("Running t15_for_loop.js")

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML = "<p>99 bottles of milk on the wall,<br>99 bottles of milk.<br>Take one down and pass it around,<br>98 bottles of milk on the wall.</p>";
for (count = 98; count>3; count--) {
    OUTPUT.innerHTML += "<p>"+ count +" bottles of milk on the wall,<br>"+ count +" bottles of milk.<br>Take one down and pass it around,<br>"+ count +" bottles of milk on the wall.</p>";
}
OUTPUT.innerHTML += "<p>2 bottles of milk on the wall,<br>2 bottles of milk.<br>Take one down and pass it around,<br>1 bottle of milk on the wall.</p>";
OUTPUT.innerHTML += "<p>1 bottle of milk on the wall,<br>1 bottle of milk.<br>Take one down and pass it around,<br>No more bottles of milk on the wall.</p>";
OUTPUT.innerHTML += "<p>No more bottles of milk on the wall,<br>No more bottles of milk.<br>Go to the store and buy some more,<br>99 bottles of milk on the wall.</p>";