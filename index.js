document.querySelector(".navbar-toggler-icon").addEventListener("click",function()
{
    setTimeout(function(){
        document.getElementById("navbar-mobile").style.visibility="visible";
        document.querySelector(".carousel").classList.add("blur");
        document.querySelector(".cards").classList.add("blur");
    },100);
    
    

})
document.querySelector("#close-button").addEventListener("click",function()
{
    setTimeout(function(){
        document.getElementById("navbar-mobile").style.visibility="hidden";
    document.querySelector(".carousel").classList.remove("blur");
    document.querySelector(".cards").classList.remove("blur");
    },100);
    
})