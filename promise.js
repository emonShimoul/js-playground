// promise
// is used to write the asynchronous code in a synchoronous way

const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
    if (!hasMeeting) {
        const meetingDetails = {
            name: "Technical Meeting",
            location: "Google Meet",
            time: "10.00pm",
        };
        resolve(meetingDetails);
    } else {
        reject(new Error("Meeting already scheduled!!"));
    }
});

const addToCalendar = (meetingDetails) => {
    return new Promise((resolve, reject) => {
        const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
        resolve(calendar);
    });
};

// short form of using promise when there is no need of reject
// const addToCalendar = (meetingDetails) => {
//     const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
//     return Promise.resolve(calendar);
// };

meeting
    .then(addToCalendar)
    .then((res) => {
        // resolved data
        console.log(res);
    })
    .catch((err) => {
        // rejected data
        console.log(err.message);
    })


console.log("Hello...");
console.log("Hello 1...");
console.log("Hello 2...");