

//-----------------------------------------------
// Global Properties and Overrides
//-----------------------------------------------
var webRoot = "./"; // TODO: KG - Might be useless, ...to confirm.
$.ui.autoLaunch = false; // Prevents application running right away to show a splashscreen.

// This function runs when the body is loaded.
var init = function () {
    alert("suce1");
    // TODO: Put back delays and implement splash screen
    //window.setTimeout(function () {
        $.ui.showBackButton = false;
        $.ui.setSideMenuWidth(($("#content").width() - 40) + "px");
        $.ui.launch();
        $.ui.removeFooterMenu();
    //}, 1500);//We wait 1.5 seconds to call $.ui.launch after DOMContentLoaded fires
};
var init2 = function() {
    alert("suce2");
};
document.addEventListener("DOMContentLoaded", init, false);
document.addEventListener("deviceready", init2, false);



//-----------------------------------------------
// Utility Methods
//-----------------------------------------------
String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) {
        return typeof args[number] != 'undefined' ? args[number] : match;
    });
};

function defaultValue(variable, defaultValue) {
    return (variable != null) && (typeof variable !== 'undefined') ? (variable) : (defaultValue);
}

function showHide(obj, objToHide) {
    var el = $("#" + objToHide)[0];
    if (obj.className == "expanded") {
        obj.className = "collapsed";
    } else {
        obj.className = "expanded";
    }
    $(el).toggle();
}




Validation = {
    Mandatory : 0
};




//-----------------------------------------------
// Fixes and Patches
//-----------------------------------------------
$.ui.ready(function () {

    // Fixes Side Menu Scrolling bug on Android.
    // When closing keyboard with Side Menu opened, scrolling will not go back
    // to top if the content of the menu does not overflow, making the user
    // unable to see the whole content.
    $.bind($.touchLayer, "exit-edit", function(e) {
        $("#menu_scroller").css("-webkit-transform", "translate3d(0px, 0px, 0)");
    });

});


