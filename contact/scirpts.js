// Données de contacts simulées (remplacez avec vos données réelles)
const contactsData = [
    { "name": "lucas", "surname": "danquigny", "phone_number": "0766838515" }
    // Ajoutez d'autres contacts au besoin
];

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

    contactsData.forEach(contact => {
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
}

function addContact() {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const phone_number = document.getElementById('phone_number').value;

    // Simuler l'ajout en ajoutant à la liste de contacts (en mémoire)
    contactsData.push({ name, surname, phone_number });

    displayContacts();
    document.getElementById('form-container').style.display = 'none';
}

function deleteContact() {
    const full_name = document.getElementById('full_name').value;

    // Simuler la suppression en retirant de la liste de contacts (en mémoire)
    // Vous devez implémenter la logique réelle pour supprimer un contact
    // depuis une source de données persistante.
    console.log(`Deleting contact: ${full_name}`);

    displayContacts();
    document.getElementById('form-container').style.display = 'none';
}

function modifyContact() {
    const full_name = document.getElementById('full_name').value;

    // Simuler la modification en mettant à jour la liste de contacts (en mémoire)
    // Vous devez implémenter la logique réelle pour modifier un contact
    // depuis une source de données persistante.
    console.log(`Modifying contact: ${full_name}`);

    displayContacts();
    document.getElementById('form-container').style.display = 'none';
}

function callContact(full_name) {
    alert(`Calling ${full_name}...`); // Simuler un appel réel ici

    // Vous pouvez étendre cette fonction pour une intégration réelle avec des appels téléphoniques.
}
