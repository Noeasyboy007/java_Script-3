function todo(task){
    setTimeout(function fun(){
        console.log("Completed",task);
    },2000)
}

console.log("Starting task");
todo("Assingment")
console.log("Ending task");