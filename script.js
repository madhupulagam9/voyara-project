/* ==========================================
   VOYARA GLOBAL SCRIPT
========================================== */

console.log("Voyara Loaded Successfully");

/* USER FUNCTIONS */

function getUser() {
    return JSON.parse(localStorage.getItem("voyaraUser"));
}

function saveUser(user) {
    localStorage.setItem(
        "voyaraUser",
        JSON.stringify(user)
    );
}

function logout() {

    localStorage.removeItem("loggedInUser");

    alert("Logged Out Successfully");

    window.location.href = "login.html";
}

/* BOOKING FUNCTIONS */

function getBookings() {

    return JSON.parse(
        localStorage.getItem("voyaraBookings")
    ) || [];

}

function saveBooking(booking) {

    let bookings = getBookings();

    bookings.push(booking);

    localStorage.setItem(
        "voyaraBookings",
        JSON.stringify(bookings)
    );

}

function deleteBooking(index) {

    let bookings = getBookings();

    bookings.splice(index, 1);

    localStorage.setItem(
        "voyaraBookings",
        JSON.stringify(bookings)
    );

}

/* SEAT FUNCTIONS */

function saveSelectedSeat(seat) {

    localStorage.setItem(
        "selectedSeat",
        seat
    );

}

function getSelectedSeat() {

    return localStorage.getItem(
        "selectedSeat"
    );

}

/* PASSENGER FUNCTIONS */

function savePassenger(passenger) {

    localStorage.setItem(
        "passengerDetails",
        JSON.stringify(passenger)
    );

}

function getPassenger() {

    return JSON.parse(
        localStorage.getItem(
            "passengerDetails"
        )
    );

}

/* BOOKING ID */

function generateBookingId() {

    return "VY" +
        Math.floor(
            100000 + Math.random() * 900000
        );

}

/* PAYMENT */

function processBookingPayment(
    method,
    amount
) {

    const booking = {

        bookingId: generateBookingId(),

        paymentMethod: method,

        amount: amount,

        date: new Date().toLocaleDateString(),

        status: "Confirmed"

    };

    saveBooking(booking);

    localStorage.setItem(
        "latestBooking",
        JSON.stringify(booking)
    );

    return booking;
}

/* DOWNLOAD TICKET */

function downloadTicket(booking) {

    let content =
        "=========================\n" +
        "      VOYARA TICKET\n" +
        "=========================\n\n" +
        "Booking ID: " + booking.bookingId + "\n\n" +
        "Status: " + booking.status + "\n\n" +
        "Payment: " + booking.paymentMethod + "\n\n" +
        "Amount: ₹" + booking.amount + "\n\n" +
        "Date: " + booking.date + "\n\n" +
        "=========================\n" +
        "Travel For Peace\n" +
        "Not For Satisfaction\n" +
        "=========================";

    const blob = new Blob(
        [content],
        {
            type: "text/plain"
        }
    );

    const link =
        document.createElement("a");

    link.href =
        URL.createObjectURL(blob);

    link.download =
        booking.bookingId + ".txt";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
}

/* ADMIN */

function getTotalRevenue() {

    let bookings = getBookings();

    let revenue = 0;

    bookings.forEach(function (booking) {

        revenue += Number(
            booking.amount
        );

    });

    return revenue;
}

function getTotalBookings() {

    return getBookings().length;

}

function getTotalUsers() {

    let user = getUser();

    return user ? 1 : 0;

}

/* PROFILE */

function updateProfile(
    name,
    email,
    phone
) {

    const user = {

        fullname: name,
        email: email,
        phone: phone

    };

    saveUser(user);

}

/* WELCOME MESSAGE */

function welcomeUser() {

    const user = getUser();

    const element =
        document.getElementById(
            "welcomeUser"
        );

    if (user && element) {

        element.innerText =
            "Welcome, " +
            user.fullname;

    }

}

/* PAGE LOAD */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "Voyara Initialized"
        );

        welcomeUser();

    }
);