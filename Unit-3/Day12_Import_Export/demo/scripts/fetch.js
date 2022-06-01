
let getdata = async(url) =>{

    let res= await fetch(url);
    let data = await res.json();

    return data;

}
// getdata(data)

let append =(data,box)=>{
    console.log(data);
    box.innerHTML=null;
    data.meals.forEach(({strMeal,strMealThumb})=>{
       
        let box1=document.createElement("div")
        // let box2=document.createElement("div");
        // let receipe=document.createElement("p");
        // receipe.innerText=strInstructions;

        // box2.append(receipe);
        // box1.append(box2);
        let p=document.createElement("p");
        p.innerText=strMeal;

        let image=document.createElement("img");
        image.src=strMealThumb;
        image.setAttribute("id","searchimg");

        // let video=document.createElement("a")
        // video.innerText=strYoutube;
        box1.append(image,p);
        box.append(box1);
    })
}


export {getdata,append}