var loopTick;

function init() {
	registerElement("Air", ["Basic"], true, 1);
	registerElement("Earth", ["Basic"], true, 1);
	registerElement("Fire", ["Basic"], true, 1);
	registerElement("Water", ["Basic"], true, 1);

	listElements();
}

function loop() {

}

init();

//loopTick = setInterval(loop, 1000);