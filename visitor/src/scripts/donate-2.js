// FIREBASE
var config = {
  apiKey: "AIzaSyBrTXlPTks8CPKRbZBSDnTXpPaotL4Wpwg",
  authDomain: "polyeco-eda86.firebaseapp.com",
  databaseURL: "https://polyeco-eda86.firebaseio.com",
  projectId: "polyeco-eda86",
  storageBucket: "polyeco-eda86.appspot.com",
  messagingSenderId: "86781747630"
};
firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});
//////////////////////////////////////////

const nameInput = document.querySelector("#step-2 input[name='name']");
const emailInput = document.querySelector("#step-2 input[name='email']");
const cardHolderNameInput = document.querySelector(
  "#step-2 input[name='cardname']"
);
const cardNumberInput = document.querySelector(
  "#step-2 input[name='cardnumber']"
);
const cardMonthInput = document.querySelector(
  "#step-2 input[name='cardmonth']"
);
const cardYearInput = document.querySelector("#step-2 input[name='cardyear']");
const cardCvvInput = document.querySelector("#step-2 input[name='cvv']");

const submitButton = document.querySelector(".submit");
const submit = document.querySelector("form .submit");
const paymentForm = document.querySelector("#step-2 #paymentForm");
const errorMessage = document.querySelector("form .error-message");
const checking = document.querySelector("form .checking");
const submitContainer = document.querySelector("form .submit .container");

paymentForm.addEventListener("submit", handleSubmitClick);

/////////////////////////////////////////////////////////////
function handleSubmitClick(e) {
  e.preventDefault();
  errorMessage.innerHTML = "";
  //Activate loading animation
  submit.classList.add("move-up");
  checking.classList.add("active");

  //Check
  setTimeout(checkingForm, 1000);
}

//Checking for submit, display loading
function checkingForm() {
  let inputsValid = true;
  let error = []; //Store all error massages inside here

  if (!validator.isByteLength(nameInput.value, { min: 3 })) {
    //institute invalid
    inputsValid = false;
    error.push("- Name has to be at least 3 characters");
  }
  if (!validator.isEmail(emailInput.value)) {
    //email invalid
    inputsValid = false;
    error.push("- Invalid email");
  }

  if (!validator.isNumeric(cardHolderNameInput.value, { min: 16 })) {
    //message invalid
    inputsValid = false;
    error.push("- Card number has to be 16 characters");
  }

  if (!validator.isNumeric(cardMonthInput.value, { min: 2 })) {
    //message invalid
    inputsValid = false;
    error.push("- Please specify the month by two numeric characters");
  }

  if (!validator.isNumeric(cardYearInput.value, { min: 4 })) {
    //message invalid
    inputsValid = false;
    error.push("- Please specify the exact year of expiration");
  }

  if (!validator.isNumeric(cardCvvInput.value, { min: 3 })) {
    //message invalid
    inputsValid = false;
    error.push("- CVV has to be 3 characters");
  }

  //inputsValid = true;

  if (inputsValid) {
    //inputs are valid, continue
    createDonation();
  } else {
    //inputs are invalid, reject
    checkingError();
    console.log(error);
    errorMessage.innerHTML = error.join("<br>");
  }
}

//Submit was successfull, display the success
function checkingSuccess() {
  submitContainer.classList.add("send");
  checking.classList.add("send");
}

//Submit failed due input errors, revert to button
function checkingError() {
  submit.classList.remove("move-up");
  checking.classList.remove("active");
}
/////////////////////////////////////////////////////////////

function createDonation() {
  console.log("RUUN");

  const step1Data = JSON.parse(sessionStorage.getItem("step1Data"));
  const checkBox = document.querySelector("#step-2 #subcheckbox");
  const name = checkBox.checked ? "Anonymous" : nameInput.value;
  const timestamp = +new Date();
  db.collection("donations")
    .add({
      date: moment()
        .subtract(10, "days")
        .calendar(),
      name: name,
      email: emailInput.value,
      amount: step1Data.amount,
      currency: step1Data.currency,
      type: step1Data.type,
      timestamp: timestamp
    })
    .then(function(docRef) {
      window.location = "../donate/step-3.html";
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
}
