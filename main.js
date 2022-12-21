// Submit form data
window.addEventListener("load", function () {
  const form = document.getElementById("my-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    document.getElementById("submit").innerText = "Sending...";
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      alert("Your code is submitted sucessfully!");
      alert = function () {};
      location.reload();
    });
  });
});

// Disable text selection of code
const inp = document.getElementById("code");
inp.addEventListener(
  "select",
  function () {
    this.selectionStart = this.selectionEnd;
  },
  false
);

$(document).ready(function () {
  // Disable right click and Inspect
  $(document).bind("contextmenu", function (e) {
    return false;
  });

  document.onkeydown = function (e) {
    if (event.keyCode == 123) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
      return false;
    }
  };

  // Disable copy paste
  $("body").bind("cut copy paste", function (e) {
    e.preventDefault();
  });

  // Alert on switching tab
  $(window).blur(function () {
    alert("Warning! Do not switch from this tab...");
  });
});
