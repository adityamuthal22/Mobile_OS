function getData() {
    let movie = document.getElementById("movie").value;
  
    const url = ` https://www.omdbapi.com/?s=${movie}&apikey=bf10365b`;
  
    fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        append(res);
        // response(res);
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
        // image.src="https://media0.giphy.com/media/KEVNWkmWm6dm8/200w.webp?cid=ecf05e47md8zgtbdgbwycmseqn8wb7yejlbf2bjntb522qmx&rid=200w.webp&ct=g";

      });
  }



  function append(data) {
   document.querySelector("#container").innerHTML=null;
  
    // container.innerHTML = null;
  if(data.Response=="True"){
    let div =document.createElement("div")
    let title = document.createElement("p");
    title.innerText = `Movie Title: ${data.Search[0].Title}`;
  
    let Year = document.createElement("p");
    Year.innerText = `Date OF Year: ${data.Search[0].Year}`;
  
    let imdbID = document.createElement("p");
    imdbID.innerText = `Movie imdbID: ${data.Search[0].imdbID}`;
  
    let Type = document.createElement("p");
    Type.innerText = `Movie Type: ${data.Search[0].Type}`;
  
    let Poster = document.createElement("img");
    Poster.src = data.Search[0].Poster;
  
    // let Response=document.createElement("p")
    // Response.innerText=data.Response;

    div.append(Poster,title,Year,imdbID,Type);
    container.append(div)
  }
  else{
    let img1=document.createElement("img");
    img1.setAttribute("id","img1")
    img1.src="https://media2.giphy.com/media/j3KEAyVwci7GPtOVNv/200w.webp?cid=ecf05e4775jvv7jrru42hv6gbpgfzhgeezk8dp58wlybie3v&rid=200w.webp&ct=g"
    document.querySelector("#container").append(img1);
  }
   
  }

