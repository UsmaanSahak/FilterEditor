var fields = ["name","Descriptor","fat","protein","carb","allergies","Random String"];

function load() {
	console.log("ran");
	var h = "";
	for (var i=0; i < fields.length; i++) {

		h += "<p class=\"formField\">" + fields[i] + ":</p>";
	}
	document.getElementById("fieldCol").innerHTML = h;
	
	
	
	
	//Get the bottom part of bounding box of the h2 elements in fieldCol div, and use that y to determine where to spawn the input elements in valueCol.
	
	var h2Fields = document.getElementById("fieldCol").children;
	var rect;
	for (var i=0; i < h2Fields.length; i++) {
		rect = h2Fields[i].getBoundingClientRect();
		console.log(rect.top,rect.right,rect.bottom,rect.left);
	}
	h = "";
	var startHere = document.getElementById("fieldCol").getBoundingClientRect().right;
	var bottom;
	for (var i=0; i < fields.length; i++) {
		bottom = (h2Fields[i].getBoundingClientRect().bottom - 20);
		h += "<input class=\"formValue\" style=\"top:" + bottom + "px;left:" + startHere + "px;\" type=\"text\" name=\"filterName\">";
		
		h+= "<svg class=\"underline\" style=\"width:250px;height:2px;position:absolute;margin:0px;padding:0px;top:" + (bottom+20) + "px;left:" + (startHere-10) + "px;\"><rect x=\"0\" y=\"0\" width=\"100%\" height=\"100\" rx=\"15\" ry=\"15\" /></svg>"
	}
	document.getElementById("valueCol").innerHTML = h;
	
	
	
	window.addEventListener('resize',function(event) {
		underline = document.getElementsByClassName("underline");
		inputVals = document.getElementsByClassName("formValue");
		inputFields = document.getElementById("fieldCol").children;
		startHere = document.getElementById("fieldCol").getBoundingClientRect().right;
		for (var i=0; i < inputFields.length; i++) {
			bottom = inputFields[i].getBoundingClientRect().bottom - 20;	
			inputVals[i].style["top"] = bottom + "px";
			inputVals[i].style["left"] = startHere + "px";
			underline[i].style["top"] = bottom + 20 + "px";
			underline[i].style["left"] = startHere - 10 + "px";
		}
	});
}

//"<svg style=\"width:100%;height:100%;\"><rect height=10 width=100 y=" + (h2Fields[i].getBoundingClientRect().bottom - 20) + " x=" + (startHere - 100) + " rx=10 ry=10 /></svg>"
