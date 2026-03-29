(function() {
  "use strict";

  window.addEventListener("load", init);

  function init() {
    console.log("Window loaded!");

    // Add button event listeners
    document.getElementById("encrypt-it").addEventListener("click", handleEncrypt);
    document.getElementById("reset").addEventListener("click", handleReset);
  }

  // PART II + IV: Encrypt button
  function handleEncrypt() {
    console.log("Button clicked!");

    let text = document.getElementById("input-text").value;
    let result = shiftCipher(text);

    document.getElementById("result").textContent = result;
  }

  // PART III: Reset button
  function handleReset() {
    document.getElementById("input-text").value = "";
    document.getElementById("result").textContent = "";
  }

  // PART IV: Shift Cipher
  function shiftCipher(text) {
    text = text.toLowerCase();
    let result = "";

    for (let i = 0; i < text.length; i++) {
      let ch = text[i];

      // if not a letter, keep it the same
      if (ch < 'a' || ch > 'z') {
        result += ch;
      } 
      // wrap z → a
      else if (ch === 'z') {
        result += 'a';
      } 
      // shift letter
      else {
        let code = text.charCodeAt(i);
        result += String.fromCharCode(code + 1);
      }
    }

    return result;
  }

})();   