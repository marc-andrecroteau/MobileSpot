
jQuery(document).ready(function() {
    var template = Handlebars.templates["test"];
    var context = {title: "My New Post", body: "This is my first post!"};
    var html    = template(context);
    alert(html);
});
