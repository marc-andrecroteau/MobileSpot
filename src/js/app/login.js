

  jQuery('#loginForm').submit(function (event) {
    event.preventDefault();

    var url = jQuery('#serverURL').val(),
      user = jQuery('#username').val(),
      pass = jQuery('#password').val();

    var queryURLContext = {
      protocol: Defaults.protocol,
      serverURL: url,
      serverPort: Defaults.port,
      serviceName: Defaults.serviceName
    };
    dust.render("queryURL", queryURLContext, function (err, out) {
      Server.queryURL = out;
      var queryData = {
        username: user,
        password: pass
      };
      Server.SendLoginRequest(Server.queryURL, queryData, loginFormSuccess);
    });

    return false;
  });


  var loginFormSuccess = function (data, status, jqXHR) {
    var xmlResponse = Smartlink.GetParsedXMLResponse(jqXHR);
    if (xmlResponse.hasError === true) {
      alert(xmlResponse.errorText);
      return;
    }
    var $xml = xmlResponse.$data;

    var operatorInformation = Smartlink.GetOperatorInformation($xml);
    if (operatorInformation.hasError === true) {
      alert(operatorInformation.errorText);
      return;
    }

    var operatorInformationData = operatorInformation.$data;
    var operatorInformationContext = {
      username:operatorInformationData.username,
      email:operatorInformationData.email,
      lastLogin:operatorInformationData.lastLogin,
      sessionKey:operatorInformationData.sessionKey
    };
    dust.render("operatorInfo", operatorInformationContext, function (err, out) {
      jQuery('#welcomeText').html(out);
      jQuery.mobile.changePage("index.html#welcomePage", { transition:"turn" });
    });
  };