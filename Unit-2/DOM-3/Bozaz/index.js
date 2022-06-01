document.querySelector("form").addEventListener("submit",Mycode);

function Mycode(){
    event.preventDefault();

    var procategory=document.querySelector("#category").value;
    var protitle=document.querySelector("#name").value;
    var proprice=document.querySelector("#price").value;

    console.log(procategory,protitle,proprice);

    var tr=document.createElement("tr");

    var td1=document.createElement("td");
    td1.innerText=procategory;

    var td2=document.createElement("td");
    td2.innerText=protitle;

    var td3=document.createElement("td");
    td3.innerText=proprice;

    tr.append(td1,td2,td3);
    document.querySelector("tbody").append(tr);
}