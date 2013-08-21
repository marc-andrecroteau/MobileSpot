/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


//jQuery(document).ready(function () {
//======================================================================================================================

  /**
   * -----------------------------------------------------------------------------------------------------------------
   * Login View
   * -----------------------------------------------------------------------------------------------------------------
   */
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

//=====================================================================================================================
//});
