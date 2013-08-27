

String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) {
        return typeof args[number] != 'undefined' ? args[number] : match;
    });
};


function defaultValue(variable, defaultValue) {
    return (variable != null) && (typeof variable !== 'undefined') ? (variable) : (defaultValue);
}


function XMLResponseObject() {
    this.hasError = false;
    this.errorText = "";
    this.$data = "";
}
