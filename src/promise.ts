const playGame = () => {
    return new Promise((resolve, reject) => {
        let result = Math.random()
        if (result > 0.5) {
            resolve('')
        } else {
            reject('')
        }
    })
}

const fetchApi = () =>
// Pseudocode

// “First, a Promise simulates a random outcome. If it resolves, a second Promise fetches data from an API. If it rejects, the fetch never happens.”

//Part 1
// DEFINE function playGame

//     RETURN a new Promise

//         GENERATE a random number between 0 and 1

//         CHECK the random number

//         IF the random number is greater than 0.5
//             RESOLVE the Promise with a success message
//         ELSE
//             REJECT the Promise with a failure message

// END function

// Part2
// SEND a request to the Bored API for a random activity

// WHEN the API responds successfully
//     CONVERT the response into usable data
//     EXTRACT the activity description
//     DISPLAY the activity in the console or on the webpage

// IF an error occurs during the request
//     DISPLAY an error message

// Part 3
// CALL the chance-based Promise (coin flip or dice roll)

// WHEN the Promise resolves (win condition)

//     DISPLAY the win message

//     SEND a request to the Bored API

//     WHEN the API response is successful
//         CONVERT the response to data
//         EXTRACT the activity information
//         DISPLAY the activity

//     IF the API request fails
//         DISPLAY an API error message

// WHEN the Promise rejects (lose condition)

//     DISPLAY the lose message
//     DO NOT fetch data from the API


