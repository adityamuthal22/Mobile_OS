let Amar={
    name:"Amar",
    char:"singer",
    
        relation:function(char,place){
            console.log(`${this.name} is a ${char},lives in a ${place}`);
        },
};

let Akbar={
    name:"Akbar",
    char:"chef",
  
};

let Anthony ={
    name:"Anthony",
    char:"Magician",
    
}

Amar.relation.call(Amar,Amar.char,"Goa");
Amar.relation.call(Akbar,"Goa");
Amar.relation.call(Anthony,"Goa");

Amar.relation.call(Amar,Akbar.char,"kashmir");
Amar.relation.call(Akbar,"kashmir");
Amar.relation.call(Anthony,"kashmir");

Amar.relation.call(Amar,Anthony.char,"Mumbai");
Amar.relation.call(Akbar,"Mumbai");
Amar.relation.call(Anthony,"Mumbai");