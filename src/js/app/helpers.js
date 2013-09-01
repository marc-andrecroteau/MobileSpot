jQuery(function() {

    // Prevent escaping the Panel html
    Handlebars.registerHelper("panel", function(panel, options) {
        return new Handlebars.SafeString(panel);
    });

});
