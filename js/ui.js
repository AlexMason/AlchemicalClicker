function updateUI() {
	//Build element table
	var unlockedElements = getUnlockedElements();

	var elementsHtml = "<center>";
	if (unlockedElements != undefined) {
		for (var i = 0; i < unlockedElements.length; i++) {
			//Button Logic Here
			elementsHtml += '<div class="element-box">';
			elementsHtml += '<center>';
			elementsHtml += '<a class="select-button">';
			elementsHtml += unlockedElements[i].getName();
			elementsHtml += '</a>';
			elementsHtml += '</center>';
			elementsHtml += '</div>';
		}
	}
	elementsHtml += '</center>';

	$("#elements").html(elementsHtml);
}