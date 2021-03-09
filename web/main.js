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

function gettable(updatedTable) {
  document.getElementById('tbl').innerHTML = updatedTable.join('');
}

function getdeleteId() {
  let itemid = document.getElementById('itemDeleteId').value;
  eel.deleteItem(itemid);
  console.log(itemid);
}

function update() {
  let upToitemId = document.getElementById('upitemId').value;
  let upToitemName = document.getElementById('upitemName').value;
  let upToitemPrice = document.getElementById('upitemPrice').value;
  let upToitemQuantity = document.getElementById('upitemQuantity').value;

  eel.updateDb(upToitemId, upToitemName, upToitemPrice, upToitemQuantity);
}
