function toggleForm(action) {
    const formContainer = document.getElementById('form-container');
    formContainer.innerHTML = ''; // Clear previous content

    if (action === 'add') {
        formContainer.innerHTML = `
            <h2>Add Contact</h2>
            <input type="text" id="name" placeholder="Name" required>
            <input type="text" id="surname" placeholder="Surname" required>
            <input type="text" id="phone_number" placeholder="Phone Number" required>
            <button onclick="addContact()">Add</button>
        `;
    } else if (action === 'delete' || action === 'modify' || action === 'call') {
        formContainer.innerHTML = `
            <h2>${action.charAt(0).toUpperCase() + action.slice(1)} Contact</h2>
            <input type="text" id="full_name" placeholder="Full Name (e.g., lucas danquigny)" required>
            <button onclick="${action}Contact()">Submit</button>
        `;
    }

    formContainer.style.display = 'block';
}

function displayContacts() {
    const contactsContainer = document.getElementById('contacts-container');
    contactsContainer.innerHTML = ''; // Clear previous content

    fetch('contact.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(contact => {
                const contactItem = document.createElement('div');
                contactItem.classList.add('contact-item');
                contactItem.innerHTML = `
                    <p>Name: ${contact.name}</p>
                    <p>Surname: ${contact.surname}</p>
                    <p>Phone Number: ${contact.phone_number}</p>
                    <div class="actions">
                        <button onclick="toggleForm('delete')">Delete</button>
                        <button onclick="toggleForm('modify')">Modify</button>
                        <button onclick="callContact('${contact.name} ${contact.surname}')">Call</button>
                    </div>
                `;
                contactsContainer.appendChild(contactItem);
            });
        });
}

function addContact() {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const phone_number = document.getElementById('phone_number').value;

    fetch('add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, surname, phone_number }),
    })
        .then(response => response.json())
        .then(() => {
            displayContacts();
            document.getElementById('form-container').style.display = 'none';
        });
}

function deleteContact() {
    const full_name = document.getElementById('full_name').value;

    fetch('delete', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ full_name }),
    })
        .then(response => response.json())
        .then(() => {
            displayContacts();
            document.getElementById('form-container').style.display = 'none';
        });
}

function modifyContact() {
    const full_name = document.getElementById('full_name').value;

    fetch('modify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ full_name }),
    })
        .then(response => response.json())
        .then(() => {
            displayContacts();
            document.getElementById('form-container').style.display = 'none';
        });
}

function callContact(full_name) {
    alert(`Calling ${full_name}...`); // You can customize this behavior further
}

// Initially display contacts when page loads
displayContacts();
