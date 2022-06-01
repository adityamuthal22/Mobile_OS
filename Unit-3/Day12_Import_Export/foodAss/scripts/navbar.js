function navbar(){
    return `
    
    <img id="giphy" src="   https://media1.giphy.com/media/dUNz28Yeu32mgnWriE/200w.webp?cid=ecf05e47zda6sfjy4bujlp1x7f7gpkbaisw4ter44y1nflw7&rid=200w.webp&ct=g" alt="">
    

<h3 id="home">
    <a href="index.html">Home</a>
</h3>
<div id="nameOf"><input type="text" id="query" placeholder="Search Food Recipe" ></div>

<div id="options">

    <h3>
        <a href="dayrecipe.html">Recipe of day</a>
    </h3> 
    
    <h3>
    <a href="random.html">Random Recipe</a>
    </h3> 

   
    <h3>
        <a href="login.html">LogIn</a>
    </h3>
    <h3>
        <a href="signup.html">SignUp</a>
    </h3>
</div>
    `;
}
export default navbar;