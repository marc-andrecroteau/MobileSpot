

jQuery(document).ready(function () {
    jQuery.get({
        url: "js/app/init.js",
        dataType: "script",
        success: otherScripts
    });

    var otherScripts = function() {
        jQuery.get({
            url: "js/app/login.js",
            dataType: "script"
        });
        /*
        jQuery.getScript("js/app/init.js", function () {
            jQuery.getScript("js/app/login.js");
        });
        */
    }
});
