

jQuery(function() {
    FastClick.attach(document.body);
});




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
