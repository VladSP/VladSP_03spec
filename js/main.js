let firstName = prompt('Enter your first Name pls', '').trim();
firstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
console.log(firstName);
let secondName = prompt('What is your last name?', '').trim();
secondName = secondName[0].toUpperCase() + secondName.slice(1).toLowerCase();
console.log(secondName);
let userEmail = prompt("Enter you Email pls", "").replaceAll().toLowerCase();
userEmail = (!userEmail.includes('@')) ? `not valid email <b>${userEmail}</b>(symbol @ not exist)` :
            (userEmail.startsWith('@')) ? `not valid email <b>${userEmail}</b>(symbol @ find in first place)` :
            (userEmail.iendsWith('@')) ? `not valid email <b>${userEmail}</b>(symbol @ find in last place)` :
            `<b>${userEmail}</b>`;
console.log(userEmail);
dateofBirth = +prompt("Enter your date of birth", "").replaceAll();
today = new Date();
thisYear = today.getFullYear();
userAge = thisYear - dateofBirth;
document.write(`<ul>
                <li> Full name: <b>${firstName} ${secondName}</b></li>
                <li> Email: ${userEmail} </li>
                <li> Age: <b> ${userAge}
                </ul>
`);




