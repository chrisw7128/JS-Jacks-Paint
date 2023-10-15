function configureListeners() {
  // select img elements for use
  let images = document.getElementsByTagName("img");

  // iterate over images and add mouseover event listeners
  for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("mouseover", removeOpacity);
  }
  for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("mouseout", addOpacity);
  }
}

function addOpacity(event) {
  // add appropriate CSS classes
  this.style.opacity = 1;
  this.style.transform = "none";
}

function removeOpacity(event) {
  //remove appropriate CSS classes
  this.style.opacity = 0.5;
  this.style.transform = "scale(1.1)";
  this.style.transform = "translateZ(9999)";
  this.style.transition = "all 0.3s";

  let element = document.getElementById("color-price");
  element.textContent = "";

  let color = document.getElementById("color-name");
  color.textContent = "";

  event.preventDefault();
  getProductInfo(event.target.id);
}

function getProductInfo(paintColor) {
  let price;
  let colorName;

  switch (paintColor) {
    case "pn1":
      price = "$14.99";
      colorName = "Lime Green";
      updatePrice(colorName, price);
      break;
    case "pn2":
      price = "$11.14";
      colorName = "Medium Brown";
      updatePrice(colorName, price);
      break;
    case "pn3":
      price = "$22.99";
      colorName = "Royal Blue";
      updatePrice(colorName, price);
      break;
    case "pn4":
      price = "13.42";
      colorName = "Solid Red";
      updatePrice(colorName, price);
      break;
    case "pn5":
      price = "$21.98";
      colorName = "Solid White";
      updatePrice(colorName, price);
      break;
    case "pn6":
      price = "$4.99";
      colorName = "Solid Black";
      updatePrice(colorName, price);
      break;
    case "pn7":
      price = "$8.22";
      colorName = "Solid Cyan";
      updatePrice(colorName, price);
      break;
    case "pn8":
      price = "$11.99";
      colorName = "Solid Purple";
      updatePrice(colorName, price);
      break;
    case "pn9":
      price = "$14.99";
      colorName = "Solid Yellow";
      updatePrice(colorName, price);
      break;
    default:
  }

  function updatePrice(colorName, price) {
    // select element with corresponding id
    let colorPrice = document.getElementById("color-price");
    // display price
    colorPrice.textContent = price;

    // select element with corresponding id
    let color = document.getElementById("color-name");
    //display color name
    color.textContent = colorName;
  }
}
