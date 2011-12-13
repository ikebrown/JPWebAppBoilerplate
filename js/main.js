// Filename: main.js

// Require.js allows us to configure shortcut alias
// There usage will become more apparent futher along in the tutorial.
require.config({
    baseUrl: 'js',
    paths: {
        modernizr: 'libs/modernizr-2.0.6.min',
        jquery: 'libs/jquery/jquery-1.6.2.min',
        underscore: 'libs/underscore-1.2.3.min',
        backbone: 'libs/backbone/backbone-0.5.3-optamd3.min',
        handlebars: 'libs/handlebars-1.0.0.beta.4',
        order: 'libs/require/order-1.0.0.min',
        text: 'libs/require/text-1.0.2.min',
        i18n: 'libs/require/i18n-1.0.0.min',
        domReady: 'libs/require/domReady-1.0.0.min',
        bootstrapAlerts: 'libs/bootstrap/bootstrap-alerts',
        bootstrapButtons: 'libs/bootstrap/bootstrap-buttons',
        bootstrapDropdown: 'libs/bootstrap/bootstrap-dropdown',
        bootstrapModal: 'libs/bootstrap/bootstrap-modal',
        bootstrapTwipsy: 'libs/bootstrap/bootstrap-twipsy',
        bootstrapPopover: 'libs/bootstrap/bootstrap-popover',
        bootstrapScrollspy: 'libs/bootstrap/bootstrap-scrollspy',
        bootstrapTabs: 'libs/bootstrap/bootstrap-tabs',
        templates: '../templates'
    },
    priority: ['modernizr','jquery', 'underscore', 'backbone', 'handlebars']

});

require([

    // Load our app module and pass it to our definition function
    'app',

], function(App){
    // The "app" dependency is passed in as "App"
    // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
    App.initialize();
});