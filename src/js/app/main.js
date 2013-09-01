

jQuery(document).on("ready", function() {
    var mobilespot = new MobileApp();
    mobilespot.router = new MobileRouter();
    Backbone.history.start();
});



var MobileRouter = Backbone.Router.extend({
    initialize: function() {
        this.panel = new MobileViews.Panel();
        this.panel.render();

        this.header = new MobileViews.Header();
        this.header.render();
        this.firstPage = true;
    },

    routes: {
        "":            "home",
        "spotlisting": "spotlisting",
        "help":        "help",
        "menu":        "menu"
    },

    home: function() {
        var view = new MobileViews.Home();
        view.model = {
            panel: this.panel.$el.html()
        };
        /*{
            friends: [
                { name: "Adélaïde Brochu", age: 88 },
                { name: "Germain Bélanger", age: 94 },
                { name: "Marie-George Pruneau", age: 78 },
                { name: "Théodule Henley", age: 92 }
            ]
        };*/
        view.render();
        this.changePage(view, true);
    },

    spotlisting: function() {
        var view = new MobileViews.SpotListing();

        view.model = {};
        view.render();

        this.changePage(view, true);
    },

    help: function() {
        var view = new MobileViews.Help();

        view.model = {
            panel: this.panel.$el.html()
        };
        view.render();
        this.changePage(view, true);
    },

    menu: function() {
        jQuery(this.panel.ui_id).panel("toggle");
    },

    changePage: function (page, refresh) {
        //jQuery(this.panel.id).css("display", "none");

        page.$el.attr({ "data-role": "page", "data-theme": "z" });
        page.render();

        page.$el.prepend(this.header.$el);
        //page.$el.append(this.panel.$el);
        jQuery("body").append(page.$el);
        var transition = "slide";
        // We don't want to slide the first page
        if (this.firstPage) {
            transition = 'none';
            this.firstPage = false;
        }
        jQuery.mobile.changePage(page.$el, {changeHash: false, transition: transition});
    }
});
