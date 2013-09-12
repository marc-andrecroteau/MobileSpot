


if (!window.app || typeof(app) !== "function") {

    var app = function(window) {
        "use strict";

        var document = window.document;

        window.$.ui.autoLaunch = false;

        document.addEventListener((this.isPhonegapLoaded()) ? "deviceready" : "DOMContentLoaded", this.initialize(), false);

        window.$.ui.ready(function() {
            applyFixesAndPatches();
        });

        function applyFixesAndPatches() {
            // Fixes Side Menu Scrolling bug on Android.
            // When closing keyboard with Side Menu opened, scrolling will not go back
            // to top if the content of the menu does not overflow, making the user
            // unable to see the whole content.
            window.$.bind($.touchLayer, "exit-edit", function(e) {
                window.$("#menu_scroller").css("-webkit-transform", "translate3d(0px, 0px, 0)");
            });
        }
    };

    app.prototype = {
        initialize: function () {
            // TODO: KG - Put back delays and implement splash screen
            //window.setTimeout(function () {
            window.$.ui.showBackButton = false;
            window.$.ui.setSideMenuWidth((window.$("#content").width() - 40) + "px");
            window.$.ui.launch();
            window.$.ui.removeFooterMenu();
            //}, 1500);//We wait 1.5 seconds to call $.ui.launch after DOMContentLoaded fires
        },

        defaultValue: function(variable, defaultValue) {
            return (variable != null) && (typeof(variable) !== 'undefined') ? (variable) : (defaultValue);
        },

        // TODO: KG - This might be in the wrong place.
        showHide: function(obj, objToHide) {
            var el = $("#" + objToHide)[0];
            if (obj.className == "expanded") {
                obj.className = "collapsed";
            } else {
                obj.className = "expanded";
            }
            $(el).toggle();
        },

        // Verify that cordoja.js or phonegap.js is loaded.
        isPhonegapLoaded: function() {
            return ((typeof(PhoneGap) != 'undefined') || (typeof(cordova) != 'undefined'))
                     && /^file:\/{3}[^\/]/i.test(window.location.href)
                     && /ios|iphone|ipod|ipad|android/i.test(navigator.userAgent);
        },

        // Verify that both cdv-plugin-fb-connect.js and facebook-js-sdk.js are included.
        isFacebookPluginLoaded: function() {
            return (typeof(CDV) != 'undefined') && (typeof(FB) != 'undefined');
        }
    };

    window.app = new app(window);
}


/*
window.onerror = function(msg, url, line) {
    // You can view the information in an alert to see things working
    // like so:
    alert("Error: " + msg + "\nurl: " + url + "\nline #: " + line);

    // TODO: Report this error via ajax so you can keep track
    //       of what pages have JS issues

    var suppressErrorAlert = true;
    // If you return true, then error alerts (like in older versions of
    // Internet Explorer) will be suppressed.
    return suppressErrorAlert;
};
*/


//-----------------------------------------------
// Javascript Overrides and Overloads
//-----------------------------------------------
String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) {
        return typeof(args[number]) != 'undefined' ? args[number] : match;
    });
};
