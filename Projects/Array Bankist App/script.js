"use strict";

// Given Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

let currentAccount;

//SELECTED ELEMENTS
const movementsContainer = document.getElementById("movements-container");
const totalBalance = document.getElementById("balance-value");
const incomeValue = document.getElementById("incoming-value");
const outcomeValue = document.getElementById("outgoing-value");
const interestValue = document.getElementById("interest-value");
const loginFormEl = document.getElementById("login-form");
const inputUsername = document.getElementById("input-name");
const inputPassword = document.getElementById("input-pass");
const navbarMessage = document.getElementById("nav-msg");
const appContainer = document.getElementById("app-container");
const transferFormEl = document.getElementById("transfer-form");
const inputTransferAmount = document.getElementById("transfer-amount");
const inputTransferTo = document.getElementById("reciever-acnt");
const closeAccountFormEl = document.getElementById("close-form");
const inputCloseAccountUsername = document.getElementById("close-username");
const inputCloseAccountPassword = document.getElementById("close-account-pass");
const requestFormEl = document.getElementById("request-form");
const inputLoanAmount = document.getElementById("request-amount");
const sortBtn = document.getElementById("sort-btn");

// DISPLAY  MOVEMENTS
const displayMovements = function (movements) {
  movements.forEach((mov, i, arr) => {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
        <div class="movements__row">
           <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
           <div class="movements__value">₹ ${mov}</div>
        </div>
      `;
    movementsContainer.insertAdjacentHTML("afterbegin", html);
  });
};

//IMPLEMENTING SORT MOVEMENTS
sortBtn.addEventListener("click", function (e) {});

//CALCULATE THE BALANCE
const calculateBalance = function (acc) {
  const balance = acc.movements.reduce((acc, cur, i, arr) => acc + cur, 0);
  acc.balance = balance;
  totalBalance.textContent = `${acc.balance}`;
};

//DISPLAY SUMMARY
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);
  incomeValue.textContent = `${incomes}`;

  const outcomes = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, cur) => acc + cur, 0);
  outcomeValue.textContent = `${Math.abs(outcomes)}`;

  const interest = acc.movements
    .filter((deposit) => deposit > 0)
    .map((mov) => (mov * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, mov) => acc + mov, 0);
  interestValue.textContent = `${interest}`;
};

// CREATING USERNAMES
const createUsernames = function (accs) {
  accs.forEach((acc, i, arr) => {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};

createUsernames(accounts);

// UPDATE UI
const updateUI = function (account) {
  //Display Movements
  displayMovements(account.movements);
  //Display Balance
  calculateBalance(account);
  //Display Summary
  calcDisplaySummary(account);
};

// IMPLEMENTING LOGIN

loginFormEl.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!inputUsername) {
    return;
  }
  if (!inputPassword) {
    return;
  }
  const loginUsername = inputUsername.value.trim();
  const loginPassword = Number(inputPassword.value.trim());

  currentAccount = accounts.find(
    (account) => account.username === loginUsername,
  );

  if (currentAccount?.pin === loginPassword) {
    //Display UI and Welcome message:
    navbarMessage.textContent = `Welcome back, ${currentAccount.owner.split(" ")[0]}`;
    appContainer.style.opacity = 100;
    //Reset form
    loginFormEl.reset();
    //Update UI
    updateUI(currentAccount);
  }
});

//IMPLEMENTING TRANSFERS
transferFormEl.addEventListener("submit", function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const recieverAccount = accounts.find(
    (acc) => acc.username === inputTransferTo.value.trim(),
  );

  if (!amount) {
    return;
  }
  if (!recieverAccount) {
    return;
  }

  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    recieverAccount?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    recieverAccount.movements.push(amount);

    updateUI(currentAccount);
  }

  transferFormEl.reset();
});

//IMPLEMENTING REQUEST LOAN
requestFormEl.addEventListener("submit", function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value.trim());
  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  requestFormEl.reset();
});

//IMPLEMENTING CLOSE ACCOUNT
closeAccountFormEl.addEventListener("submit", function (e) {
  e.preventDefault();

  const closeUsername = inputCloseAccountUsername.value.trim();
  const closePassword = Number(inputCloseAccountPassword.value);

  if (!closeUsername) return;
  if (!closePassword) return;

  const toDeleteAccountIndex = accounts.findIndex(
    (acc) => acc.username === closeUsername,
  );
  if (closePassword === accounts[toDeleteAccountIndex].pin) {
    accounts.splice(toDeleteAccountIndex, 1);
  }
  closeAccountFormEl.reset();
});
