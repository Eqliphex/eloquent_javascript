/*
Taken from: https://scotch.io/tutorials/javascript-promises-for-dummies

A Promise in short:
"Imagine you are a kid.
Your mom promises you that she'll get you a new phone next week."

You don't know if you will get that phone until next week.
Your mom can either really buy you a brand new phone, or stand you up and withhold the phone if she is not happy :(.

That is a promise. A promise has 3 states. They are:

    Promise is pending: You don't know if you will get that phone until next week.
    Promise is resolved: Your mom really buy you a brand new phone.
    Promise is rejected: You don't get a new phone because your mom is not happy.
 */


// ES7
const isMomHappy = false;

// Promise
const willIGetNewPhone = new Promise((resolve, reject) => {
        if (isMomHappy) {
            const phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone);
        } else {
            const reason = new Error('mom is not happy');
            reject(reason);
        }

    }
);

// 2nd promise
async function showOff(phone) {
    return new Promise(
        (resolve, reject) => {
            let message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';
            resolve(message);
        }
    );
}

// call our promise
async function askMom() {
    try {
        console.log('before asking Mom');

        let phone = await willIGetNewPhone; // Same as .then
        let message = await showOff(phone); // Same as .then

        console.log(message);
        console.log('after asking mom');
    }
    catch (error) { // If rejected catch i called.
        console.log(error.message);
    }
}

(async () => {
    await askMom();
})();