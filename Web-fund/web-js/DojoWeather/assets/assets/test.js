

function ale(){
    alert("this page says loading weather report");
}
var temc=[];
temc=document.querySelectorAll(".temmm");
console.log(temc);
function change(){
    for(var i=0;i<temc.length;i++){
    var f=(temc[i].innerText*1.8)+32;
    console.log(f);
    temc[i].innerText=Math.round(f);
    
    }
}
function change2(){
    for(var i=0;i<temc.length;i++){
        var f=(temc[i].innerText-32)*0.56;
        console.log(f);
        temc[i].innerText=Math.round(f);
}
}
function changeselect(x){
    if( x.value ==2){
        change();
    }
    else {
        change2();
    } 


}

function deletee(){
   var elem = document.querySelector(".cookie");
    elem.remove();
}


