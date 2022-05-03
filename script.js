function validate()
{
    var x=document.getElementById("text1").value
    var y=document.getElementById("text2").value
    

   

     if(x=="")
     {
         alert("First Name should be filled out")
     }
 
    
     if(!((/[a-zA-Z]/).test(x)))
     {
        
         alert("First Name contains Only character")
 
     }

     if(y=="")
     {
         alert("email should be filled out")
     }
     
 
     
   
    
     
 
    }

    