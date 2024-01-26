const form = document.getElementById('form-contact');

const contactName = [];
const contactNumber = [];

let lines = '';

form.addEventListener('submit', function (e) {
   e.preventDefault();

    addLine();
    updateTable();
    updateFinalContact();
});

function addLine() {
    const inputContactName = document.getElementById('contact-name');
    const inputContactNumber = document.getElementById('contact-number');

    if (contactName.includes(inputContactName.value)) {
        alert(`A atividade: ${inputContactNumber.value} já foi inserida`);
    } else {
        contactName.push(inputContactName.value);
        contactNumber.push(parseFloat(inputContactNumber.value));

        let line = '<tr>';
        line += `<td>${inputContactName.value}</td>`;
        line += `<td>${inputContactNumber.value}</td>`;
        line += `</tr>`;

        lines += line;
    }

    inputContactName.value = '';
    inputContactNumber.value = '';
}

function updateTable() {
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = lines;
}

function updateFinalContact() {
    const finalContact = calculateFinalContact();

    document.getElementById('count-final').innerHTML = finalContact;

}

function calculateFinalContact() {
    return contactNumber.length;
}