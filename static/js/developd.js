$(document).ready(function(){

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
            scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  // window.location.href = "#";
  $("body").tooltip({ selector: '[data-toggle=tooltip]' });

});

function validateEmail(email) { 
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validateText(text){
  return text.length > 2;
}

$(function() {

  $( "#contactEmailForm" ).click(function() {
  
    var obj                 = new Object(); 
    
    var contactEmailName    = $("#contactEmailName").val();
    var contactEmailEmail   = $("#contactEmailEmail").val();
    var contactEmailSubject = $("#contactEmailSubject").val();
    var contactEmailMessage = $("#contactEmailMessage").val();

    formValid = true;

    // name
    if(validateText(contactEmailName)){
      $("#contactEmailNameParent").removeClass("has-error").addClass("has-success");
    }
    else{
      formValid = false;
      $("#contactEmailNameParent").addClass("has-error");
      $("#contactEmailAlertFAIL").show();
    }
    // email
    if(validateEmail(contactEmailEmail)){
      $("#contactEmailEmailParent").removeClass("has-error").addClass("has-success");
    }
    else{
      formValid = false;
      $("#contactEmailEmailParent").addClass("has-error");
      $("#contactEmailAlertFAIL").show();
    }
    // subject
    if(validateText(contactEmailSubject)){
      $("#contactEmailSubjectParent").removeClass("has-error").addClass("has-success");
    }
    else{
      formValid = false;
      $("#contactEmailSubjectParent").addClass("has-error");
      $("#contactEmailAlertFAIL").show();
    }
    // message
    if(validateText(contactEmailMessage)){
      $("#contactEmailMessageParent").removeClass("has-error").addClass("has-success");
    }
    else{
      formValid = false;
      $("#contactEmailMessageParent").addClass("has-error");
      $("#contactEmailAlertFAIL").show();
    }
    

    if(formValid){

      $("#contactEmailForm").addClass("disabled");
      $("#contactEmailAlertFAIL").hide();

      obj.contactEmailName    = contactEmailName;
      obj.contactEmailEmail   = contactEmailEmail;
      obj.contactEmailSubject = contactEmailSubject;
      obj.contactEmailMessage = contactEmailMessage;
      
      var formData  = JSON.stringify(obj);
      var postUrl   = "/email/contact";
      $.ajax({
          type: "PUT",
          url: postUrl,
          data: formData
      }).success (function (result) {
        $("#contactEmailAlertOK").show();
      }).fail (function (result) {
        $("#contactEmailAlertFAIL").show();
      });

    }
  
  });

  $( "#mailingListEmailForm" ).click(function() {

    var tempEmail = $("#mailingListEmail").val();

    if(validateEmail(tempEmail)){

      var obj       = new Object(); 
      obj.email     = tempEmail;
      
      var formData  = JSON.stringify(obj);
      var postUrl   = "/email/mailingList";
      $.ajax({
          type: "PUT",
          url: postUrl,
          data: formData
      }).success (function (result) {
        document.getElementById("mailingListForm").style.display = "none";
        document.getElementById("mailingListEmailAlertFAIL").style.display = "none";
        document.getElementById("mailingListEmailAlertOK").style.display = "block";
      }).fail (function (result) {
        document.getElementById("mailingListEmailAlertOK").style.display = "none";
        document.getElementById("mailingListEmailAlertFAIL").style.display = "block";
      });

    }
    else{
      document.getElementById("mailingListEmailAlertOK").style.display = "none";
      document.getElementById("mailingListEmailAlertFAIL").style.display = "block";
    }
  
  });

  /* Every time the window is scrolled ... */
  $(window).scroll( function(){
  
    /* Check the location of each desired element */
    $('.hideMe').each( function(i){
        
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      
      /* If the object is completely visible in the window, fade it it */
      if( bottom_of_window > bottom_of_object ){
          
        $(this).animate({'opacity':'1'},1000);
              
      }
        
    });
  
  });
    
});
  
