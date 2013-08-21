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
   * Welcome View
   * -----------------------------------------------------------------------------------------------------------------
   */
  jQuery('#sendMethodForm').submit(function (event) {
    event.preventDefault();

    var queryMethod = jQuery('#methodText').val();
    Server.SendAjaxRequest(Server.queryURL, queryMethod, null, sendMethodFormSuccess);

    return false;
  });


  var sendMethodFormSuccess = function (data, status, jqXHR) {
    var xmlResponse = Smartlink.GetParsedXMLResponse(jqXHR);
    if (xmlResponse.hasError == true) {
      alert(xmlResponse.errorText);
      return;
    }

    var output = "";
    var $xml = xmlResponse.$data;
    $xml = $xml.children().children();
    $xml.each(function () {
      output += jQuery(this).children("Description").text() + "<br>";
    });
    jQuery('#methodResult').html(output);
  };


  jQuery('#nextPage').click(function () {
    createComponentsList();
    jQuery.mobile.changePage("index.html#componentsPage", { transition:"turn" });
    jQuery('#componentsList').listview('refresh');
  });

//======================================================================================================================
//});
