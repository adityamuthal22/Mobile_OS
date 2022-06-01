
let arr=[];
function Product(n,p,b){
    this.name=n;
    (this.price=p),(this.brand=b);
}




function storeProducts(e){
    e.preventDefault();

    let form=document.getElementById('products')
    let name=form.name.value;
    // console.log("name:",name);

    let price=form.price.value;
    // console.log("price:",price);
   
    let brand=form.brand.value;
    // console.log("brand:",brand);

    let p1=new Product(name,price,brand);

    arr.push(p1);
    console.log("arr:",arr);
}