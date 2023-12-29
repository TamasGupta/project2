let input = document.querySelector("input");
// let li = document.querySelector("li");
let btn = document.querySelector(".Add");
let ul = document.querySelector("ul");




function addTask(){


 let item = document.createElement("li");
 console.log(input.value)
 item.innerText= input.value;

 ul.append(item);
let delbtn = document.createElement("button");
 delbtn.innerText="X";
item.appendChild(delbtn)


 input.value= "";


}
 
btn.addEventListener("click", ()=>{
    addTask();
})

ul.addEventListener("click",(e)=>{
console.dir(e.target.nodeName);
if(e.target.nodeName=="BUTTON")
{  
  ul.removeChild(e.target.parentElement);
    
}


})