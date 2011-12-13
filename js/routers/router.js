// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone){
  
    var Router = Backbone.Router.extend({
        
        routes: {
          // Define some URL routes
          '': 'home',

          // Default
          '*actions': 'home'
        },
        
        home: function() {
            
        }

    });

    var initialize = function(){
        
        var router = new Router;
        Backbone.history.start();
    };

    return {
        initialize: initialize
    }

});