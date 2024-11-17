// Get the form and contacts container
const form = document.getElementById('contactForm');
const contactsContainer = document.getElementById('contactsContainer');

// Array to store contacts
let contacts = [];

// Handle form submission
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get input values
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  // Create a new contact object
  const newContact = {
    firstName,
    lastName,
    email,
    phone
  };

  // Add contact to the contacts array
  contacts.push(newContact);

  // Update the UI
  updateContacts();

  // Reset the form
  form.reset();
});

// Function to update contacts in the UI
function updateContacts() {
  contactsContainer.innerHTML = ''; // Clear the current contacts

  // Loop through the contacts and create cards
  contacts.forEach((contact) => {
    const card = document.createElement('div');
    card.classList.add('contact-card');

    card.innerHTML = `
      <h3>${contact.firstName} ${contact.lastName}</h3>
      <p><strong>Email:</strong> ${contact.email}</p>
      <p><strong>Phone:</strong> ${contact.phone}</p>
      <button onclick="deleteContact('${contact.email}')">Delete</button>
    `;

    // Append the card to the contacts container
    contactsContainer.appendChild(card);
  });
}

// Function to delete a contact
function deleteContact(email) {
  contacts = contacts.filter(contact => contact.email !== email);
  updateContacts(); // Re-render the contacts
}
