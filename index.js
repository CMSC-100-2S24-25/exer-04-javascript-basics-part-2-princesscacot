import {v4 as uuidv4} from 'uuid';
import isEmail from 'validator/lib/isEmail.js';
import { appendFileSync } from 'node:fs';

function generateUniqueID(firstName, lastName){

    let firstLetter = firstName[0]; // only use the first index which is the first letter
    let surname = lastName.toLowerCase(); //make the lastname into lowercase
    let generatedName = firstLetter + surname; //concatenate first Letter and the lowercase surname 

    // generate a unique ALphaNum
    const generateUniqueAlphaNum = () => {
        return uuidv4()
    };
    let uniqueAlphaNum = generateUniqueAlphaNum(); // put the generated alphanum

    let finalUniqueAlphaNum = uniqueAlphaNum.slice(0,8); // extract 8 alphanum only 
    return generatedName + finalUniqueAlphaNum; //concatenate the generated name with unique alphanum
}

function addAccount(firstName, lastName, email, age){

    //check requirements 
    if (
        typeof firstName === "string" && firstName.trim() !== "" && //check if string (firstname, lastname and email)
        typeof lastName === "string" && lastName.trim() !== "" && //trim and compare to make sure it is not non emptry string
        typeof email === "string" && isEmail(email) && // for email used the imported validator
        typeof age === "number" && age >= 18 // age must be a number and must be at least 18 
    ) {
        let uniqueId = generateUniqueID(firstName,lastName);
        let accDetails = `${firstName}, ${lastName}, ${email}, ${age}, ${uniqueId}`;
        

        // Append details to users.txt 
        try {
            appendFileSync("users.txt", accDetails + "\n"); 
            console.log("Account successfully added.");
            return true; 
        } catch (err) {
            return false;
        }
    } else {
        console.log("There's an invalid input"); // just to print smth 
    }
}


export{generateUniqueID, addAccount};