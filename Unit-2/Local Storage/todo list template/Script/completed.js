var todocompleted=JSON.parse(localStorage.getItem("completedTodo"));
console.log(todocompleted);

// var comp =JSON.parse(localStorage.getItem("comp"))||[]


todocompleted.map(function(ele){
    var tr=document.createElement("tr");

    var td1=document.createElement("td");
    td1.innerText=ele.name;

    var td2=document.createElement("td");
    td2.innerText=ele.quantity;

    var td3=document.createElement("td");
    td3.innerText=ele.prior;

    tr.append(td1,td2,td3);
    document.querySelector("#body").append(tr);

    // comp.push(ele);
    // localStorage.setItem("todoDa",JSON.stringify(comp))
});
