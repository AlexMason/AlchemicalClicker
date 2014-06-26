var Element = (function() {
    // "private" variables 
    var _name;
    var _combination;
    var _amount;
    var _unlocked;
    var _selected;

    // constructor
    function Element(name, combination, unlocked, amount) {
    	this._name = name;
    	this._combination = combination;
        this._unlocked = unlocked;
    	this._amount = amount;
        this._selected = false;
    };

    // add the methods to the prototype so that all of the 
    // Foo instances can access the private static
    Element.prototype.getName = function() {
        return this._name;
    };
    Element.prototype.getCombination = function() {
        return this._combination;
    };
    Element.prototype.getAmount = function() {
        return this._amount;
    };
    Element.prototype.getUnlocked = function() {
        return this._unlocked;
    };
    Element.prototype.setAmount = function(amount) {
    	this._amount = amount;
    }
    Element.prototype.setUnlocked = function(unlocked) {
        this._unlocked = unlocked;
    }
    Element.prototype.setSelected = function(selected) {
        this._selected = selected;
    }
    Element.prototype.isUnlocked = function() {
        return this._unlocked;
    }
    Element.prototype.isSelected = function() {
        return this._selected;
    }

    return Element;
})();