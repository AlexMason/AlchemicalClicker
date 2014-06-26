var elements = [];

function registerElement(name, combination, unlocked, amount) {
	var tempElement = new Element(name, combination, unlocked, amount);
	elements.push(tempElement);
}

function combineElements() {
	var selectedElements = getSelectedElements();
	if (selectedElements == undefined || selectedElements.length < 2) {
		throwMessage("You must select at least two or more elements.", "RED");
	}
}

function getSelectedElements() {
	if (elements.length < 1) {
		return (undefined);
	}
	var selectedElements = [];
	for (var i = 0; i < elements.length; i++) {
		if (name.toLowerCase() == elements[i].getName().toLowerCase()) {
			selectedElements.push(elements[i]);
		}
	}
	return undefined;
}

function addElement(name, amount) {
	var element = getElementByName(name);
	if (element == undefined) {
		return false;
	}
	var curAmount = element.getAmount();

	element.setAmount(curAmount+amount);
}

function removeElement(name, amount) {
	var element = getElementByName(name);
	if (element == undefined) {
		return false;
	}
	var curAmount = element.getAmount();

	element.setAmount(curAmount-amount);
}

function getElementIDByName(name) {
	if (elements.length < 1) {
		return (-1);
	}
	for (var i = 0; i < elements.length; i++) {
		if (name.toLowerCase() == elements[i].getName().toLowerCase()) {
			return i;
		}
	}
	return -1;
}

function getElementByName(name) {
	if (elements.length < 1) {
		return (undefined);
	}
	for (var i = 0; i < elements.length; i++) {
		if (name.toLowerCase() == elements[i].getName().toLowerCase()) {
			return elements[i];
		}
	}
	return undefined;
}

function getElementByID(id) {
	return elements[id];
}

function listElements() {
	for (var i = 0; i < elements.length; i++) {
		console.log(elements[i].getName());
	}
}