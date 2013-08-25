

(function() {
    var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
    templates['test'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


        buffer += "<div class=\"entry\">\n    <h1>";
        if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
        else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
        buffer += escapeExpression(stack1)
            + "</h1>\n    <div class=\"body\">\n		";
        if (stack1 = helpers.body) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
        else { stack1 = depth0.body; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
        buffer += escapeExpression(stack1)
            + "\n    </div>\n</div>\n";
        return buffer;
    });
    templates['test2'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


        buffer += "<div class=\"entry\">\n    <h1>";
        if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
        else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
        buffer += escapeExpression(stack1)
            + "</h1>\n    <div class=\"body\">\n		";
        if (stack1 = helpers.body) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
        else { stack1 = depth0.body; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
        buffer += escapeExpression(stack1)
            + "\n    </div>\n</div>\n";
        return buffer;
    });
})();

  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // Global Functions
  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  String.prototype.format = function () {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function (match, number) {
      return typeof args[number] != 'undefined' ? args[number] : match;
    });
  };


  function defaultValue(variable, defaultValue) {
    return (variable != null) && (typeof variable !== 'undefined') ? (variable) : (defaultValue);
  }


  function XMLResponseObject() {
    this.hasError = false;
    this.errorText = "";
    this.$data = "";
  }


  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // Global Objects
  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
/*
  var Defaults = {
    protocol:"http",
    port:8801,
    serviceName:"SmartService",
    keys:{
      sessionKey:"sdKey"
    },
    components:[
      { name:"Gateways" },
      { name:"Sites" },
      { name:"Controllers" },
      { name:"Doors" },
      { name:"Relays" },
      { name:"Inputs" }
    ],
    ajaxRequestError:function (jqXHR, status, errorThrown) {
      var output = status + " " + errorThrown;
      if (status == 'error') {
        output = status + " " + jqXHR.status + ": " + jqXHR.statusText;
      }
      else if (status == 'timeout') {
        output = status + " " + "after 5 seconds.";
      }
      alert(output);
    }
  };


  var Operator = {
    username:"",
    email:"",
    lastLogin:"",
    sessionKey:0
  };


  var Server = {
    queryURL:"",
    SendLoginRequest:function (url, data, success) {
      this.SendAjaxRequest(url, "Login", data, success, null, null, false);
    },
    SendAjaxRequest:function (url, method, data, success, error, timeout, addSessionKey) {
      data = defaultValue(data, {});
      error = defaultValue(error, Defaults.ajaxRequestError);
      timeout = defaultValue(timeout, 5000);
      addSessionKey = defaultValue(addSessionKey, true);

      if (addSessionKey === true) {
        data[Defaults.keys.sessionKey] = Operator.sessionKey;
      }

      var out = [];
      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          out.push(key + '=' + data[key]);
        }
      }
      data = out.join('&');
      if (data.length > 0) {
        method += '?' + data;
      }

      jQuery.ajax({
        url:url + method,
        dataType:"xml",
        timeout:timeout,
        success:success,
        error:error
      });
    }
  };


  var Smartlink = {
    GetParsedXMLResponse:function (jqXHR) {
      var $xml = jQuery(jQuery.parseXML(jqXHR.responseText));
      var xmlResponseObject = new XMLResponseObject();

      var $stdFault = $xml.find("StandardFault");
      if ($stdFault.length > 0) {
        $stdFault = $xml.find("Message");
        xmlResponseObject.hasError = true;
        xmlResponseObject.errorText = $stdFault.text();
        return xmlResponseObject;
      }
      xmlResponseObject.$data = $xml;
      return xmlResponseObject;
    },
    GetOperatorInformation:function ($xml) {
      var $xmlOperator = $xml.find("Operator");
      var xmlResponseObject = new XMLResponseObject();

      if ($xmlOperator.length <= 0) {
        xmlResponseObject.hasError = true;
        xmlResponseObject.errorText = "Not able to find Operator Data in XML Response";
        return xmlResponseObject;
      }

      Operator.username = $xmlOperator.children("UserName").text();
      Operator.email = $xmlOperator.children("OperatorEmail").first().text();
      Operator.lastLogin = $xmlOperator.children("LastLogin").text();
      Operator.sessionKey = $xmlOperator.children("SessionKey").text();

      xmlResponseObject.$data = Operator;
      return xmlResponseObject;
    }
  };
*/
