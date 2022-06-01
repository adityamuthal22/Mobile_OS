import navbar from "../scripts/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

document.querySelector("#query").addEventListener("input",function(){
    debounce(myfunction,2000)
})

import {getdata,append} from "./fetch.js"


function myfunction(){
    let query=document.getElementById("query").value;
    console.log(query);
   
    let url=(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    let box1=document.getElementById("box");

    getdata(url).then((res)=>{
        append(res,box1)
    })
    
}


let id;
function debounce(func,delay){
    if (id) {
        clearTimeout(id);
    }

      id=  setTimeout(function(){
        func();
    },delay);
}