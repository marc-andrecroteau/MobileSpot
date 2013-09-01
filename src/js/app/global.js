

// MobileApp.js
var MobileApp = function() {
    this.initialize = function() {
        this.models = {};
        this.panel = {};
    };
};




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
