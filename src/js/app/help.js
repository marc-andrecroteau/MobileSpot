

jQuery(document).on('pagebeforeshow', '#help', function(){
    jQuery("#contact-form").submit(function(event){
        event.preventDefault();

        if(validateContactForm($(this))) {
            Server.SendContactRequest({
                    MessageType : jQuery(this).find("#Contact_Message_Kind option:selected").val(),
                    Name : jQuery(this).find("#Contact_Name").val(),
                    Subject : jQuery(this).find("#Contact_Subject").val(),
                    Message : jQuery(this).find("#Contact_Message").val()
                },
                function () {
                    $.mobile.showPageLoadingMsg(true); // This will show ajax spinner
                },
                function () {
                    $.mobile.hidePageLoadingMsg(); // This will hide ajax spinner
                    alert("");
                }
            );
        }

        return false;
    });
});

function validateContactForm($form) {
    return (validate($form.find("#Contact_Message_Kind option:selected"), Validation.Mandatory) &
            validate($form.find("#Contact_Name"), Validation.Mandatory) &
            validate($form.find("#Contact_Subject"), Validation.Mandatory) &
            validate($form.find("#Contact_Message"), Validation.Mandatory));
}

function validate($element, $error) {
    var $isValid = true;

    switch ($error) {
        case Validation.Mandatory :
            if($element.val() == "")
            {
                $isValid = false;
                console.log("#" + $element.prop("id") + "_Error");
                var $errorElement = jQuery("#" + $element.prop("id") + "_Error");
                $errorElement.text("This field is mandatory.");
                $errorElement.removeClass("display-none");
            }
            break;
    }

    return ($isValid);
}
