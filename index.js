import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.magentaBright(`
╔═╗┌┬┐┬ ┬┌┬┐┌─┐┌┐┌┌┬┐  ╔╦╗┌─┐┌┐┌┌─┐┌─┐┌─┐┌┬┐┌─┐┌┐┌┌┬┐  ┌─┐┬ ┬┌─┐┌┬┐┌─┐┌┬┐
╚═╗ │ │ │ ││├┤ │││ │   ║║║├─┤│││├─┤│ ┬├┤ │││├┤ │││ │   └─┐└┬┘└─┐ │ ├┤ │││
╚═╝ ┴ └─┘─┴┘└─┘┘└┘ ┴   ╩ ╩┴ ┴┘└┘┴ ┴└─┘└─┘┴ ┴└─┘┘└┘ ┴   └─┘ ┴ └─┘ ┴ └─┘┴ ┴
`));
const randomNumber = Math.floor(10000 + Math.random() * 90000);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "studentName",
        type: "input",
        message: chalk.blue.bold("__Enter Student Name__"),
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return chalk.redBright.bold("Please Enter a Non-Empty Value");
        }
    },
    {
        name: "courses",
        type: "list",
        message: chalk.yellow.bold("***Select the Course to Enroll***"),
        choices: ["Ms Office", "Web Development", "Digital Marketing", "Graphic Designing"]
    }
]);
const tutionFee = {
    "Ms Office": 2500,
    "Web Development": 4000,
    "Digital Marketing": 3500,
    "Graphic Designing": 3500
};
console.log(chalk.blueBright(`\n Tution Fee ${tutionFee[answer.courses]}/-\n`));
console.log(chalk.green(`Balance: ${myBalance}\n`));
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: chalk.blueBright("***Select Payment Method***"),
        choices: ["Bank Transfer", "Jazz Cash", "Easy Paisa"]
    },
    {
        name: "amount",
        type: "input",
        message: chalk.green("Transfer Money"),
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return chalk.red.bold("Please Enter a Non - Empty Value");
        }
    }
]);
console.log(chalk.blueBright.bold(`\n You Select Payment Method ___${paymentType.payment}\n`));
const tutionFees = tutionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);
if (tutionFees === paymentAmount) {
    console.log(chalk.greenBright.bold(`Congratulation You have successfully enrolled in ___${answer.courses}. \n`));
    let ans = await inquirer.prompt([{
            name: "select",
            type: "list",
            message: chalk.yellowBright.bold(" What Would You Like To Do Next"),
            choices: ["View Status", " Exit"]
        }
    ]);
    if (ans.select === "View Status") {
        console.log(chalk.cyanBright.bold("\n ------- Status ---------\n"));
        console.log(chalk.cyanBright.bold(`Student Name ___ ${answer.studentName}`));
        console.log(chalk.cyanBright.bold(`Student ID ___${randomNumber}`));
        console.log(chalk.cyanBright.bold(`Course ___${answer.courses}`));
        console.log(chalk.cyanBright.bold(`Tution Fees Paid ___${paymentAmount}`));
        console.log(chalk.cyanBright.bold(`Balance ___${myBalance += paymentAmount}`));
    }
    else {
        console.log(chalk.magentaBright.bold("\n ***Exiting Student Management System*** \n"));
    }
}
else {
    console.log(chalk.redBright.bold(`Invalid Amount of Course\n`));
}
;
