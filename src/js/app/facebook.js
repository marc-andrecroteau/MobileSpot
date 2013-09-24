

(function(app){
    "use strict";

    var Facebook = function() {
        //this.initialize();
        $.ui.ready(function() { app.facebook.ready(); });
    };

    Facebook.prototype = {
        initialize: function() {
            FB.Event.subscribe('auth.login', function(response) {
                alert('auth.login event');
            });
            FB.Event.subscribe('auth.logout', function(response) {
                alert('auth.logout event');
            });
            FB.Event.subscribe('auth.sessionChange', function(response) {
                alert('auth.sessionChange event');
            });
            FB.Event.subscribe('auth.statusChange', function(response) {
                alert('auth.statusChange event');
            });
        },

        ready: function() {
            try {
                //FB.init({ appId: "492964707460823", nativeInterface: CDV.FB, useCachedDialogs: false});
            }
            catch (e) {
                alert(e); // TODO: KG - Development Mode. Remove for Prod.
            }
        },

        getSession: function() {
            alert("session: " + JSON.stringify(FB.getSession()));
        },

        login: function() {
            FB.login(
                function(response) {
                    if (response.authResponse) {
                        alert('logged in');
                    }
                    else {
                        alert('not logged in');
                    }
                },
                { scope: "email" }
            );
        },

        logout: function() {
            FB.logout(function(response) {
                alert('logged out');
            });
        },

        getLoginStatus: function() {
            FB.getLoginStatus(function(response) {
                if (response.status == 'connected') {
                    alert("logged in");
                }
                else {
                    alert("not logged in");
                }
            }, false);
        }

        /*
        facebookWallPost: function() {
            var params = {
                method:      'feed',
                name:        'Facebook Dialogs',
                link:        'https://developers.facebook.com/docs/reference/dialogs/',
                picture:     'http://fbrell.com/f8.jpg',
                caption:     'Reference Documentation',
                description: 'Dialogs provide a simple, consistent interface for applications to interface with users.'
            };
            console.log(params);
            FB.ui(params, function(obj) { console.log(obj);});
        }
        */
    };

    // TODO: KG - What to do if plugin is not loaded?
    if (app.isFacebookPluginLoaded) {
        app.facebook = new Facebook();
    }
})(app);
