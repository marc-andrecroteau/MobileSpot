
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
            this.$el.append();
            return this;
        }
    }),

    // Need to work on this part. The panel should be loaded
    // at the beginning and updated only when needed.
    // TODO: load only one time at the beginning
    // TODO: find a way to include it everywhere.
    Panel: Backbone.View.extend({
        initialize: function() {
            this.template = MobileViews.getTemplate("panel");
        },

        render: function() {
            this.parent.$el.append(this.template());
            return this;
        }
    })
};
