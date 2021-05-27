$(document).ready(function(){
    $("#demo").validate({
     rules:{
         name:{
             required:true,

         },
         email:{
             required:true,
         },
         phone:{
             required:true
         },
         date:{
             required:true
         }

        }
    })
})
