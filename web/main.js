function getinsert() {
  let iName = document.getElementById('itemName').value;
  let iPrice = document.getElementById('itemPrice').value;
  let uid = document.getElementById('itemId').value;
  let amount = document.getElementById('itemQuantity').value;
  console.log(uid, iName, iPrice, amount);

  eel.insert(uid, iName, iPrice, amount);
}
function cal() {
  eel.caltotle()(call);
}

function call(totlePrice) {
  document.getElementById('totle').innerHTML = totlePrice;
}

function getupdate() {
  eel.get()(getdd);
}

function getdd(p) {
  document.getElementById('tbl').innerHTML = p;
}

function getDeleteId() {
  let itemid = document.getElementById('delIn').value;
  eel.deleteItem(itemid);
  console.log(itemid);
}

function update() {
  let idtoUpdate = document.getElementById('upId').value;
  let nameUpdate = document.getElementById('upName').value;
  let priceUpdate = document.getElementById('upPrice').value;
  let amountUpdate = document.getElementById('upAmount').value;

  eel.updateDb(idtoUpdate, nameUpdate, priceUpdate, amountUpdate);
}
