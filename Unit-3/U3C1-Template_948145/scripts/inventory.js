var productdata=JSON.parse(localStorage.getItem("data"));
console.log(productdata);

productdata.map(function(ele,index){
    var box=document.createElement("div");

    var brand=document.createElement("p");
    brand.innerText=ele.brand;

    var name=document.createElement("p");
    name.innerText=ele.name;

    var price=document.createElement("p");
    price.innerText=ele.price;

    var image=document.createElement("img");
    image.src=ele.image;

    var btn=document.createElement("button");
    btn.innerText="Remove";
    btn.addEventListener("click",function(){
        removeItem(ele,index);
    });

    box.append(image,brand,name,price,btn);
    document.querySelector("#products_data").append(box);
});

function removeItem(ele,index){
    console.log(ele,index);
    productdata.splice(index,1);
    console.log(productdata);
    localStorage.setItem("data",JSON.stringify(productdata));
    window.location.reload();
}