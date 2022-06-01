document.querySelector("form").addEventListener("submit",Myfunction)


// if(localStorage.getItem("tododata")==null){
//     todoArr=[];
// }else{
//     tosoArr=JSON.parse(localStorage.getItem("todoData"));
// }

var todoArr=JSON.parse(localStorage.getItem("todoData"))||[]


function Myfunction(){
    event.preventDefault();

    var itemname=document.querySelector("#name").value;
    var itemqty=document.querySelector("#qty").value;
    var itemprio=document.querySelector("#priority").value;

    // console.log(itemname,itemqty,itemprio);
    var todoObj={
        name:itemname,
        quantity:itemqty,
        prior:itemprio,
    };

    // console.log(todoObj);
    todoArr.push(todoObj);
    // console.log(todoList);

    localStorage.setItem("todoData",JSON.stringify(todoArr))


}