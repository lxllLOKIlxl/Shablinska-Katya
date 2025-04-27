document.getElementById("changeBg").addEventListener("click", function() {
    document.body.style.background = "linear-gradient(270deg, #" + Math.floor(Math.random()*16777215).toString(16) + ", #242424)";
});

document.getElementById("changeImg").addEventListener("click", function() {
    document.getElementById("image").src = "https://picsum.photos/500/350?random=" + Math.floor(Math.random()*100);
});

setInterval(function() {
    document.getElementById("image").src = "https://picsum.photos/500/350?random=" + Math.floor(Math.random()*100);
}, 3000);
