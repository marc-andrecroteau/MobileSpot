

function loadedPanel(what) {
    // $.ui.updateBadge("#aflink", $("#af").find("li").length);
}

function unloadedPanel(what) {
    // TODO: Remove this
    console.log("unloaded " + what.id);
}



//-----------------------------------------------
// Main Entry Point
//-----------------------------------------------
// This function will get executed when
// $.ui.launch has completed
$.ui.ready(function () {

    // Fixes Side Menu Scrolling bug on Android.
    // When closing keyboard with Side Menu opened, scrolling will not go back
    // to top if the content of the menu does not overflow, making the user
    // unable to see the whole content.
    $.bind($.touchLayer, "exit-edit", function() {
        $("#menu_scroller").css("-webkit-transform", "translate3d(0px, 0px, 0)");
    });

});
