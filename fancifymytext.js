function makeBigger() {
    alert("Hello, world!");

    let text = document.getElementById("textInput");
    text.style.fontSize = "24pt";
}

function handleStyleChange() {
    alert("Style changed!");

    let text = document.getElementById("textInput");
    let fancy = document.getElementById("fancy");

    if (fancy.checked) {
        text.style.fontWeight = "bold";
        text.style.color = "blue";
        text.style.textDecoration = "underline";
    } else {
        text.style.fontWeight = "normal";
        text.style.color = "black";
        text.style.textDecoration = "none";
    }
}

function mooify() {
    let text = document.getElementById("textInput");

    // Convert to uppercase
    let value = text.value.toUpperCase();

    // Split into sentences
    let sentences = value.split(".");

    // Add "-Moo" to each sentence
    for (let i = 0; i < sentences.length; i++) {
        let s = sentences[i].trim();
        if (s.length > 0) {
            sentences[i] = s + "-Moo";
        }
    }

    // Join back together
    text.value = sentences.join(". ");
}