// Definerer et array for å lagre billettene
let tickets = [];

// Funksjon for å registrere en billett
function registerTicket() {
    // Henter verdiene fra inputfeltene
    let movie = document.getElementById("movieSelect").value;
    let numTickets = document.getElementById("numTickets").value;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let email = document.getElementById("email").value;

    // Validering av inputfeltene
    if (!movie || !numTickets || !firstName || !lastName || !phoneNumber || !email) {
        alert("Alle felt må fylles ut!");
        return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
        alert("Telefonnummeret er ikke gyldig!");
        return;
    }

    if (!validateEmail(email)) {
        alert("E-postadressen er ikke gyldig!");
        return;
    }

    // Legger til billetten i arrayet
    tickets.push({
        movie: movie,
        numTickets: numTickets,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email
    });

    // Oppdaterer listen over alle billetter
    displayAllTickets();

    // Tømmer inputfeltene
    document.getElementById("ticketForm").reset();
}

// Funksjon for å vise alle billettene
function displayAllTickets() {
    let ticketList = document.getElementById("ticketList");
    ticketList.innerHTML = ""; // Tømmer listen

    // Går gjennom hvert billettobjekt i arrayet og legger til i listen
    tickets.forEach(function(ticket, index) {
        let listItem = document.createElement("li");
        listItem.textContent = `Bestilling ${index + 1}: Film: ${ticket.movie}, Antall: ${ticket.numTickets}, Navn: ${ticket.firstName} ${ticket.lastName}, Telefon: ${ticket.phoneNumber}, E-post: ${ticket.email}`;
        ticketList.appendChild(listItem);
    });
}

// Funksjon for å slette alle billettene
function deleteAllTickets() {
    tickets = []; // Tømmer arrayet
    displayAllTickets(); // Oppdaterer visningen
}

// Validering av telefonnummer
function validatePhoneNumber(phoneNumber) {
    const re = /^\d{8}$/; // Tillater bare 8 sifre
    return re.test(phoneNumber);
}

// Validering av e-postadresse
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}