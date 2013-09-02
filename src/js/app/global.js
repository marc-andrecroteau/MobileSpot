

/*-----------------------------------------------
 * MobileApp Object
 *---------------------------------------------*/
var MobileApp = function() {
    this.initialize = function() {
        this.models = {};
        this.panel = {};
    };
};



/*-----------------------------------------------
 * Utility Methods
 *---------------------------------------------*/
String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) {
        return typeof args[number] != 'undefined' ? args[number] : match;
    });
};

function defaultValue(variable, defaultValue) {
    return (variable != null) && (typeof variable !== 'undefined') ? (variable) : (defaultValue);
}


Validation = {
    Mandatory : 0
};


/*-----------------------------------------------
 * Fix for Panel Independent Scroll
 *---------------------------------------------*/
var panelTimer;
jQuery(document).bind('panelopen', function(e, data) {
        var panelPosition = jQuery(document).scrollTop();
        panelTimer = setInterval(function() {
            jQuery(document).scrollTop(panelPosition);
        }, 20);
});
jQuery(document).bind('panelclose', function(e, data) {
    clearInterval(panelTimer);
});


jQuery(document).on("ready", function() {
    /*-------------------------------------------
     * Fix for Search Box Focus Triggering
     * Header slide animation
     *-----------------------------------------*/
    $(".ui-page").unbind("focusin focusout");
});
