let getData= async (url) => {
    let res = await fetch(url);
    let data =await res.json();
    return data;
}

let append =(data,container)=>{
    data.forEach(({title,image})=>{
        let p=document.createElement("p");
        p.innerText=title;

        let img=document.createElement("img");
        img.src=image;
        container.append(img,p);
    })
}

export {getData,append};