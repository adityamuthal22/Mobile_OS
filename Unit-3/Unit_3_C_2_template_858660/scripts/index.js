// Store cart items in local storage with key: "items"
const url=`https://grocery-masai.herokuapp.com/items`;

fetch(url)
.then(function(res){
    return res.json();
})
.then(function(res){
    append(res.data);
    console.log(res);
})
.catch(function(err){
    console.log(err)
});

cartdata=JSON.parse(localStorage.getItem("Items"))||[];
function append(data){
    data.map(function(ele){
        let div=document.createElement("div");

        let image=document.createElement("img");
        image.src=ele.image;
    
        let name=document.createElement("p");
        name.innerText=ele.name;
    
        let price=document.createElement("p");
        price.innerText=ele.price;
        
        let add=document.createElement("button");
        add.innerText="Add to cart";
        add.addEventListener("click",function(){
            addTocart(ele);
        })
        div.append(image,name,price,add);
        items.append(div)
    })
  function  addTocart(ele){
    //   console.log(ele);
        cartdata.push(ele);
        console.log(cartdata)
        localStorage.setItem("Items",JSON.stringify(cartdata));
  }
   
}