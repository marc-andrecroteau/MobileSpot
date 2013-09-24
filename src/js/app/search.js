

// Search Feature
//-----------------------------------------------
// This will Search for all Spots according to
// the Search Terms. It will then display a list
// of these Spots and allow the user to Filter
// By City.


(function(app) {
    "use strict";

    var Search = function(panelID) {
        this.initialize(panelID);
        $.ui.ready(function() { app.search.ready(); });
    };

    Search.prototype = {
        id: "",
        $searchbox: $(),

        initialize: function(panelID) {
            this.id = panelID;
        },

        ready: function() {
            this.$searchbox = $("#" + this.id);
            this.$searchbox.on("input", function(e) {
                alert(app.login.isConnected);
            });
        }
    };

    app.search = new Search("search");

})(app);
