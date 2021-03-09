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
  eel.gettableData()(gettable);
}

function gettable(p) {
  document.getElementById('tbl').innerHTML = p;
}

function getdeleteId() {
  let itemid = document.getElementById('itemDeleteId').value;
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
