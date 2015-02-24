"use strict";

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Person = (function () {
  function Person(name) {
    _classCallCheck(this, Person);

    this.name = name;
    this.movement = "walks";
  }

  _prototypeProperties(Person, null, {
    move: {
      value: function move(meters) {
        console.log("" + this.name + " " + this.movement + " " + meters + "m.");
      },
      writable: true,
      configurable: true
    }
  });

  return Person;
})();

var Hero = (function (Person) {
  function Hero(name, movement) {
    _classCallCheck(this, Hero);

    this.name = name;
    this.movement = movement;
  }

  _inherits(Hero, Person);

  _prototypeProperties(Hero, null, {
    move: {
      value: function move() {
        _get(Object.getPrototypeOf(Hero.prototype), "move", this).call(this, 500);
      },
      writable: true,
      configurable: true
    }
  });

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