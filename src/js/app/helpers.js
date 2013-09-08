
//-----------------------------------------------
// Handlebars Helpers
//-----------------------------------------------
(function() {

    // Outputs unescaped HTML
    Handlebars.registerHelper("html", function(data, options) {
        return new Handlebars.SafeString(data);
    });

})();
