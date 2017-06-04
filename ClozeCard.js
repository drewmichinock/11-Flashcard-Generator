// adding npm resources
var inquirer = require("inquirer");
var Promise = require("bluebird");

// creating ClozeCard constuctor
var ClozeCard = function (text, cloze) {

    // if cloze is a part of text
    if (text.includes(cloze)) {

        // run cloze card constructor
        this.fullText = text;
        this.cloze = cloze;
        this.partial = this.fullText.replace(this.cloze, "...");

        console.log(this.fullText);
        console.log(this.cloze);
        console.log(this.partial);

        // if not part of text, console log an "error" message
    } else {

        console.log("Error");

    }

};

// create an object
var createCard = function () {

    return new Promise(function (resolve, reject) {

        // create prompts for card
        inquirer.prompt([

            {
                name: "text",
                message: "What is the entire question?"
            }, 
            {
                name: "cloze",
                message: "What is the correct answer in the text?"
            }

        ]).then(function (answers) {

            // using answers to create a new card
            var newQuestion = new ClozeCard(
                answers.text,
                answers.cloze);
            resolve(newQuestion);

        });

    })

};

// invoking createCard function
createCard();

// exporting module
module.exports = ClozeCard;