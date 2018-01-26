function deleteItem(e) {}

function getPriceByProduct(itemNode) {}

function updatePriceByProduct(productPrice, index) {}

// remove child
function getTotalPrice() {}

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {}

function addEventToQuantity() {
  var input = document.getElementsByClassName("quantityInputs");
}

window.onload = function() {
  var calculatePriceButton = document.getElementsByClassName(
    "calc-prices-button"
  );

  button.onclick = function() {
    console.log(calculatePriceButton() + "Calculating Price");
  };

  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};

var button = document.getElementsByTagName("button")[0];

button.onclick = function() {
  var input = document.getElementsByTagName("input")[0];
  console.log(input.value);
};
