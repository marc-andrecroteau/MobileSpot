

(function(app) {

    var login = function() {
        //-----------------------------------------------
        // Main Entry Point
        //-----------------------------------------------
        // This function will get executed when
        // $.ui.launch has completed
        this.initialize();
        $.ui.ready(function () {
            alert("ui ready login");
            $("#login").bind("loadpanel", function() {
                alert("login panel loaded");
            });
        });
    };

    login.prototype = {
        initialize: function() {

        },
        loadedPanel: function(what) {
            // $.ui.updateBadge("#aflink", $("#af").find("li").length);
            alert("loaded");
        },

        unloadedPanel: function(what) {
            // TODO: Remove this
            console.log("unloaded " + what.id);
        }
    };

    app.login = new login();

})(app);
