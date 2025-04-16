let field = document.querySelector(".field");
let COLOR = "rgb(223, 0, 0)"
let IS_CLICKED = false
document.addEventListener("mousedown", function(){
  IS_CLICKED = true
})
document.addEventListener("mouseup", function(){
  IS_CLICKED = false
})






for (let i = 0; i < 450; i++) {
  let cell = document.createElement("div");
  cell.classList.add("cell");
  field.appendChild(cell);
}

let cells = document.querySelectorAll(".cell");

cells.forEach(function(cell) {
  cell.addEventListener("mouseover", function() {
    if(IS_CLICKED){
    anime({
      targets: cell,
      background: COLOR,
      duration: 200,
      easing: "linear"
    });
    }
  });

  cell.addEventListener("mousedown", function() {
    anime({
      targets: cell,
      background: COLOR,
      duration: 200,
      easing: "linear"
    });
  });

});
let boxes = document.querySelectorAll('.color');

boxes.forEach(function(box) {
  box.addEventListener("mousedown", function() {
    COLOR = box.style.background;
  });
});
document.querySelector('.erase').addEventListener('click', function() {
  cells.forEach(function(cell) {
    anime({
      targets: cell,
      background: "rgb(62, 62, 62)",
      duration: 200,
      easing: "linear",
    });
  });
});
document.querySelector('.fill').addEventListener('click', function() {
  cells.forEach(function(cell) {
    anime({
      targets: cell,
      background: COLOR,
      duration: 200,
      easing: "linear",
    });
  });
});
document.querySelector('.save').addEventListener('click', function() {
  domtoimage.toPng(field)
    .then(function (dataUrl) {
      let img = new Image();
      img.src = dataUrl;
      window.saveAs(dataUrl, 'pixel.png');
    });
});
