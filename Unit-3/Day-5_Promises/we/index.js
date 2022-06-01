let img=document.getElementById("image")

function checkTranction(){
    return true;
}

const myPromise=new Promise(function (resolve,reject){
    let transtaction_status =false;

    setTimeout(function(){
        transtaction_status=checkTranction();

        if(transtaction_status === true){
            resolve("payment sucessfull");

        }else{
            reject("payment failed");
        }
    },3000);
});

myPromise
.then(function(res){
    console.log("res:",res);
    image.src="https://media0.giphy.com/media/KEVNWkmWm6dm8/200w.webp?cid=ecf05e47md8zgtbdgbwycmseqn8wb7yejlbf2bjntb522qmx&rid=200w.webp&ct=g";
})
.catch(function(err){
    console.log("this is my err:",err);
});