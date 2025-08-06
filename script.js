const amountInput = document.getElementById("amount");
const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const resultBox = document.getElementById("result");
const convertBtn = document.getElementById("convert-btn");

const API_URL = "https://api.frankfurter.app";

async function populateCurrencies() {
  const res = await fetch(`${API_URL}/currencies`);
  const currencies = await res.json();
  const options = Object.keys(currencies).map(
    code => `<option value="${code}">${code} - ${currencies[code]}</option>`
  ).join("");
  fromCurrency.innerHTML = options;
  toCurrency.innerHTML = options;
  fromCurrency.value = "USD";
  toCurrency.value = "EUR";
}

convertBtn.addEventListener("click", async () => {
  const amount = parseFloat(amountInput.value);
  const from = fromCurrency.value;
  const to = toCurrency.value;

  if (isNaN(amount) || amount <= 0) {
    resultBox.textContent = "Please enter a valid amount.";
    return;
  }

  if (from === to) {
    resultBox.textContent = "Choose different currencies to convert.";
    return;
  }

  try {
    const res = await fetch(`${API_URL}/latest?amount=${amount}&from=${from}&to=${to}`);
    const data = await res.json();
    const rate = data.rates[to];
    resultBox.textContent = `${amount} ${from} = ${rate} ${to}`;
  } catch (error) {
    resultBox.textContent = "Conversion failed. Please try again later.";
  }
});

populateCurrencies();
