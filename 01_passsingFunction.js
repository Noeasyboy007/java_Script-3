function fun(){
    console.log("Fun called")
}

function gun (fun){
    console.log("inside the gun")
    fun()
    console.log("leaving the gun")
}

// gun(function(){
//     console.log("new function called");
// })

gun(fun)