(function(window, angular, undefined) {

  'use strict';

  angular.module('ngOnOff', [])
  .factory('onOffPrototype', function() {

    var onOffPrototype = function() {
      this._listeners = {};
    }

    onOffPrototype.prototype.on = function(event, callback, context) {

      // bind context if it is provided
      callback = (context ? callback.bind(context) : callback);

      // ensure array exists
      if ( ! this._listeners[event]) {
        this._listeners[event] = [];
      }

      // push the callback for that event
      this._listeners[event].push(callback);
    }

    onOffPrototype.prototype.off = function(event, callback, context) {
      debugger;
    }

    onOffPrototype.prototype.trigger = function(event, data) {
      var i;
      if (this._listeners[event]) {
        for (i=0; i<this._listeners[event].length; i++) {
          this._listeners[event][i](data);
        }
      }
    }

    return onOffPrototype;

  })
  .factory('onOff', function(onOffPrototype) {

    var onOff = {};

    /**
     * Add on/off/trigger functions to a given object such as a factory.
     *
     * @param {Object} obj The object literal to add on/off/triggers functions to
     */
    onOff.addTo = function(obj) {

      // create new instance from prototype
      var prototype = new onOffPrototype();

      // add individual properties to object
      obj._listeners = prototype._listeners;
      obj.on = prototype.on;
      obj.off = prototype.off;
      obj.trigger = prototype.trigger;

    }

    return onOff;

  });

})(window, window.angular);
