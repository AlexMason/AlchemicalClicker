var loopTick;

function init() {
	registerElement("Air", ["Basic"], true, 0);
	registerElement("Earth", ["Basic"], true, 0);
	registerElement("Fire", ["Basic"], true, 0);
	registerElement("Water", ["Basic"], true, 0);
	for (var i = 0; i < 100; i++) {
		registerElement("Element "+i, ["Basic"], true, 0);
	}
	//listElements();

	updateUI();
}

function loop() {
	updateUI();
}

init();

//loopTick = setInterval(loop, 1000);