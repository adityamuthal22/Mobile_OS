import navbar from "../scripts/navbar.js";
document.getElementById("navbar").innerHTML=navbar();




let url ="https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";
let container =document.getElementById("box");
// let container1 =document.getElementById("box1");
import {getdata1,append1} from "./fetch.js"

getdata1(url).then((res)=>{
    append1(res,container);
    console.log(res)
})

