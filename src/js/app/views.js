
/*-----------------------------------------------
 * Application Views
 *---------------------------------------------*/
var MobileViews = {
    getTemplate: function(name) {
        return Handlebars.templates[name];
    },

    Home: Backbone.View.extend({
        initialize: function() {
            this.template = MobileViews.getTemplate("home");
        },

        render: function() {
            this.$el.html(this.template(this.model));
            return this;
        }
    }),

    Help: Backbone.View.extend({
        initialize: function() {
            this.template = MobileViews.getTemplate("help");
        },

        render: function() {
            this.$el.html(this.template(this.model));
            return this;
        }
    }),

    SpotListing: Backbone.View.extend({
        initialize: function() {
            this.template = MobileViews.getTemplate("spotlisting");
        },

        render: function() {
            this.$el.html(this.template(this.model));
            return this;
        }
    })
};
