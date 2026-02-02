// 1) Hello Callback 
// Write a function that takes a callback and calls it with 'Hello from callback!'. 

const hello = (callback: (data: string) => void) => {
    const data = "Hello from callback!"
    callback(data)
}
const displayData = (data: string) => {
    console.log(data)
}
hello(displayData)

// 2) Delayed Greeting 
// Make a function called sayHelloLater that waits 2 seconds, then calls a callback with 'Hi, I am late!'. 

const sayHelloLater = (callback: (data: string) => void) => {
    
    setTimeout (() => {
        const data = "Hi, I am late!"
        callback(data)
    }, 2000)
}
const displayLateData = (data: string) => {
    console.log(data)
}
// sayHelloLater(displayLateData)

// 3) Math Callback 
// Create a function that takes two numbers and a callback. The function should add the numbers and send the result to the callback. 

const numbers = (a: number, b: number, callback: (data: number) => void) => {
    const result = a + b
    callback(result)
}
const sum = (result: number) => {
    console.log(result)
}
// numbers(10, 30, sum)

// 4) Uppercase Callback 
// Write a function that takes a string and a callback. The callback should return the string in uppercase. 

const aString = (toWrite: string, callback: (data: string) => void ) => {
    const sentence = toWrite.toUpperCase()
    callback(sentence)
}

const upperCase = (sentence: string) => {
    console.log(sentence)
}
// aString("Yo! How's it going?", upperCase)

// 5) Pizza Order 
// Simulate ordering pizza. The function should wait 3 seconds and then call the callback with 'Your pizza is ready!'. 

const orderPizza = (callback: (data: string) => void) => {
    console.log("Your Pizza is in the oven!")
    setTimeout(() => {
        const data = "Your pizza is ready!"
        callback(data)
    }, 3000)
}
const readyPizza = (data: string) => {
    console.log(data)
}
// orderPizza(readyPizza)

// 6) Multiple Messages 
// Make a function that takes a callback and calls it three times with different messages.

const callThreeTimes = (callback: any) => {
    const messages = [
        "Bonjour, tu veux du pain?", 
        "Pourquoi pas!", 
        "Et du Boursin?" 
    ]
    for (let i = 0; i < messages.length; i++) {
        callback(messages[i])
}}
const displayMessages = (messages: string) => {
    console.log(messages)
}
// callThreeTimes(displayMessages)

// 7) Download Simulation 
// Create a function that takes a URL string and a callback. Wait 2 seconds, then call the callback with 'Downloaded data from <URL>'. 

const downloadData = (url: string, callback: (data: string) => void) => {
    setTimeout(() => {
        const data = `Downloaded data from: ${url}`
        callback(data)
    }, 2000)
}
const showData = (data: string) => {
    console.log(data)
}
// downloadData("https://t3.ftcdn.net/jpg/08/28/49/30/360_F_828493018_Ntaia2HBMK7UHVFyP8jv0UrTcD7Fk7pw.jpg", showData)

// 8) Success and Error Callback 
// Make a function that takes two callbacks: one for success and one for error. Use Math.random() to decide which to call. 

const randomResult= (
    success: (msg: string) => void, 
    error: (msg: string) => void
): void => 
    { Math.random() > 0.5 ? success("Success") : error("Error") }

const showSuccess = (msg: string) => { console.log(msg) }
const showError = (msg: string) => { console.log(msg) }
// randomResult(showSuccess, showError)

// 9) Math with Different Operations 
// Write one function that can do addition, subtraction, multiplication, and division. It should take two numbers, an operation string, and a callback. 

type Operator = "add" | "subtract" | "multiply" | "divide"

type Operations = {
  add: (a: number, b: number) => number
  subtract: (a: number, b: number) => number
  multiply: (a: number, b: number) => number
  divide: (a: number, b: number) => number
}

const calculate = (
    a: number, 
    b: number, 
    op: Operator, 
    callback: (data: number) => void
) => {
    const operations: Operations = {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
        multiply: (a, b) => a * b,
        divide: (a, b) => a / b,
    }
    callback(operations[op](a, b))
}

const result = (data: number) => {
    console.log(data)
}

// calculate(5, 5, "add", result)

// 10) Chained Callbacks 
// Make three functions that each wait 1 second and then call the next callback, printing 'Step 1 done', 'Step 2 done', 'Step 3 done' in order. 0

const step1 = ( msg1: (data: string) => void ): void => {

    setTimeout(() => {
        msg1("Step 1 done")
    }, 1000)}

const step2 = (msg2: (data: string) => void): void => {
    setTimeout(() => {
        msg2("Step 2 done")
    }, 1000)}

const step3 = ( msg3: (data: string) => void ): void => {
    setTimeout(() => {
        msg3("Step 3 done")
    }, 1000)
}

const printSteps = (messages: string) => {
    console.log(messages)
}

step1((msg1) => {
    printSteps(msg1)

    step2((msg2) => {
        printSteps(msg2)

        step3((msg3) => {
            printSteps(msg3)
        })
    })
})