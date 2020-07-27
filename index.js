const inquirer = require("inquirer");
const genrateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const path = require("path");
const questions = () => {
    inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "How would you describe this project?"
    },
    {
        type: "input",
        name: "installation",
        message: "Include any necessary installation codes needed."
    },
    {
        type: "input",
        name: "usage",
        message: "What will this project be used for?"
    },
    {
        type: "input",
        name: "license",
        message: "What licenses will go along with this project?"
    },
    {
        type: "input",
        name: "contributing",
        message: "Did anyone else contribute to this project?"
    },
    {
        type: "input",
        name: "tests",
        message: "Describe any tests that you have performed for this project."
    },
    {
        type: "input",
        name: "author",
        message: "What is your name and email?"
    },
]) .then(data=>{
    //console.log(answer)})
writeToFile("README.md",genrateMarkdown(data))
})};

function writeToFile(fileName, data) {console.log(process.cwd())
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};


questions ()