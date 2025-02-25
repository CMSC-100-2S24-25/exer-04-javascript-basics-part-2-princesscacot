import {v4 as uuidv4} from 'uuid';

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

export{generateUniqueID};