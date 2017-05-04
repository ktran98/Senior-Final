const readline = require('readline');
const testString  =require('./string');


function getString(){
    let password = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    password.question("What would you like to set as your password?", function(str){
        let passesAllChecks = true;

        //Conditional Statements here.
        if(!exports.checkLength){
            passesAllChecks = false;
        }

        if(!exports.containsUpper){
            passesAllChecks = false;
        }

        if(exports.containsLower){
            passesAllChecks = false;
        }

        if(exports.containsNumerical){
            passesAllChecks = false;
        }

        if(exports.containsSpecial){
            passesAllChecks = false;
        }

        if(!passesAllChecks){
            console.log("\nTry again\n");
            password.close();
            getString();
        }
        else{
            console.log("\nGreat password. Bye bye now...\n");
            password.close();
        }
    });
}

getString();
