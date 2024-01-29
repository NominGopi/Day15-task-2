function addRecord() {

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var address = document.getElementById('address').value;
    var pincode = document.getElementById('pincode').value;
    var gender = document.getElementById('gender').value;
    var food = Array.from(document.getElementById('food').selectedOptions).map(option => option.value);
    var state = document.getElementById('state').value;
    var country = document.getElementById('country').value;


    

    if (food.length < 2) {
      alert('Please select at least 2 foods.');
      return;
    }


    var table = document.getElementById('dataTableBody');
    var newRow = table.insertRow(table.rows.length);
    var cells = [firstName, lastName, address, pincode, gender, food.join(', '), state, country];
    

    var table = document.getElementById('dataTableBody');
    var newRow = table.insertRow(table.rows.length);

    newRow.insertCell(0).innerHTML = firstName;
    newRow.insertCell(1).innerHTML = lastName;
    newRow.insertCell(2).innerHTML = address;
    newRow.insertCell(3).innerHTML = pincode;
    newRow.insertCell(4).innerHTML = gender;
    newRow.insertCell(5).innerHTML = food.join(', ');
    newRow.insertCell(6).innerHTML = state;
    newRow.insertCell(7).innerHTML = country;

    clearForm();
  }

  function clearForm() {
    document.getElementById('myForm').reset();
  }