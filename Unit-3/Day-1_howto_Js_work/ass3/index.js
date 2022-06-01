//This information should be stored in 4 different objects. All of this objects should be stored in localstorage in advance. Their localstorage key should be their respective names.  For e.g Scope data will be stored in LocalStorage with key as "scope". ( Note: no capital letter in key )

//Information should be retrieved from localstorage only, avoid hard coding data.



    let Scope=[
        {
            name:"Scope in JavaScript refers to the accessibility or visibility of variables. That is, which parts of a program have access to the variable or where the variable is visible",
        
        },
    ];
  
    let Hoisting=[
        {
            name:"Hoisting is JavaScript's default behavior of finding variables and function declarations before actually executing the program.It doesn't care about variable values. All it wants to know what variables are present in a program.",
        },
    ];
 

    let  Constructor=[
        {
            name:"When you execute a script, the JavaScript engine creates a global execution context. It also assigns variables that you declare outside of functions to the global execution context. These variables are in the global scope. They are also known as global variables.",
        },
    ];
 
    
   let  Prototype=[
    {
        name:"Variables that you declare inside a function are local to that function. They are called Local Variables and can’t be accessed in Global Scope.",
    },
   ];
  
    


localStorage.setItem("scope",JSON.stringify(Scope));
localStorage.setItem("hoisting",JSON.stringify(Hoisting));
localStorage.setItem("constructor",JSON.stringify(Constructor));
localStorage.setItem("prototype",JSON.stringify(Prototype));


function Scopefun(){
    document.querySelector("#container").innerHTML=null;

    let scopedata=JSON.parse(localStorage.getItem("scope"));
    console.log(scopedata);
    scopedata.map(function(ele){
        let ul=document.createElement("ul");
       

        let name=document.createElement("li");
        name.innerText=ele.name;
    
        let video=document.createElement("video");
        video.src="scope.mp4"
        video.controls=true;
        ul.append(name);
        document.querySelector("#container").append(ul,video);
    });
}


function Hoistingfun(){
    document.querySelector("#container").innerHTML=null;

    let scopedata=JSON.parse(localStorage.getItem("hoisting"));
    console.log(scopedata);
    scopedata.map(function(ele){
        let ul=document.createElement("ul");
       

        let name=document.createElement("li");
        name.innerText=ele.name;
        
        let video=document.createElement("video");
        video.src="scope.mp4"
        video.controls=true;
        ul.append(name);
        
        document.querySelector("#container").append(ul,video);


     
    });
}


function Constructorfun(){
    document.querySelector("#container").innerHTML=null;

    let scopedata=JSON.parse(localStorage.getItem("constructor"));
    console.log(scopedata);
    scopedata.map(function(ele){
        let ul=document.createElement("ul");
       

        let name=document.createElement("li");
        name.innerText=ele.name;
        
        let video=document.createElement("video");
        video.src="scope.mp4"
        video.controls=true;

        ul.append(name);
        document.querySelector("#container").append(ul,video);
    });
}

function Prototypefun(){
    document.querySelector("#container").innerHTML=null;

    let scopedata=JSON.parse(localStorage.getItem("prototype"));
    console.log(scopedata);
    scopedata.map(function(ele){
        let ul=document.createElement("ul");
       

        let name=document.createElement("li");
        name.innerText=ele.name;
        
        let video=document.createElement("video");
        video.src="scope.mp4"
        video.controls=true;

        ul.append(name);
        document.querySelector("#container").append(ul,video);
    });
}