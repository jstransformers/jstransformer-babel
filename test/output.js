"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = (function () {
  function Person(name) {
    _classCallCheck(this, Person);

    this.name = name;
    this.movement = "walks";
  }

  _createClass(Person, [{
    key: "move",
    value: function move(meters) {
      console.log("" + this.name + " " + this.movement + " " + meters + "m.");
    }
  }]);

  return Person;
})();

var Hero = (function (_Person) {
  function Hero(name, movement) {
    _classCallCheck(this, Hero);

    _get(Object.getPrototypeOf(Hero.prototype), "constructor", this).call(this);
    this.name = name;
    this.movement = movement;
  }

  _inherits(Hero, _Person);

  _createClass(Hero, [{
    key: "move",
    value: function move() {
      _get(Object.getPrototypeOf(Hero.prototype), "move", this).call(this, 500);
    }
  }]);

  return Hero;
})(Person);

var clark = new Person("Clark Kent");

var superman = new Hero("Superman", "flies");

clark.move(100);
// -> Clark Kent walks 100m.

superman.move();
// -> Superman flies 500m.

/* Make a note of:
class Base {}
class Derived extends Base {}
//Here, Derived.prototype will inherit from Base.prototype.
let parent = {};
class Derived prototype parent {}
*/