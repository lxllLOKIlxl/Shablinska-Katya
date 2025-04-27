document.getElementById("changeBg").addEventListener("click", function() {
    document.body.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
});

document.getElementById("changeImg").addEventListener("click", function() {
    document.getElementById("image").src = "https://placebear.com/300/200";
});
