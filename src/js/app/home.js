
jQuery(document).on("ready", function() {
    var template = Handlebars.templates["tpl2"];
    var context = {
        friends: [
            { name: "Adélaïde Brochu", age: 88 },
            { name: "Germain Bélanger", age: 94 },
            { name: "Marie-George Pruneau", age: 78 },
            { name: "Théodule Henley", age: 92 }
        ]
    };
    var html = template(context);
    var $spotlist = jQuery("#spotlist");
    $spotlist.append('<li data-role="list-divider"></li>');
    $spotlist.append(html);
    $spotlist.append('<li data-role="list-divider"></li>');
    $spotlist.listview('refresh');
});
