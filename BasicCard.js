// adding npm resources
var inquirer = require("inquirer");
var Promise = require("bluebird");

// create BasicCard constructor accepting front and back arguments
var BasicCard = function (front, back) {

    // define front and back properties
    this.front = front;
    this.back = back;

    // display front and back of card
    console.log(this.front);
    console.log(this.back);
};

// create an object
var createCard = function () {

    return new Promise(function (resolve, reject) {

        // create prompts for card
        inquirer.prompt([

            {
                name: "front",
                message: "What is the question?"
            }, 
            {
                name: "back",
                message: "What is the answer?"
            }

        ]).then(function (answers) {

            // using answers to create a new card
            var newQuestion = new BasicCard(
                answers.front,
                answers.back);
            resolve(newQuestion);

        });

    })

};

// invoking createCard function
createCard();

// exporting module
module.exports = BasicCard;