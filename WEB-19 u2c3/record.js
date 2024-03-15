// fill in javascript code here
document.querySelector('form').addEventListener('submit', form_Data);


let array_Data = [];

function form_Data() {
    event.preventDefault();
    let employeeName = document.getElementById('name').value;
    let employeeId = document.getElementById('employeeID').value;
    let employeeDepartment = document.getElementById('department').value;
    let employee_Exp = document.getElementById('exp').value;
    let employee_Email = document.getElementById('email').value;
    let employee_Mobile = document.getElementById('mbl').value;

    let obj_Data = {
        name: employeeName,
        id: employeeId,
        depart: employeeDepartment,
        exp: employee_Exp,
        email: employee_Email,
        mob: employee_Mobile,
    };
    array_Data.push(obj_Data);
    displayData(array_Data);


}

function displayData(array_Data) {
    document.querySelector('tbody').innerHTML = '';
    array_Data.forEach(function (ele, i) {

        let table_Row = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.textContent = ele.name;
        let td2 = document.createElement('td');
        td2.textContent = ele.id;
        let td3 = document.createElement('td');
        td3.textContent = ele.depart;
        let td4 = document.createElement('td');
        td4.textContent = ele.exp;
        let td5 = document.createElement('td');
        td5.textContent = ele.email;
        let td6 = document.createElement('td');
        td6.textContent = ele.mob;
        let td7 = document.createElement('td');
        if (ele.exp > 5) {
            td7.textContent = 'senior';
        }
        else if (ele.exp > 2 && ele.exp < 5) {
            td7.textContent = 'junior';
        }
        else {
            td7.textContent = 'fresher';
        }
        let td8 = document.createElement('button');
        td8.innerText = 'Delete'
        td8.addEventListener('click', function () { deleterow(i) });
        let td9 = document.createElement('button');
        td8.innerText = 'filter By Department'

        table_Row.append(td1, td2, td3, td4, td5, td6, td7, td8);

        document.querySelector('tbody').append(table_Row);
    })

}

function deleterow(i) {
    array_Data.splice(i, 1);
    displayData(array_Data);
}