const url=`https://reqres.in/api/users?page=2`;

const container= document.getElementById("container");


fetch(url)
.then(function(res){
  return res.json();
})
.then(function(res){
    console.log("res:",res)
    appendData(res.data);   
})
.catch(function(err){
    console.log("err:",err)
});


function appendData(data){
    data.forEach(function(ele) {
        let div=document.createElement("div")
        let first_name=document.createElement("p")
        first_name.innerText=ele.first_name;

         let last_name=document.createElement("p")
         last_name.innerText=ele.last_name;

         let avatar=document.createElement("img")
         avatar.src=ele.avatar;

         div.append(avatar,first_name,last_name);
         container.append(div);

    });
}