$(document).ready(function(){
 $("#signup").validate({
     rules:{
         fname:{
             required:true,
             minlength:4
         }
     }

 })   
})

      