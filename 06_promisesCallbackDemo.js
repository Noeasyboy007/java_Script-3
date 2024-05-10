function todo (task)
{
    console.log("starting todo");
    setTimeout(function fun(){
        console.log("completed",task);
    },5000);
    task ="day Aritra"
    console.log("end ofntodo");
}
console.log("starting");
todo("assignments")
console.log("ending")