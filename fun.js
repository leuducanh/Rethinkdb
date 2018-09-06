var a = function(x){
    x += 1;
    console.log(x);
    
}

var b = function(x){
    x += 2;
    console.log(x);
    
}

var c = function(x){
    x += 3;
    console.log(x);
    
}

var d = ()=>{
    var i = 10;
    a(i);
    b(i);
    c(i);

    console.log(i);
}

d();
var e = ()=>{
    for(i = 10;i >= 0;i--){
        console.log(i);

        setTimeout(()=>{
            console.log("ahihi" + i);
        },1000);
    }
}

e();