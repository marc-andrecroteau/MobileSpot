

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
        "login":       "login"
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

    login: function() {
        var view = new MobileViews.Login();
        view.model = {};
        view.render();
        this.changePage(view);
    },

    changePage: function (page) {
        page.render();
        jQuery("#menu").panel("close");
        jQuery("#container").html(page.$el);
        jQuery('div[data-role="page"]').attr("id", page.page_id);
        jQuery('div[data-role="page"]').trigger("pagecreate");
    }
});


/*
jQuery(document).on("pagecreate", "#login", function() {
    alert("suck me");
    try {
        alert('Device is ready! Make sure you set your app_id below this alert.');
        FB.init({ appId: "492964707460823", nativeInterface: CDV.FB, useCachedDialogs: false });
        document.getElementById('data').innerHTML = "";
    } catch (e) {
        alert(e);
    }
});


<!-- These are the notifications that are displayed to the user through pop-ups if the above JS files does not exist in the same directory-->
if ((typeof cordova == 'undefined') && (typeof Cordova == 'undefined')) alert('Cordova variable does not exist. Check that you have included cordova.js correctly');
if (typeof CDV == 'undefined') alert('CDV variable does not exist. Check that you have included cdv-plugin-fb-connect.js correctly');
if (typeof FB == 'undefined') alert('FB variable does not exist. Check that you have included the Facebook JS SDK file.');

FB.Event.subscribe('auth.login', function(response) {
    alert('auth.login event');
});

FB.Event.subscribe('auth.logout', function(response) {
    alert('auth.logout event');
});

FB.Event.subscribe('auth.sessionChange', function(response) {
    alert('auth.sessionChange event');
});

FB.Event.subscribe('auth.statusChange', function(response) {
    alert('auth.statusChange event');
});
*/

/*function getSession() {
 alert("session: " + JSON.stringify(FB.getSession()));
 }
 */

/*
function getLoginStatus() {
    FB.getLoginStatus(function(response) {
        if (response.status == 'connected') {
            alert("logged in");
        } else {
            alert("not logged in");
        }
    });
}
var friendIDs = [];
var fdata;
function me() {
    FB.api('/me', function(me) {
        alert(me.name);
    });
    FB.api('/me/friends', { fields: 'id, name, picture' },  function(response) {
        if (response.error) {
            alert(JSON.stringify(response.error));
        } else {
            var data = document.getElementById('data');
            fdata=response.data;
            console.log("fdata: "+fdata);
            response.data.forEach(function(item) {
                var d = document.createElement('div');
                d.innerHTML = "<img src="+item.picture+"/>"+item.name;
                data.appendChild(d);
            });
        }
        var friends = response.data;
        console.log(friends.length);
        for (var k = 0; k < friends.length && k < 200; k++) {
            var friend = friends[k];
            var index = 1;

            friendIDs[k] = friend.id;
            //friendsInfo[k] = friend;
        }
        console.log("friendId's: "+friendIDs);
    });
}

function logout() {
    FB.logout(function(response) {
        alert('logged out');
    });
}

function login() {
    FB.login(
        function(response) {
            if (response.authResponse) {
                alert('logged in');
            } else {
                alert('not logged in');
            }
        },
        { scope: "email" }
    );
}


function facebookWallPost() {
    console.log('Debug 1');
    var params = {
        method: 'feed',
        name: 'Facebook Dialogs',
        link: 'https://developers.facebook.com/docs/reference/dialogs/',
        picture: 'http://fbrell.com/f8.jpg',
        caption: 'Reference Documentation',
        description: 'Dialogs provide a simple, consistent interface for applications to interface with users.'
    };
    console.log(params);
    FB.ui(params, function(obj) { console.log(obj);});
}

function publishStoryFriend() {
    randNum = Math.floor ( Math.random() * friendIDs.length );

    var friendID = friendIDs[randNum];
    if (friendID == undefined){
        alert('please click the me button to get a list of friends first');
    }else{
        console.log("friend id: " + friendID );
        console.log('Opening a dialog for friendID: ', friendID);
        var params = {
            method: 'feed',
            to: friendID.toString(),
            name: 'Facebook Dialogs',
            link: 'https://developers.facebook.com/docs/reference/dialogs/',
            picture: 'http://fbrell.com/f8.jpg',
            caption: 'Reference Documentation',
            description: 'Dialogs provide a simple, consistent interface for applications to interface with users.'
        };
        FB.ui(params, function(obj) { console.log(obj);});
    }
}
*/
