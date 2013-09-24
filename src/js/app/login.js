

(function(app) {
    "use strict";

    var Login = function(panelID) {
        this.initialize(panelID);
        $.ui.ready(function() { app.login.ready(); });
    };

    Login.prototype = {
        id: "",
        $panel: $(),
        isConnected: true,

        initialize: function(panelID) {
            this.id = panelID;
        },

        ready: function() {
            this.$panel = $("#" + this.id);
            this.$panel.bind("loadpanel", this.loadedPanel);
            this.$panel.bind("unloadpanel", this.unloadedPanel);
        },

        loadedPanel: function(what) {
            alert("login panel loaded");
        },

        unloadedPanel: function(what) {

        }
    };

    app.login = new Login("login");

})(app);
