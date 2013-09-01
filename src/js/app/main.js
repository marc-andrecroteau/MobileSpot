

jQuery(document).on("ready", function() {
    var mobilespot = new MobileApp();
    mobilespot.router = new MobileRouter();
    Backbone.history.start();
});



var MobileRouter = Backbone.Router.extend({
    initialize: function() {
        this.panel = new MobileViews.Panel();
        this.panel.render();
    },

    routes: {
        "":         "home",
        "spotlist": "spotlist",
        "help":     "help"
    },

    home: function() {
        var view = new MobileViews.Home();
        view.model = {};
        /*
        view.model = {
            friends: [
                { name: "Adélaïde Brochu", age: 88 },
                { name: "Germain Bélanger", age: 94 },
                { name: "Marie-George Pruneau", age: 78 },
                { name: "Théodule Henley", age: 92 }
            ]
        };
        */
        view.render();
        this.changePage(view, true);
    },

    spotlist: function() {

    },

    help: function() {

    },

    changePage: function (page, refresh) {
        page.$el.attr({ "data-role": "page", "data-theme": "z" });
        page.render();
        page.$el.append(this.panel.$el);
        jQuery("body").append(page.$el);
        var transition = jQuery.mobile.defaultPageTransition;
        // We don't want to slide the first page
        if (this.firstPage) {
            transition = 'none';
            this.firstPage = false;
        }
        jQuery.mobile.changePage(page.$el, {changeHash: false, transition: transition});
    }
});
