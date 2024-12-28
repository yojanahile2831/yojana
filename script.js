let cv = document.getElementById("cv")
cv.addEventListener("click",function(){
    alert("Download Succesfully")
});



let submit = document.getElementById("submit")
submit.addEventListener("click",function(){
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");
    if(email.value == "" && pass.value == ""){
        alert("Fill Detail");
    }
    else{
        alert("logged in");
    }

});

let ul=document.querySelector("ul")
bar.addEventListener("click",function(){
    ul.classList.toggle("showData");

}
);

