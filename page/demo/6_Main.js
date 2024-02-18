var sinvisiVar1 , sinvisiVar2 , sinvisiVar3 , sinvisiVar4 ;
sinvisiVar1 = sinvisiVar2 = sinvisiVar3 = sinvisiVar4 = 0 ;

function paeenA1()
{
   sinvisiVar1 += 1 ; 
   if ( sinvisiVar1 % 2 == 1 )  { document.getElementById("invisible1").style.display=
   "block"; 
document.getElementById("paeenI1").style.display="none";
document.getElementById("balaI1").style.display="inline";
    }
   else { document.getElementById("invisible1").style.display=
   "none"; }
      
   
}




function paeenA2()
{
   sinvisiVar2 += 1 ; 
   if ( sinvisiVar2 % 2 == 1 )  { document.getElementById("invisible2").style.display=
   "block"; 
   document.getElementById("paeenI2").class=
   "fas fa-arrow-up" ;
    }
   else { document.getElementById("invisible2").style.display=
   "none"; }
}


function paeenA3()
{
   sinvisiVar3 += 1 ; 
   if ( sinvisiVar3 % 2 == 1 )  { document.getElementById("invisible3").style.display=
   "block"; 
   document.getElementById("paeenI3").class=
   "fas fa-arrow-up" ;
    }
   else { document.getElementById("invisible3").style.display=
   "none"; }
}


function paeenA4()
{
   sinvisiVar4 += 1 ; 
   if ( sinvisiVar4 % 2 == 1 )  { document.getElementById("invisible4").style.display=
   "block"; 
   document.getElementById("paeenI4").class=
   "fas fa-arrow-up" ;
    }
   else { document.getElementById("invisible4").style.display=
   "none"; }
}
