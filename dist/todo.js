/*************/
/* TODO LIST */
/*************/
// Imports
import * as readline from "readline";
// Variables
let todos = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let userName = 'Albert';
// Intro
const intro = () => {
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
            ¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤`);
    rl.question(`\nHeya! How should I call you: `, (name) => {
        userName = name.trim() === "" ? "Albert" : name.trim();
        if (name.trim() === "") {
            console.log(`Mysterious! Alright, I'll call you ${userName}!`);
        }
        showMenu();
    });
};
// Show menu
const showMenu = () => {
    console.log(`Welcome ${userName}! What can I help you with:`);
    console.log(`\n
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
                            IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII`);
};
process.stdout.write(">");
rl.question("", (cmd) => handleCmd(cmd));
// Handle commands logic
const handleCmd = (cmd) => {
    switch (cmd) {
        case "1":
            addTodos();
            break;
        case "2":
            readTodos();
            break;
        case "3":
            deleteTodos();
            break;
        case "4":
            clearAll();
            break;
        case "5":
            exit();
            break;
        default:
            console.log("Unknown Command");
            showMenu();
    }
};
// Add more todos
const moreAction = (msg, action) => {
    rl.question(`\n${msg}\n (type 'y' to proceed or press enter to exit): `, (choice) => {
        if (choice.trim().toLowerCase() === "y") {
            action();
            return;
        }
        process.stdout.write(">");
        rl.question("", (cmd) => {
            handleCmd(cmd);
        });
    });
};
// Add todos command
const addTodos = () => {
    rl.question(`\nGreat! What task would you like to add: `, (task) => {
        if (task.trim() === "") {
            console.log("Oi! You didn't write any task!");
            moreAction("Try adding a task again?", addTodos);
            return;
        }
        const newTask = {
            id: Date.now(),
            task: task.trim()
        };
        todos.push(newTask);
        console.log(`Task added to your Todo's list!`);
        moreAction('Would you like to add another task?', addTodos);
    });
};
// Read todos command
const readTodos = () => {
    if (todos.length === 0) {
        console.log("No task on the horizon yet!");
        moreAction("Would you like to add a task? ", addTodos);
    }
    else {
        console.log("Here's your Todo's list: \n");
        todos.forEach((t) => {
            console.log(`${t.id} - ${t.task}`);
        });
    }
    process.stdout.write(">");
    rl.question("Press enter to exit.", (cmd) => {
        handleCmd(cmd);
    });
};
// Delete todos command
const deleteTodos = () => {
    readTodos();
    rl.question(`Type the id of the task you would you like to edit: `, (input) => {
        const id = parseInt(input);
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        if (updatedTodos.length === todos.length) {
            console.log("Couldn't find the tasks.");
        }
        else {
            todos = updatedTodos;
            console.log("List updated!");
        }
        process.stdout.write(">");
        rl.question("", (cmd) => {
            handleCmd(cmd);
        });
    });
};
// Add a priority level (high/medium/low) to each todo
// Add a "clear all" command
const clearAll = () => { };
// Exit App
const exit = () => {
    console.log(`Have a lovely day ${userName}. See you next time!`);
    rl.close();
};
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
intro();
//# sourceMappingURL=todo.js.map