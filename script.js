let selectRow = null;
const form = document.getElementById('form');
const message = document.getElementById("errMes");
message.innerHTML = "";

function onFormSubmit(e) {
	event.preventDefault();
  subexData = submitData();
  if(subexData.fName == undefined){

  } else {
    if(selectRow === null){
        insertNewRecord(subexData);
    }
    else{
        updateRecord(subexData);
    }
    resetForm(); 
  }   
}

//received the data
function submitData() {
  let subexData = {};

  fName = document.getElementById("fName").value;
  lName = document.getElementById("lName").value;
  email = document.getElementById("email").value;
  dob = document.getElementById("dob").value;
  phone = document.getElementById("phone").value;
  address = document.getElementById("address").value;
    
  try { 
    if(fName == ""){
      throw "first name is empty!";
    }
    else if(lName == ""){
      throw "last name is empty!";
    }
    else if(emailV() == 'true'){
      throw "email id is invalid!";
    }
    else if(dob == ""){
      throw "date of birth is empty!";
    }
    else if(phone == ""){
      throw "phone number is empty!";
    }
    else if(address == ""){
      throw "address is empty!";
    }
    else {
      subexData["fName"] = fName;
      subexData["lName"] = lName;
      subexData["email"] = email;
      subexData["dob"] = dob;
      subexData["phone"] = phone;
      subexData["address"] = address;

      message.innerHTML = null;
    }
  }
  catch(err) {
    message.innerHTML = "Your " + err;
  }  

  function emailV(){
    let emData = '';
    if(email.match(/@/)){
      emData = "false";
    } else {
      emData = "true";
    }
    return emData;
  }

  return subexData;
}

//Insert the data
function insertNewRecord(data) {
  let table = document.getElementById("storeDataList").getElementsByTagName('tbody')[0];
  let newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.fName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.lName;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.email;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.dob;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.phone;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.address;
  cell6 = newRow.insertCell(6);
  cell6.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
  selectRow = td.parentElement.parentElement;
  document.getElementById("fName").value = selectRow.cells[0].innerHTML;
  document.getElementById("lName").value = selectRow.cells[1].innerHTML;
  document.getElementById("email").value = selectRow.cells[2].innerHTML;
  document.getElementById("dob").value = selectRow.cells[3].innerHTML;
  document.getElementById("phone").value = selectRow.cells[4].innerHTML;
  document.getElementById("address").value = selectRow.cells[5].innerHTML;
}
function updateRecord(subexData) {
  selectRow.cells[0].innerHTML = subexData.fName;
  selectRow.cells[1].innerHTML = subexData.lName;
  selectRow.cells[2].innerHTML = subexData.email;
  selectRow.cells[3].innerHTML = subexData.dob;
  selectRow.cells[4].innerHTML = subexData.phone;
  selectRow.cells[5].innerHTML = subexData.address;
}

//Delete the data
function onDelete(td) {
  if (confirm('Are you delete this record?')) {
    row = td.parentElement.parentElement;
    document.getElementById('storeDataList').deleteRow(row.rowIndex);
    resetForm();
  }
}

//Reset the data
function resetForm() {
  document.getElementById("fName").value = '';
  document.getElementById("lName").value = '';
  document.getElementById("email").value = '';
  document.getElementById("dob").value = '';
  document.getElementById("phone").value = '';
  document.getElementById("address").value = '';
  document.getElementById("errMes").value = '';

  selectRow = null;
}

