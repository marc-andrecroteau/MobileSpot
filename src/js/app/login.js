

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

            var client = new WindowsAzure.MobileServiceClient(
                "https://mobilespot.azure-mobile.net/",
                "xOCtezLwZZaxMDsaGwLxZNIvPCUyze48"
            );
            //var item = { text: "Kaven item" };
            //client.getTable("Item").insert(item);
            $("#loginbutton").on("click", function() {
                client.login("facebook").then(
                    function() {
                        alert("Logged in to Facebook: " + client.currentUser.userId);
                    },
                    function(error){
                        alert(error);
                    }
                );
            });

            $("#logoutbutton").on("click", function() {
                client.logout();
            });
        },

        loadedPanel: function(what) {
            alert("login panel loaded");
        },

        unloadedPanel: function(what) {

        }
    };

    app.login = new Login("login");

})(app);
