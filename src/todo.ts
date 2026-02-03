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
  let count = 0
  for (const todo of todos) {
    if (!todo.done) count++
  }
  count = count
}

const handleInteraction = (
  question: string,
  onInput: (input: string) => void,
  onBack: () => void
) => {
  const escape = "q"
  rl.question(`${question} (type "${escape}" + Enter to go back): `, (input: string) => {
    const cleaned = input.trim().toLowerCase()
    if (cleaned === escape) {
      onBack()
      return
    }
    onInput(input)
  })
}

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
    console.clear()
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
  console.clear()
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
                            IIIIII                                           IIIIII
                            IIIIII  1. Add                                   IIIIII
                            IIIIII  2. Read                                  IIIIII
                            IIIIII  3. Update                                IIIIII
                            IIIIII  4. Delete                                IIIIII
                            IIIIII  5. Clear All                             IIIIII
                            IIIIII  6. Mark as Done                          IIIIII
                            IIIIII  7. Exit                                  IIIIII
                            IIIIII                                           IIIIII
                                    Tasks left: ${count}
                            IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
                            IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
  `)

  process.stdout.write(">")
  rl.question("", (cmd: string) => handleCmd(cmd.trim()))
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
      markAsDone()
      break
    case "7":
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
    if (choice.trim().toLowerCase() === "y") {
      action()
    } else {
      showMenu()
    }
  })
}

// Add todos
const addTodos = () => {
  askTask()
}

const askTask = () => {
  handleInteraction(
    `\nGreat! What task would you like to add: `,
    (input: string) => {
      const task = input.trim()
      if (task === "") {
        console.log("Oi! You didn't write any task!")
        moreAction("Try adding a task again?", askTask)
        return
      }
      askPriority(task)
    },
    showMenu
  )
}

// Add priority level
const askPriority = (task: string) => {
    console.clear()
  handleInteraction(
    `How important is this task (high / medium / low, or press Enter to cancel): `,
    (level: string) => {
      const p = level.trim().toLowerCase()

      if (p === "") {
        showMenu()
        return
      }

      if (p !== "high" && p !== "medium" && p !== "low") {
        console.log("Wrong entry. Type: high, medium, or low.")
        askPriority(task)
        return
      }

      createTodo(task, p as Priority)
    },
    askTask
  )
}

// Prompt to add tags
const askId = (next: () => ) => {
    console.clear()
    handleInteraction(
        `Type the id of the task you would you like to edit:  `,
        (input: string) => {
            const id = parseInt(input, 10)
            if (Number.isNaN(id)) {
                console.log("Please enter a valid number.")
                askId(id)
                return
            }
            const foundIndex = todos.findIndex(t => t.id === id)
            if (foundIndex === -1) {
                console.log("Couldn't find the task.")
                pauseToMenu()
                return
            } else {
                console.log("Task found")
                askTags()
            }
        },
        showMenu
    )
}

// Add tags
const askTags = (tag: string) => {
    console.clear()
    askId()
    handleInteraction(`
        Choose a tag:
        (f)un | (w)ork | (s)tudy | (p)erso`, (input: string) => {
        const userInput = input.trim().toLowerCase()
        if (userInput === "") {
            showMenu()
            return
        } else if (
            !userInput.includes("f") ||
            !userInput.includes("w") ||
            !userInput.includes("s") ||
            !userInput.includes("p")) {
            console.log("Wrong entry.")
            askTags
        } else {

        }


    },
        showMenu
    )
}

const addTags = (input: string) => {
    const fun = "f"
    const work = "w"
    const study = "s"
    const perso = "p"

}

const createTodo = (task: string, priority: Priority) => {
  const newTask: Todo = {
    id: nextId++,
    task,
    priority,
  }

  todos.push(newTask)
  newCount()
  console.log(`Task added to your Todo's list!`)
  moreAction("Would you like to add another task?", addTodos)
}

// Read todos command
const readTodos = (): void => {
  console.clear()

  if (todos.length === 0) {
    console.log("No task on the horizon yet!")
    moreAction("Would you like to add a task?", addTodos)
    return
  }

  console.log("Here's your Todo's list:\n")
  todos.forEach((t: Todo) => {
    const doneMark = t.done ? t.done : "  "
    const prioMark = priorityEmoji(t.priority) || "  "
    console.log(`${t.id}. ${doneMark} {t.task} ${prioMark}$ `)
  })

  pauseToMenu()
}

// Delete todos command
const deleteTodos = () => {
  handleInteraction(
    `Type the id of the task you would you like to delete: `,
    (input: string) => {
      const id = parseInt(input, 10)
      if (Number.isNaN(id)) {
        console.log("Please enter a valid number.")
        deleteTodos()
        return
      }

      const before = todos.length
      todos = todos.filter((t: Todo) => t.id !== id)

      if (todos.length === before) {
        console.log("Couldn't find the task.")
      } else {
        newCount()
        console.log("List updated!")
      }

      pauseToMenu()
    },
    showMenu
  )
}

// Edit tasks
const editTodos = () => {
  console.clear()
  console.log("Update is not implemented yet.")
  pauseToMenu()
}

// Clear all
const clearAll = () => {
  handleInteraction(
    `Would you like to clear your list completely (enter "y" to validate or press Enter to exit)? `,
    (reset: string) => {
      const choice = reset.trim().toLowerCase()
      if (choice === "y") {
        todos.length = 0
        nextId = 1
        newCount()
        console.log("Your Todo list is now entirely cleared!")
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
    (input: string) => {
      const id = parseInt(input, 10)
      if (Number.isNaN(id)) {
        console.log("Please enter a valid number.")
        markAsDone()
        return
      }

      const foundIndex = todos.findIndex((t) => t.id === id)
      if (foundIndex === -1) {
        console.log("Couldn't find the task.")
        pauseToMenu()
        return
      }

      if (!todos[foundIndex].done) {
        todos[foundIndex].done = "🟢"
        newCount()
        console.log(`Marked as done: ${todos[foundIndex].task}`)
      } else {
        console.log("That task is already marked as done.")
      }

      pauseToMenu()
    },
    showMenu
  )
}

// Exit App
const exit = () => {
  console.clear()
  console.log(`Have a lovely day ${userName}. See you next time!`)
  rl.close()
}

// Add categories or tags (work, school, personal)

// Add a search command to finds todos by keyword

// Save todos to a file so they don't disappear when you exit

// CREATIVE
// Add emojis

// Add due dates

// Color-code todos (chalk)

intro()
