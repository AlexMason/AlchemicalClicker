function updateUI() {

	//Start energy table
	var energyHtml = "Test";

	$("#energy").html(energyHtml);
	//End energy table

	//Start element table
	var unlockedElements = getUnlockedElements();

	var elementsHtml = "<center>";
	if (unlockedElements != undefined) {
		for (var i = 0; i < unlockedElements.length; i++) {
			//Button Logic Here
			elementsHtml += '<div class="element-box">';
			elementsHtml += '<center>';
			elementsHtml += '<a class="select-button" onmousedown="selectElement(\''+unlockedElements[i].getName()+'\')">';
			elementsHtml += '<div class="select-button-spacer"></div>';
			elementsHtml += unlockedElements[i].getName();
			elementsHtml += '<div>';
			elementsHtml += unlockedElements[i].getAmount();
			elementsHtml += '</div>';
			elementsHtml += '<div>';
			if (unlockedElements[i].isSelected()) {
				elementsHtml += '<b>Selected</b>';
			} else {
				elementsHtml += '<b>Select</b>';
			}
			elementsHtml += '</div>';
			elementsHtml += '</a>';
			elementsHtml += '</center>';
			elementsHtml += '</div>';
		}
	}
	elementsHtml += '</center>';
	//End element table

	//Start combine table
	var combineHtml = "";

	$("#combine").html(combineHtml);
	//End combine table

	$("#elements").html(elementsHtml);
}