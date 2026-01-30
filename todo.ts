  /*************/
 /* TODO LIST */
/*************/ 

// Imports
import * as readline from "readline"

// Types
type Todo = {
    id: number,
    text: string
}

// Variables
let todos: Todo[] = []
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

// Show menu
const showMenu = () => {
    rl.question(`\nHeya! How should I call you: `, (name: string) => {
        name.trim() === "" ?
        console.log("Mysterious! Alright, I'll call you Albert!") :  
        console.log(`
                            ¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤
                            ¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤
                            ¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤
                            ¤¤¤                 ¤¤           ¤¤         ¤¤¤¤¤¤¤           ¤¤   ¤¤            ¤¤¤
                            ¤¤¤                 ¤¤    ¤¤¤    ¤¤    ¤¤      ¤¤¤¤    ¤¤¤    ¤¤   ¤¤    ¤¤¤¤¤¤¤¤¤¤¤
                            ¤¤¤¤¤¤¤¤¤     ¤¤¤¤¤¤¤¤    ¤¤¤    ¤¤    ¤¤¤¤     ¤¤¤    ¤¤¤    ¤¤   ¤¤    ¤¤¤¤¤¤¤¤¤¤¤
                            ¤¤¤¤¤¤¤¤¤     ¤¤¤¤¤¤¤¤    ¤¤¤    ¤¤    ¤¤¤¤¤¤    ¤¤    ¤¤¤    ¤¤¤¤¤¤¤    ¤¤¤¤¤¤¤¤¤¤¤
                            ¤¤¤¤¤¤¤¤¤     ¤¤¤¤¤¤¤¤    ¤¤¤    ¤¤    ¤¤¤¤¤¤    ¤¤    ¤¤¤    ¤¤¤¤¤¤¤            ¤¤¤
                            ¤¤¤¤¤¤¤¤¤     ¤¤¤¤¤¤¤¤    ¤¤¤    ¤¤    ¤¤¤¤¤¤    ¤¤    ¤¤¤    ¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤    ¤¤¤
                            ¤¤¤¤¤¤¤¤¤     ¤¤¤¤¤¤¤¤    ¤¤¤    ¤¤    ¤¤¤¤     ¤¤¤    ¤¤¤    ¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤    ¤¤¤
                            ¤¤¤¤¤¤¤¤¤     ¤¤¤¤¤¤¤¤    ¤¤¤    ¤¤    ¤¤      ¤¤¤¤    ¤¤¤    ¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤    ¤¤¤
                            ¤¤¤¤¤¤¤¤¤     ¤¤¤¤¤¤¤¤           ¤¤         ¤¤¤¤¤¤¤           ¤¤¤¤¤¤¤            ¤¤¤
                            ¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤
                            ¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤`)
    
                            console.log(`Welcome ${name}! What can I help you with: `)
    })

    console.log(`/n
                            IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
                            IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
                            IIIIIIIIIIIIIII     IIII     III        III    IIII   III   III   IIIIIIIIIIIIIIIIII
                            IIIIIIIIIIIIIII   I  II  I   III   IIIIIIII     III   III   III   IIIIIIIIIIIIIIIIII
                            IIIIIIIIIIIIIII   II    II   III      IIIII   I   I   III   III   IIIIIIIIIIIIIIIIII
                            IIIIIIIIIIIIIII   III  III   III   IIIIIIII   II      III   III   IIIIIIIIIIIIIIIIII
                            IIIIIIIIIIIIIII   IIIIIIII   III        III   IIII    III         IIIIIIIIIIIIIIIIII
                            IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
                            IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
                            IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
                            IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
                            IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
                            IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
                            IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
                            IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
                            IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
                            IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
                            IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
                            IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
                            IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
                            IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
                            IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
                            IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
                            IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
                            IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
                            IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
                            IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
                            IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
                            IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
                            IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
                            IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
                            IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
                            IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
                            IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
                            IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII`)

}

// Handle commands logic
const handleCommand = (cmd: number): void => {
    switch (cmd) {
        case 1:
            addTodos()
            break
        case 2:
            readTodos()
            break
        case 3:
            deleteTodos()
            break
        case 4:
            clearAll()
            break
        case 5:
            console.log(`Have a lovely day ${showMenu.name}`)
        default:
            console.log("unknown commans")
            showMenu()

    }
}

// Add todos command
const addTodos = () => {
    rl.question(`\nHeya! How should I call you: `, (name: string) => {
        name.trim() === "" ?
        console.log("Mysterious! Alright, I'll call you Albert!") :
        console.log(`Welcome to your Todo's ${name}! What can I help you with: `)
    })
} 
// Read todos command
const readTodos = () => {}

// Update todos command 
const updateTodos = () => {}

// Delete todos command
const deleteTodos = () => {}

// Add a priority level (high/medium/low) to each todo

// Add a "clear all" command
const clearAll = () => {}

// Show a count of how many todos you have

// MEDIUM
// Add a "done" status - mark todos as complete

// Add categories or tags (work, school, personal)

// Add a search command to finds todos by keyword

// Save todos to a file so they don't disappear when you exit

// CREATIVE
// Add emojis

// Add due dates 

// Color-code todos (chalk)