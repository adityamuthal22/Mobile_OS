// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit",Myreport);

function Myreport(){
    event.preventDefault();

    var imageurl=document.querySelector("#image").innerText="";
    var name=document.querySelector("#name").value;
    var batch=document.querySelector("#batch").value;
    var DSA=document.querySelector("#dsa").value;
    var skillathon=document.querySelector("#cs").value;
    var cod=document.querySelector("#coding").value

    // console.log(imageurl,name,batch,DSA,skillathon,cod);

    var tr=document.createElement("tr");

    var td1=document.createElement("td");
    td1.src=imageurl;
    var td2=document.createElement("td");
    td2.innerText=name;
    var td3=document.createElement("td");
    td3.innerText=batch;
    var td4=document.createElement("td");
    td4.innerText=DSA;
    var td5=document.createElement("td");
    td5.innerText=skillathon;
    var td6=document.createElement("td");
    td6.innerText=cod;
    var td7=document.createElement("td");
    var p=0;
   var p=DSA+skillathon+cod;
    var ps=(p/300)*100;
    console.log(ps)
    td7.innerText=ps;
    var td8=document.createElement("td");

    
    tr.append(td1,td2,td3,td4,td5,td6,td7,td8);

    document.querySelector("tbody").append(tr);

}