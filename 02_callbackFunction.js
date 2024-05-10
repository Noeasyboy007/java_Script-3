function fun(x,fn){
    // X ---> number
    // fn --> callback function

    // some logic
    for(let i=1; i<=x;i++){
        console.log(i);
    }

    // calling the callback function
    // some logic
    fn();
}

fun(10, function log(){
    console.log("custom logger");
})