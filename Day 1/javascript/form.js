
$(document).ready(function(){
    $("#login").validate({
     rules:{
         fname:{
             required:true,
             minlength:5
         },
         email:{
             required:true,
             email:true
         },
         select:{
             required:true
         },
              password: "required",
              confirmpassword: {
                equalTo: "#password"
                
              }
            }
     })
    })