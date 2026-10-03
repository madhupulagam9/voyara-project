// ==================== VOYARA STATE ====================

const state = JSON.parse(
    localStorage.getItem("voyara_state") ||
    '{"logged":false,"name":"","bookings":[],"wallet":2500,"pearls":1200}'
);


// ==================== SAVE STATE ====================

function save() {

    localStorage.setItem(
        "voyara_state",
        JSON.stringify(state)
    );

}


// ==================== HOME ====================

function goHome() {

    location.href = "index.html";

}


// ==================== LOGIN MODAL ====================

function openLogin() {

    document
        .getElementById("signupModal")
        ?.classList.remove("show");

    document
        .getElementById("loginModal")
        ?.classList.add("show");

}


function closeLogin() {

    document
        .getElementById("loginModal")
        ?.classList.remove("show");

}


// ==================== SIGNUP MODAL ====================

function openSignup() {

    document
        .getElementById("loginModal")
        ?.classList.remove("show");

    document
        .getElementById("signupModal")
        ?.classList.add("show");

}


function closeSignup() {

    document
        .getElementById("signupModal")
        ?.classList.remove("show");

}


// ==================== LOGIN ====================

function login() {

    let email =
        document
            .getElementById("loginEmail")
            ?.value
            .trim();

    let password =
        document
            .getElementById("loginPassword")
            ?.value;


    if (!email || !password) {

        return alert(
            "Please enter email and password."
        );

    }


    state.logged = true;

    state.name =
        email.split("@")[0];


    save();


    closeLogin();


    alert(
        "Welcome to VOYARA, " +
        state.name +
        "!"
    );

}


// ==================== SIGNUP ====================

function signup() {

    let name =
        document
            .getElementById("signupName")
            ?.value
            .trim();

    let email =
        document
            .getElementById("signupEmail")
            ?.value
            .trim();

    let password =
        document
            .getElementById("signupPassword")
            ?.value;


    if (!name || !email || !password) {

        return alert(
            "Please complete all fields."
        );

    }


    state.logged = true;

    state.name = name;


    save();


    closeSignup();


    alert(
        "Account created successfully!"
    );

}


// ==================== SCROLL TO SERVICES ====================

function scrollToServices() {

    document
        .getElementById("services")
        ?.scrollIntoView({
            behavior: "smooth"
        });

}


// ==================== TRAVEL TYPE ====================

function selectTravelType(button, type) {

    document
        .querySelectorAll(
            ".search-tabs button"
        )
        .forEach(function (item) {

            item.classList.remove("active");

        });


    button.classList.add("active");


    window.travelType = type;

}


// ==================== SWAP LOCATIONS ====================

function swapLocations() {

    let from =
        document.getElementById("from");

    let to =
        document.getElementById("to");


    if (from && to) {

        [
            from.value,
            to.value
        ] = [
            to.value,
            from.value
        ];

    }

}


// ==================== SEARCH TRAVEL ====================

function searchTravel() {

    let type =
        window.travelType || "Flights";

    let destination =
        document
            .getElementById("to")
            ?.value;


    if (!destination) {

        return alert(
            "Please enter a destination."
        );

    }


    location.href =
        "service.html?type=" +
        encodeURIComponent(type);

}


// ==================== OPEN SERVICE ====================

function openService(type) {

    location.href =
        "service.html?type=" +
        encodeURIComponent(type);

}


// ==================== BOOK DESTINATION ====================

function bookDestination(name, price) {

    state.pending = {

        type: "Destination",

        name: name,

        price: price

    };


    save();


    location.href =
        "checkout.html";

}


// ==================== OFFERS ====================

function claimOffer() {

    alert(
        "Use VOYARA500 at checkout for ₹500 OFF."
    );

}


// ==================== BOOKINGS ====================

function showBookings() {

    location.href =
        "bookings.html";

}


// ==================== WALLET ====================

function showWallet() {

    location.href =
        "wallet.html";

}


// ==================== REWARDS / PEARLS ====================

function showRewards() {

    location.href =
        "rewards.html";

}


// ==================== PROFILE ====================

function showProfile() {

    location.href =
        "profile.html";

}


// ==================== SETTINGS ====================

function showSettings() {

    location.href =
        "settings.html";

}


// ==================== SUPPORT ====================

function showSupport() {

    location.href =
        "support.html";

}