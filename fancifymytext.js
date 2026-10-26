// Makes the text in the text area bigger
function bigger() {
  document.getElementById("text").style.fontSize = "24pt";
}

// FancyShmancy makes the text bold, blue and underlined.
// BoringBetty puts it back to normal.
function fancify() {
  var text = document.getElementById("text");

  if (document.getElementById("fancy").checked) {
    text.style.fontWeight = "bold";
    text.style.color = "blue";
    text.style.textDecoration = "underline";
  } else {
    text.style.fontWeight = "normal";
    text.style.color = "black";
    text.style.textDecoration = "none";
  }
}

// Uppercases the text and adds "-Moo" to the last word of each sentence
function moo() {
  var text = document.getElementById("text");
  var str = text.value.toUpperCase();

  // each piece before a "." is a sentence
  var sentences = str.split(".");
  for (var i = 0; i < sentences.length - 1; i++) {
    if (sentences[i].trim() != "") {
      sentences[i] = sentences[i] + "-Moo";
    }
  }

  text.value = sentences.join(".");
}
