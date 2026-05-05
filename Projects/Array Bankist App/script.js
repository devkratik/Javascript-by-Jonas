"use strict";

// Given Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2026-05-02T10:20:00.000Z", // 3 days ago
    "2026-05-03T10:20:00.000Z", // 2 days ago
    "2026-05-04T10:20:00.000Z", // yesterday
  ],
  currency: "INR",
  locale: "en-IN",
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    "2019-10-02T11:22:13.123Z",
    "2019-11-15T08:35:27.456Z",
    "2019-12-20T05:18:42.789Z",
    "2020-01-18T13:45:10.234Z",
    "2020-02-12T15:27:55.678Z",
    "2020-04-08T12:30:33.910Z",
    "2020-06-20T17:40:21.567Z",
    "2020-07-22T10:55:44.321Z",
  ],
  currency: "INR",
  locale: "en-IN",
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    "2019-09-28T10:12:45.210Z",
    "2019-11-10T07:25:18.654Z",
    "2019-12-28T04:50:39.876Z",
    "2020-01-12T15:05:22.143Z",
    "2020-02-18T14:22:11.509Z",
    "2020-04-15T13:35:47.982Z",
    "2020-06-18T19:10:05.334Z",
    "2020-07-30T09:28:56.777Z",
  ],
  currency: "EUR",
  locale: "en-UK",
};

const accounts = [account1, account2, account3, account4];

let currentAccount, timer;

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
const labelDate = document.getElementById("info-timings");
const labelTimer = document.getElementById("countdown-timer");

//FORMAT CURRENCIES
const getFormattedCurrency = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};

//IMPLEMENTING FORMATED DATES

const getFormatedDates = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) {
    return "Today";
  }
  if (daysPassed === 1) {
    return "Yesterday";
  }
  if (daysPassed <= 7) {
    return `${daysPassed} days ago`;
  } else {
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();

    // return `${day}/${month}/${year}`;

    return new Intl.DateTimeFormat(locale).format(date);
  }
};

// DISPLAY  MOVEMENTS
const displayMovements = function (account, sort = false) {
  movementsContainer.innerHTML = "";

  const movs = sort
    ? account.movements.slice().sort((a, b) => a - b)
    : account.movements;

  movs.forEach((mov, i, arr) => {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const date = new Date(account.movementsDates[i]);
    const displayDate = getFormatedDates(date, account.locale);

    //USING INTL FOR NUMBERS HERE
    const formattedMov = getFormattedCurrency(
      mov,
      account.locale,
      account.currency,
    );
    const html = `
        <div class="movements__row">
           <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
           <div class="movements__date">${displayDate}</div>
           <div class="movements__value">${formattedMov}</div>
        </div>
      `;
    movementsContainer.insertAdjacentHTML("afterbegin", html);
  });
};

//IMPLEMENTING SORT MOVEMENTS
let sorted = false;
sortBtn.addEventListener("click", function () {
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
  // Reset timer
  clearInterval(timer);
  timer = startLogoutTimer();
});

//CALCULATE THE BALANCE
const calculateBalance = function (acc) {
  const balance = acc.movements.reduce((acc, cur, i, arr) => acc + cur, 0);
  acc.balance = balance;
  const formattedBalance = getFormattedCurrency(
    acc.balance,
    acc.locale,
    acc.currency,
  );

  totalBalance.textContent = `${formattedBalance}`;
};

//DISPLAY SUMMARY
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);
  incomeValue.textContent = `${getFormattedCurrency(
    incomes,
    acc.locale,
    acc.currency,
  )}`;

  const outcomes = Math.abs(
    acc.movements.filter((mov) => mov < 0).reduce((acc, cur) => acc + cur, 0),
  );
  outcomeValue.textContent = `${getFormattedCurrency(
    outcomes,
    acc.locale,
    acc.currency,
  )}`;

  const interest = Math.abs(
    acc.movements
      .filter((deposit) => deposit > 0)
      .map((mov) => (mov * acc.interestRate) / 100)
      .filter((int, i, arr) => {
        return int >= 1;
      })
      .reduce((acc, mov) => acc + mov, 0),
  );
  interestValue.textContent = `${getFormattedCurrency(
    interest,
    acc.locale,
    acc.currency,
  )}`;
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

//IMPLEMENTING LOGOUT TIMER
const startLogoutTimer = function () {
  //Setting the time to 5 minutes
  let time = 600;

  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    //In each call, print reamining time
    labelTimer.textContent = `${min}:${sec}`;
    //When 0 seconds stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      navbarMessage.textContent = `Login to get started`;

      appContainer.style.opacity = 0;
    }
    //Decrease 1 second
    time--;
  };

  //call timer every seconds
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

// UPDATE UI
const updateUI = function (account) {
  //Display Movements
  displayMovements(account);
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

    //IMPLEMENTING DATES USING Intl API
    const now = new Date();
    const options = {
      day: "numeric",
      month: "numeric",
      hour: "numeric",
      minute: "numeric",
      year: "numeric",
    };

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options,
    ).format(now);

    //IMPLEMENTING DATES
    // const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    //Reset form
    loginFormEl.reset();

    //Calling timer
    if (timer) clearInterval(timer);
    timer = startLogoutTimer();
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

    //Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    recieverAccount.movementsDates.push(new Date().toISOString());

    updateUI(currentAccount);

    // Reset timer
    clearInterval(timer);
    timer = startLogoutTimer();
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
    setTimeout(() => {
      currentAccount.movements.push(amount);
      currentAccount.movementsDates.push(new Date().toISOString());
      updateUI(currentAccount);
      // Reset timer
      clearInterval(timer);
      timer = startLogoutTimer();
    }, 3000);
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
    appContainer.style.opacity = 0;
  }
  closeAccountFormEl.reset();
});
