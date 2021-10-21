var input = document.querySelector("input");
function ADD() {
    var txt = document.createTextNode(input.value);
var button=document.querySelector("button")
var remove=document.createElement("button")
remove.innerHTML="remove"
    var li =document.createElement('li')//create element li
    li.appendChild(txt);//appenchild txt to li
    li.appendChild(remove)
    remove.addEventListener("click",function(){
        li.remove();
    })
    var ul =document.getElementById("list")
    if (input.value ==""){
    alert("please add a txt")}
    else{
    ul.appendChild(li);}//appenchild li to ul
}