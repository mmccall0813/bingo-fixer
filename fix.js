var elems = document.getElementsByTagName("td");
for(var i = 0; i < elems.length; i++){
var element = elems[i];
if(element.innerHTML.includes("<img")) continue; // dont change the headings
element.style.clipPath = "circle(50% at 50% 50%)"; // make the background shape a circle
element.style.cursor = "pointer"; // make the cursor look like your hovering over something clickable
element.onclick = function(){if(this.style.backgroundColor == "rgb(255, 0, 0)"){this.style.backgroundColor = "#FFFFFF";} else this.style.backgroundColor = "#FF0000";};
}
