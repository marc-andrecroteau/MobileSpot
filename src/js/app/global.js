

//-----------------------------------------------
// Global Properties and Overrides
//-----------------------------------------------
var webRoot = "./";
$.ui.autoLaunch = false; // Prevents application running right away to show a splashscreen.

// This function runs when the body is loaded.
var init = function () {
    // TODO: Put back delays and implement splash screen
    //window.setTimeout(function () {
        $.ui.showBackButton = false;
        $.ui.launch();
        $.ui.removeFooterMenu();
    //}, 1500);//We wait 1.5 seconds to call $.ui.launch after DOMContentLoaded fires
};
document.addEventListener("DOMContentLoaded", init, false);




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
