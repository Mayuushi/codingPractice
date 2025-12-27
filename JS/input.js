let username;
document.getElementById("btnSubmit").onclick = function(){
    username = document.getElementById("myText").value;
    console.log("Username entered: " + username);
    document.getElementById("txtHello").textContent = "Hello " + username;

}