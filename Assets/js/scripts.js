function myFunction() {
    var x = document.getElementById("item");
    if (x.className === "middle-item") {
      x.className += " responsive";
    } else {
      x.className = "middle-item";
    }
  }