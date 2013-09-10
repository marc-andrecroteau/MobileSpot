

jQuery(document).on("pagecreate", "#login", function() {
    alert("suck me");
    try {
        alert('Device is ready! Make sure you set your app_id below this alert.');
        FB.init({ appId: "492964707460823", nativeInterface: CDV.FB, useCachedDialogs: false });
        document.getElementById('data').innerHTML = "";
    }
    catch (e) {
        alert(e);
    }
});




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

function getSession() {
    alert("session: " + JSON.stringify(FB.getSession()));
}

function getLoginStatus() {
    FB.getLoginStatus(function(response) {
        if (response.status == 'connected') {
            alert("logged in");
        }
        else {
            alert("not logged in");
        }
    }, false);
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
            }
            else {
                alert('not logged in');
            }
        },
        { scope: "email" }
    );
}

/*
function facebookWallPost() {
    var params = {
        method:      'feed',
        name:        'Facebook Dialogs',
        link:        'https://developers.facebook.com/docs/reference/dialogs/',
        picture:     'http://fbrell.com/f8.jpg',
        caption:     'Reference Documentation',
        description: 'Dialogs provide a simple, consistent interface for applications to interface with users.'
    };
    console.log(params);
    FB.ui(params, function(obj) { console.log(obj);});
}
*/
