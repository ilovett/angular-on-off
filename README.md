angular-on-off
==============

This module aims to allow easy setup of a pub/sub to your module objects or classes by providing setup for you.

You can easily add the methods `on`, `off`, and `trigger` to your module objects or classes, reducing repeated code on each object.

# Setup

## Install

    bower install angular-on-off --save

## Enable

Add to module dependencies:'ngOnOff'

```
angular.module('myApp', ['ngOnOff'])
```

# Example

## Factory Setup

You can easily add extend your factories by injecting `onOff`:

```
angular.module('myApp')
  .factory('myFactory', function(onOff) {

    var myFactory = {};

    // add subscriber functions to your module
    onOff.addTo(myFactory);

    return myFactory;

  }
```

## Extending Classes

TODO

## Subscribing

TODO

## Publishing

TODO

## Unsubscribing

TODO
