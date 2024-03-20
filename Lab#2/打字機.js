window.onload = function() {
    var container = document.getElementById("container");
    var randomLength = Math.floor(Math.random() * 3); // 隨機產生 0 到 2 的整數
    var randomString = '';
    for (var i = 0; i < randomLength; i++) {
        randomString += String.fromCharCode(97 + Math.floor(Math.random() * 26)); // 產生隨機字母（a-z）
    }
    container.innerText = randomString;
}
document.addEventListener("keyup", function(event) {
    var containerText = document.getElementById("container").innerText;
    var firstChar = containerText.charAt(0);
    if (event.key === firstChar) {
        containerText = containerText.slice(1);
        document.getElementById("container").innerText = containerText;
    }
});
document.addEventListener("keyup", function(event) {
    var container = document.getElementById("container");
    var containerText = container.innerText;
    var randomLength = Math.floor(Math.random() * 3) + 1;
    var randomString = '';
    for (var i = 0; i < randomLength; i++) {
        randomString += String.fromCharCode(97 + Math.floor(Math.random() * 26));
    }
    container.innerText = containerText + randomString;
});
