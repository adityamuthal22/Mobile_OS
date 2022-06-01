var todoItems=JSON.parse(localStorage.getItem("todoData"));
console.log(todoItems);
var completed =JSON.parse(localStorage.getItem("completed")) || []


todoItems.map(function(ele){
    
    var tr=document.createElement("tr");

    var td1=document.createElement("td")
    td1.innerText=ele.name;

    var td2=document.createElement("td");
    td2.innerText=ele.quantity;

    var td3=document.createElement("td");
    td3.innerText=ele.prior;

    var td4=document.createElement("td");
    td4.textContent="Complete";
    td4.style.color="red";
    td4.style.cursor="pointer";
    td4.addEventListener("click",function(){
        markCompletefunction(ele);
    });

    tr.append(td1,td2,td3,td4);
    document.querySelector("#body").append(tr);
})

function markCompletefunction(ele){
  console.log(ele);
  completed.push(ele);
//   console.log(completed);
localStorage.setItem("completedTodo",JSON.stringify(completed));
}