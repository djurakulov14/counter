let counter = 0

document.getElementById("plus").onclick = function(){
    counter +=1;
    document.getElementById("count").innerHTML = counter;
}
document.getElementById("reset").onclick = function(){
    counter =0;
    document.getElementById("count").innerHTML = counter;
}
document.getElementById("minus").onclick = function(){
    counter -=1;
    document.getElementById("count").innerHTML = counter;
}
document.getElementById("rnd").onclick = function(){
    counter = Math.round(Math.random()*50)
    document.getElementById("count").innerHTML = counter;
}