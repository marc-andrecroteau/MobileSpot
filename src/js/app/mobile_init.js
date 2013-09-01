jQuery(document).on("mobileinit", function(){
    //jQuery.mobile.allowCrossDomainPages = true;
    jQuery.mobile.buttonMarkup.hoverDelay = 20;
    jQuery.mobile.ajaxEnabled = false;
    jQuery.mobile.linkBindingEnabled = false;
    jQuery.mobile.hashListeningEnabled = false;
    jQuery.mobile.pushStateEnabled = false;
    $.mobile.defaultPageTransition = "none";
    $.mobile.page.prototype.options.degradeInputs.date = true; // optional
    $.mobile.page.prototype.options.domCache = false; // optional
    $.mobile.defaultDialogTransition = "none"; // optional depends on performance

    // Remove page from DOM when it's being replaced
    jQuery('div[data-role="page"]').on('pagehide', function (event, ui) {
        jQuery(event.currentTarget).remove();
    });
});
