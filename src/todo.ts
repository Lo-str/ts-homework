/*************/
/* TODO LIST */
/*************/

// Imports
import * as readline from "readline"

// Types
type Priority = "high" | "medium" | "low"
type Done = "🟢"

type Todo = {
  id: number
  task: string
  tags?: string[]
  done?: Done
  priority?: Priority
}

// Variables
let todos: Todo[] = []
let count = 0
let nextId = 1

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let userName = "Albert"

const priorityEmoji = (priority?: Priority): string => {
  if (priority === "high") return "🔥"
  if (priority === "medium") return "💧"
  if (priority === "low") return "❄️"
  return ""
}

const newCount = () => {
  let pending = 0
  for (const todo of todos) {
    if (!todo.done) pending++
  }
  count = pending
}

const handleInteraction = (
  question: string,
  onInput: (input: string) => void,
  onBack: () => void
) => {
  const escape = "q"
  rl.question(`${question} (type "${escape}" + Enter to go back): `, (input: string) => {
    const userInput = input.trim().toLowerCase()
    if (userInput === escape) {
      onBack()
      return
    }
    onInput(input)
  })
}

// Intro
const intro = () => {
  console.clear()
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
    if (name.trim() !== "") userName = name.trim()
    newCount()
    showMenu()
  })
}

// Show menu
const showMenu = () => {
  console.clear()
  newCount()
  console.log(`Welcome ${userName}!\n`)
  console.log(`
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
                            IIIIII  3. Delete                                IIIIII
                            IIIIII  4. Clear All                             IIIIII
                            IIIIII  5. Mark as Done                          IIIIII
                            IIIIII  6. Exit                                  IIIIII
                            IIIIII                                           IIIIII
                                    Tasks left: ${count}
                            IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
  `)

  process.stdout.write(">")
  rl.question("", (cmd: string) => handleCmd(cmd.trim()))
}

// Handle commands
const handleCmd = (cmd: string): void => {
  switch (cmd) {
    case "1": 
      addTodos() 
    break
    case "2": 
      readTodos() 
    break
    case "3": 
      deleteTodos() 
    break
    case "4": 
      clearAll() 
    break
    case "5": 
      markAsDone() 
    break
    case "6": 
      exit() 
    break
    default:
      console.log("Unknown Command")
      pauseToMenu()
  }
}

const pauseToMenu = () => {
  rl.question("Press Enter to return to menu.", () => showMenu())
}

const moreAction = (msg: string, action: () => void) => {
  console.clear()
  rl.question(`\n${msg}\n(type "y" to proceed or press Enter to exit): `, (choice: string) => {
    if (choice.trim().toLowerCase() === "y") action()
    else showMenu()
  })
}

// Add todos
const addTodos = () => askTask()

const askTask = () => {
  handleInteraction(
    `\nGreat! What task would you like to add: `,
    (input: string) => {
      const task = input.trim()
      if (!task) {
        console.log("Oi! You didn't write any task!")
        moreAction("Try adding a task again?", askTask)
        return
      }
      askPriority(task)
    },
    showMenu
  )
}

const askPriority = (task: string) => {
  console.clear()
  handleInteraction(
    `How important is this task (high / medium / low, or press Enter to cancel): `,
    (level: string) => {
      const p = level.trim().toLowerCase()
      if (!p) return showMenu()
      if (p !== "high" && p !== "medium" && p !== "low") {
        console.log("Wrong entry.")
        return askPriority(task)
      }
      createTodo(task, p as Priority)
    },
    askTask
  )
}

const createTodo = (task: string, priority: Priority) => {
  todos.push({ id: nextId++, task, priority })
  newCount()
  console.log(`Task added!`)
  moreAction("Would you like to add another task?", addTodos)
}

// Read todos
const readTodos = () => {
  console.clear()
  if (!todos.length) {
    console.log("No task on the horizon yet!")
    return moreAction("Would you like to add a task?", addTodos)
  }

  console.log("Here's your Todo list:\n")
  todos.forEach(t => {
    console.log(`${t.id}. ${t.done ?? " "} ${t.task} ${priorityEmoji(t.priority)}`)
  })
  pauseToMenu()
}

// Delete
const deleteTodos = () => {
  handleInteraction(
    `Type the id of the task you would like to delete: `,
    (input: string) => {
      const id = parseInt(input)
      const before = todos.length
      todos = todos.filter(t => t.id !== id)
      if (todos.length === before) console.log("Couldn't find the task.")
      else newCount()
      pauseToMenu()
    },
    showMenu
  )
}

// Clear all
const clearAll = () => {
  handleInteraction(
    `Would you like to clear your list completely (enter "y" to validate)? `,
    reset => {
      if (reset.trim().toLowerCase() === "y") {
        todos = []
        nextId = 1
        newCount()
        console.log("Todo list cleared!")
      }
      pauseToMenu()
    },
    showMenu
  )
}

// Mark as done
const markAsDone = () => {
  handleInteraction(
    `Type the id of the task you would like to mark as done: `,
    input => {
      const id = parseInt(input)
      const t = todos.find(t => t.id === id)
      if (!t) console.log("Couldn't find the task.")
      else if (!t.done) {
        t.done = "🟢"
        newCount()
        console.log(`Marked as done: ${t.task}`)
      }
      pauseToMenu()
    },
    showMenu
  )
}

// Exit
const exit = () => {
  console.clear()
  console.log(`Have a lovely day ${userName}. See you next time!`)
  rl.close()
}

intro()
