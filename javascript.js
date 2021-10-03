
var lee=document.getElementById("lang");
var Kh=document.getElementById("khmer");
function op1(){
    Kh.style.display='block';
    lee.style.display='none';

}
var lee=document.getElementById("lang");
var En=document.getElementById("Eng");
function op2(){
    Kh.style.display='none';
    En.style.display='block';
    lee.style.display='none';

}
var mena=document.getElementById("ip1");
var OK=document.getElementById("ok");
function men1(){
    OK.style.display='block';
    mena.style.display='block';
    menb.style.display='none';
    menc.style.display='none';
    mend.style.display='none';
}
var menb=document.getElementById("ip2");
function men2(){
    OK.style.display='block';
    menb.style.display='block';
    mena.style.display='none';
    menc.style.display='none';
    mend.style.display='none';
}
var menc=document.getElementById("ip3");
function men3(){
    OK.style.display='block';
    menc.style.display='block';
    mena.style.display='none';
    menb.style.display='none';
    mend.style.display='none';
}
var mend=document.getElementById("ip4");
function men4(){
    OK.style.display='block';
    mend.style.display='block';
    menc.style.display='none';
    mena.style.display='none';
    menb.style.display='none';
}
var customalert10=document.getElementById("customAlert10");
var customalert=document.getElementById("customAlert");
function showcustom(){
    var ao=document.getElementById("name").value;
    var a=document.getElementById("old").value;
    var b=document.getElementById("num").value;
    var c1=document.getElementById("dat1").value;
    var c2=document.getElementById("dat2").value;
    var c3=document.getElementById("dat3").value;

    if(a>="15"&&a<="21"&&ao=="thanak"||ao=="Thanak"||ao=="THANAK"||ao=="maly"||ao=="Maly"||ao=="MALY")
    {
        customalert.style.display='block';
    }
    else if(a>="14"&&a<="18")
    {
        customalert10.style.display='block';
    }
    else if(b=="123") 
    {
        customalert.style.display='block';
    }
    else if(c1=="10"&&c2=="04"&&c3=="2001")
    {
        customalert.style.display='block';
    }
    else
    {
        customalert10.style.display='none';
    }
}
function hide(){
    customalert.style.display='none';
    customalert10.style.display='none';
}

