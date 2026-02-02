  /*************/
 /* TODO LIST */
/*************/

// Imports
import * as readline from "readline"

// Types
type Priority = "high" | "medium" | "low"
type Todo = {
    id: number,
    task: string,
    priority?: Priority,
    tags?: [],
}

// Variables
let todos: Todo[] = []
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let userName = 'Albert'

// Intro
const intro = () => {

    console.log(`
               ¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤
               ¤¤             ¤¤        ¤¤       ¤¤¤¤¤¤¤        ¤¤   ¤¤           ¤
               ¤¤¤¤¤¤¤   ¤¤¤¤¤¤¤   ¤¤   ¤¤   ¤¤¤¤   ¤¤¤¤   ¤¤   ¤¤   ¤¤   ¤¤¤¤¤¤¤¤¤
               ¤¤¤¤¤¤¤   ¤¤¤¤¤¤¤   ¤¤   ¤¤   ¤¤¤¤¤¤   ¤¤   ¤¤   ¤¤¤¤¤¤¤   ¤¤¤¤¤¤¤¤¤
               ¤¤¤¤¤¤¤   ¤¤¤¤¤¤¤   ¤¤   ¤¤   ¤¤¤¤¤¤   ¤¤   ¤¤   ¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤   ¤
               ¤¤¤¤¤¤¤   ¤¤¤¤¤¤¤   ¤¤   ¤¤   ¤¤¤¤¤    ¤¤   ¤¤   ¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤   ¤
               ¤¤¤¤¤¤¤   ¤¤¤¤¤¤¤        ¤¤        ¤¤¤¤¤¤        ¤¤¤¤¤¤¤           ¤
               ¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤`)

    rl.question(`\nHeya! How should I call you: `, (name: string) => {
        name.trim() === "" ? 
        console.log(`Mysterious! Alright, I'll call you ${userName}!`) : 
        userName = name.trim()
        console.log(`Welcome ${userName}!`)
        showMenu()
    })
}

// Show menu

const showMenu = () => {
    console.log(`\n
                            IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
                            IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
                            II     IIII     III        III    IIII   III   III   II
                            II   I  II  I   III   IIIIIIII     III   III   III   II
                            II   II    II   III      IIIII   I   I   III   III   II
                            II   III  III   III   IIIIIIII   II      III   III   II
                            II   IIIIIIII   III        III   IIII    III         II
                            IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
                            IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
                            IIIIII  Choose an action:                        IIIIII
                            IIIIII  1. Add                                   IIIIII
                            IIIIII  2. Read                                  IIIIII
                            IIIIII  3. Update                                IIIIII
                            IIIIII  4. Delete                                IIIIII
                            IIIIII  5. clear All                             IIIIII
                            IIIIII  6. Exit                                  IIIIII
                            IIIIII                                           IIIIII
                            IIIIII  Tasks left: ${todos.length}             IIIIII                  
                            IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
                            IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII  
                          `)


    process.stdout.write(">")
    rl.question("", (cmd: string) => handleCmd(cmd))
}

// Handle commands logic
const handleCmd = (cmd: string): void => {
    switch (cmd) {
        case "1":
            addTodos()
            break
        case "2":
            readTodos()
            break
        case "3":
            editTodos()
            break
        case "4":
            deleteTodos()
            break
        case "5":
            clearAll()
            break
        case "6":
            exit()
            break
        default:
            console.log("Unknown Command")
            showMenu()

    }
}

// Add more todos
const moreAction = (msg: string, action: () => void) => {
    rl.question(`\n${msg}\n (type 'y' to proceed or press enter to exit): `, (choice: string) => {
      if (choice.trim().toLowerCase() === "y") {
        action()
        return
      }

      process.stdout.write(">")
      rl.question("", (cmd: string) => {
        handleCmd(cmd)
      })
    })
  }


// Add todos command
const addTodos = () => {
  rl.question(`\nGreat! What task would you like to add: `, (input: string) => {
    const task = input.trim()

    if (task === "") {
      console.log("Oi! You didn't write any task!")
      moreAction("Try adding a task again?", addTodos)
      return
    }

    // Set priority level
    const askPriority = () => {
      rl.question(
        `How important is this task (high / medium / low, or press enter to cancel): `,
        (level: string) => {
          const p = level.trim().toLowerCase()

          // validate
          if (p !== "high" && p !== "medium" && p !== "low") {
            console.log("Wrong entry. Type: high, medium, or low.")
            return askPriority()
          }

          const priority = p as Priority

          const newTask: Todo = {
            id: Date.now(),
            task,
            priority
          }

          todos.push(newTask)
          console.log(`Task added to your Todo's list!`)
          moreAction("Would you like to add another task?", addTodos)
        }
      )
    }
    process.stdout.write(">")
      rl.question("", (cmd: string) => {
        handleCmd(cmd)
      })

    askPriority()
  })
}



// Read todos command
const readTodos = (): void => {
    if (todos.length === 0) {
        console.log("No task on the horizon yet!")
        moreAction("Would you like to add a task? ", addTodos)
    } else {
        console.log("Here's your Todo's list: \n")
        todos.forEach((t: Todo) => {
            console.log(`${t.id} - ${t.task}`)
        })
    }
    process.stdout.write(">")
    rl.question("", (cmd: string) => {
        handleCmd(cmd)
    })
}

// Delete todos command
const deleteTodos = () => {
    readTodos()
    rl.question(`Type the id of the task you would you like to delete: `,  (input: string) => {
        const id: number = parseInt(input)
        const updatedTodos: Todo[] = todos.filter((todo: Todo) => todo.id !== id)
        if (updatedTodos.length === todos.length) {
            console.log("Couldn't find the tasks.")
        } else {
            todos = updatedTodos
            console.log("List updated!")
        }
        process.stdout.write(">")
        rl.question("", (cmd: string) => {
            handleCmd(cmd)
        })
    })
}

// Edit tasks
const editTodos = () => {
    readTodos()
    rl.question(`Which task would you like to edit:`, (task: string) => {

    })
}

// Add a "clear all" command
const clearAll = () => {
    rl.question(`Would you like to clear your list completely (enter "y" to validate or enter to exit)? `, (reset: string) => {
        const choice = reset.trim().toLowerCase()
        if ( choice === "y") {
            todos.length = 0
        } else {
            process.stdout.write(">")
            rl.question("", (cmd: string) => {
            handleCmd(cmd)
        })
        }
    })
}

// Exit App
const exit = () => {
    console.log(`Have a lovely day ${userName}. See you next time!`)
    rl.close()
}

// MEDIUM
// Add a "done" status - mark todos as complete

// Add categories or tags (work, school, personal)

// Add a search command to finds todos by keyword

// Save todos to a file so they don't disappear when you exit

// CREATIVE
// Add emojis

// Add due dates

// Color-code todos (chalk)

intro()

