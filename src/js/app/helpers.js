

//-----------------------------------------------
// Handlebars Helpers
//-----------------------------------------------
(function(app) {

    // Outputs unescaped HTML
    Handlebars.registerHelper("html", function(data, options) {
        return new Handlebars.SafeString(data);
    });

})(app);
