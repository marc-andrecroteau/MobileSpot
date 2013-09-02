

/*-----------------------------------------------
 * Main Entry Point
 *---------------------------------------------*/
jQuery(document).on("ready", function() {
    var mobilespot = new MobileApp();
    mobilespot.router = new MobileRouter();
    Backbone.history.start();
});



var MobileRouter = Backbone.Router.extend({
    initialize: function() {
        //this.firstPage = true;
    },

    routes: {
        "":            "home",
        "spotlisting": "spotlisting",
        "help":        "help",
        "menu":        "menu"
    },

    home: function() {
        var view = new MobileViews.Home();
        view.model = {};
        view.render();
        this.changePage(view);
    },

    spotlisting: function() {
        var view = new MobileViews.SpotListing();
        view.model = {};
        view.render();
        this.changePage(view);
    },

    help: function() {
        var view = new MobileViews.Help();
        view.model = {};
        view.render();
        this.changePage(view);
    },

    changePage: function (page) {
        page.render();
        jQuery("#menu").panel("close");
        jQuery("#container").html(page.$el);
        jQuery('div[data-role="page"]').trigger("pagecreate");
    }
});
