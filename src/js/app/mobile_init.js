
/*-----------------------------------------------
 * Initialize jQuery Mobile Settings
 * This needs to be loaded before jQuery Mobile
 *---------------------------------------------*/
jQuery(document).on("mobileinit", function(){
    //jQuery.mobile.allowCrossDomainPages = true;
    jQuery.mobile.buttonMarkup.hoverDelay = 20;
    jQuery.mobile.ajaxEnabled = false;
    jQuery.mobile.linkBindingEnabled = false;
    jQuery.mobile.hashListeningEnabled = false;
    jQuery.mobile.pushStateEnabled = false;
    jQuery.mobile.defaultPageTransition = "none";
    //jQuery.mobile.page.prototype.options.degradeInputs.date = true; // optional
    //jQuery.mobile.page.prototype.options.domCache = false; // optional
    //jQuery.mobile.defaultDialogTransition = "none"; // optional depends on performance
});
