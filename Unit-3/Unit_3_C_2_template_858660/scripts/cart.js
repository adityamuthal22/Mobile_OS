let cartData=JSON.parse(localStorage.getItem("Items"));
console.log(cartData);

var total=cartData.reduce(function(sum,ele,index,arr){
    return sum+Number(ele.price)
},0)
console.log(total);

document.querySelector("#cart_total").innerText=total;
cartData.map(function(ele,index){
    let box=document.createElement("div");
    let image=document.createElement("img");
    image.src=ele.image;

    let name=document.createElement("p");
    name.innerText=ele.name;

    let price=document.createElement("p");
    price.innerText=ele.price;

    let btn=document.createElement("button");
    btn.innerText="Remove";
    btn.addEventListener("click",function(){
        removeItem(ele,index);
    })
    box.append(image,name,price,btn);
    document.querySelector("#cart").append(box);
})

function  removeItem(ele,index){
    cartData.splice(index,1);
    localStorage.setItem("Items",JSON.stringify(cartData))
    window.location.reload();
}