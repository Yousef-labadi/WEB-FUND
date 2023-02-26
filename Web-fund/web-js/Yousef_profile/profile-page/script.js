var oldname=document.querySelector("changename");
var newname="Yousef L";

function editname(){
    changename.innerText=newname;
}
var one=document.querySelector('#one').innerText;
var two=document.querySelector('#inc').innerText;
console.log(two);
function dele(x){
    one--;
    document.querySelector(x).remove();
    document.querySelector('#one').innerText=one;
}
function addd(b){
    dele(b);
    two++;
    document.querySelector('#inc').innerText=two;

}

