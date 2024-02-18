var showPasswordVar1 = showPasswordVar2 = 0 ;
let password1Let , password2Let , email , username ;
function condition () 
{ 
    var email = document.getElementById("email").value ;
    var password = 
    document.getElementById("password") ;
    var password2 = 
    document.getElementById("password2") ;
}
function showPassword_F1() {
    showPasswordVar1 += 1 ; 
    if ( showPasswordVar1 % 2 == 1 ) {
 document.getElementById("password1").type="txt";}
else { 
document.getElementById("password1").type="password" ; } }
function showPassword_F2() {
    showPasswordVar2 += 1 ; 
    if ( showPasswordVar2 % 2 == 1 ) {
 document.getElementById("password2").type="txt";}
else { 
document.getElementById("password2").type="password" ; } }



function signfirm()
{
    email = document.getElementById("email").value ;
    password1Let = 
    document.getElementById("password1").value ;
    password2Let =
     document.getElementById("password2").value ;
     document.getElementById("errorDiv1").style.display= 
     "none" ;
     document.getElementById("errorDiv2").style.display= 
     "none" ; 
     document.getElementById("errorDiv3").style.display= 
     "none" ; 
     if ( email == "" ) { 
     document.getElementById("errorDiv1").style.display=
     "block" ;
     document.getElementById("errorTxt1").innerHTML=
     "Error! the email box is empty. " ; }
     if ( password1Let == "" ) { 
     document.getElementById("errorDiv2").style.display=
     "block" ;
     document.getElementById("errorTxt2").innerHTML=
     "Error! the password box is empty. " ; }
     if ( password2Let == "" ) { 
     document.getElementById("errorDiv3").style.display=
     "block" ;
     document.getElementById("errorTxt3").innerHTML=
     "Error! the password box is empty. " ;  }
     if ( password1Let == password2Let )
     {
         if ( password1Let != "" ) {
             if ( email != "" )
             {
               console.log("همه چی درسته. ") ;
             document.location = ("/sjsj.html") ;
             }
         }
     }
     else {
     document.getElementById("errorDiv3").style.display= 
     "block" ; 
     document.getElementById("errorTxt3").innerHTML=
     "Error! the passwords are not equal.  " ;  
     }
}


function signfirm2() {
  username =
   document.getElementById("username").value ;
   document.getElementById("errorDiv1").style.display=
      "none" ;
   if( username == "" ) {
     document.getElementById("errorDiv1").style.display= 
     "block" ; 
     document.getElementById("errorTxt1").innerHTML=
     "Error! the username box is empty.  " ;  
   }
}
