// validation

let fullName = document.getElementById("fullName");
let telephone = document.getElementById("telephone");
let text = document.getElementById("text");
let smallMsg = document.querySelectorAll(".smallMsg");
let submitData = document.getElementById("submitData");



function autoFocus() {
  fullName.onblur = () => {
    telephone.focus();
  };
  telephone.onblur = () => {
    text.focus();
  };
  text.onblur = () => {
    fullName.focus();
  };
}
autoFocus();

// validate fullName
fullName.onkeyup = function () {
  validateFullname();
};


function validateFullname() {

  const fullNameVal = fullName.value.trim();
  const fullNameRegex = /^[a-zA-Z]{6,}$/;
  if (fullNameRegex.test(fullNameVal)) {
    smallMsg[0].textContent = "fullname is valid";
    smallMsg[0].style.color = 'green';;
    msgClr = 'green';
  } else {
    smallMsg[0].textContent = "min 6 letters";
    smallMsg[0].classList.add("msgErr");
    smallMsg[0].style.color = 'red';
  }
};

// validate telephone
telephone.addEventListener("keyup", () => {
  validatePhone();
});

function validatePhone() {
  const telVal = telephone.value.trim();
  const phoneRegex = /^(05|06|07)\d{8}$/;
  if (phoneRegex.test(telVal)) {
    smallMsg[1].textContent = "telephone is valid";
    smallMsg[1].style.color = 'green';
  } else {
    smallMsg[1].textContent = "telephone is not valid , example : (05|06|07) 8 digit";
    smallMsg[1].style.color = 'red';
  };
};

// validate Message
text.onkeyup = function () {
  validateText();
};

function validateText() {

  let textVal = text.value.trim();
  const textRegex = /\w{20,1000}/;
  if (textRegex.test(textVal)) {
    smallMsg[2].textContent = "Message is valid";
    smallMsg[2].style.color = 'green'; 
  } else {
    smallMsg[2].textContent = "Message is not valid , min 20 letters";
    smallMsg[2].style.color = 'red';
  };
};

submitData.addEventListener("click", (e) => {
  if (
    smallMsg[0].textContent == "fullname is valid" &&
    smallMsg[1].textContent == "telephone is valid" &&
    smallMsg[2].textContent== "Message is valid"
  ) {
    Toastify({
      text: "Thanks for your message , I really appreciate it",
      duration: 5000,
      style: {
        background: "#f9f5f5ff",
        color: "#000000ff",
      },
    }).showToast();
  } else {
    e.preventDefault();
    Toastify({
      text: "we cannot send , try again!!",
      duration: 5000,
      close: true,
      style: {
        background: "gold",
        color: "#000000ff",
      },
    }).showToast();
  };
});
