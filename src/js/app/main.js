

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
$.ui.ready(function () {
    $("#notifications").on("loadpanel", function(event){
        //alert("Panel Loaded: " + event);
    });
    // This function will get executed when $.ui.launch has completed
});
