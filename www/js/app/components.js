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
   * Components View
   * -----------------------------------------------------------------------------------------------------------------
   */
  var createComponentsList = function () {
    var list = jQuery('#componentsList');
    dust.render("componentsList", Defaults, function (err, out) {
      list.html(out);
    });
    var len = Defaults.components.length;
    for (var i = 0; i < len; i++) {
      if (i in Defaults.components) {
        var component = Defaults.components[i];
        jQuery(("#section{0}").format(component.name)).click(function () {
          requestComponentInformation(this);
        });
      }
    }
  };


  var requestComponentInformation = function (t) {
    var queryMethod = jQuery(t).text();
    Server.SendAjaxRequest(Server.queryURL, queryMethod, null, requestComponentInformationSuccess);
  };


  var requestComponentInformationSuccess = function (data, status, jqXHR) {
    var xmlResponse = Smartlink.GetParsedXMLResponse(jqXHR);

    //TODO: Temporary - Need to implement it
    var output = "";
    var $xml = xmlResponse.$data;
    $xml = $xml.children().children();
    $xml.each(function () {
      output += jQuery(this).children("Description").text() + "<br>";
    });
    alert(output);
    //TODO: ================================
  };

//======================================================================================================================
//});
