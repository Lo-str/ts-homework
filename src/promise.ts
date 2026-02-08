   /**********/
  /* Part 1 */
 /**********/
 
 // Dice roll
 const rollDice = (): Promise<number> => {
  return new Promise((resolve, reject) => {
    // Dice roll: 1 to 6
    const roll = Math.floor(Math.random() * 6) + 1

    if (roll === 6) {
      resolve(roll)
    } else {
      reject(new Error(`Oi! You rolled ${roll}. You need a 6 to win 🫢`))
    }
  })
}

   /**********/
  /* Part 2 */
 /**********/

 // Fetch advice
type AdviceSlipResponse = {
  slip: {
    id: number
    advice: string
  }
}

const fetchRandomAdvice = (): Promise<string> => {
  return fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`)
      }
      return response.json() as Promise<AdviceSlipResponse>
    })
    .then((data) => data.slip.advice)
}
   /**********/
  /* Part 3 */
 /**********/

 // Mix
 const playDiceGame = (): void => {
  rollDice()
    .then((roll) => {
      console.log(`🎲 You rolled a ${roll}! You won!!! 🥳 Here's your advice: `)
      return fetchRandomAdvice()
    })
    .then((advice) => {
      console.log("💡 ", advice)
    })
    .catch((error) => {
      console.log("❌", error instanceof Error ? error.message : error)
    })
}

playDiceGame()
