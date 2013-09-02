
/*-----------------------------------------------
 * Application Views
 *---------------------------------------------*/
var MobileViews = {
    getTemplate: function(name) {
        return Handlebars.templates[name];
    },

    Home: Backbone.View.extend({
        initialize: function() {
            this.page_id = "home";
            this.template = MobileViews.getTemplate("home");
        },

        render: function() {
            this.$el.html(this.template(this.model));
            return this;
        }
    }),

    Help: Backbone.View.extend({
        initialize: function() {
            this.page_id = "help";
            this.template = MobileViews.getTemplate("help");
        },

        render: function() {
            this.$el.html(this.template(this.model));
            return this;
        }
    }),

    Login: Backbone.View.extend({
        initialize: function() {
            this.page_id = "login";
            this.template = MobileViews.getTemplate("login");
        },

        render: function() {
            this.$el.html(this.template(this.model));
            return this;
        }
    }),

    SpotListing: Backbone.View.extend({
        initialize: function() {
            this.page_id = "spotlisting";
            this.template = MobileViews.getTemplate("spotlisting");
        },

        render: function() {
            this.$el.html(this.template(this.model));
            return this;
        }
    })
};
