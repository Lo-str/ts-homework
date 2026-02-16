// Promise: roll a dice
const rollDice = () => {
  return new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 6) + 1;

    if (number >= 4) {
      resolve("You rolled " + number + " You won!");
    } else {
      reject("You rolled " + number + " You lost..");
    }
  });
};

// Async function
const getCatFactAfterDice = async () => {
  try {
    // wait for result
    const result = await rollDice();
    console.log(result);

    // fetch cat fact
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();

    console.log("Cat fact:", data.fact);
  } catch (error) {
    // fetch error
    console.log(error);
  }
};

getCatFactAfterDice();
