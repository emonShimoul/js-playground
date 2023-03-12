const paymentSuccess = true;
const marks = 80;

function enroll(callback) {
    console.log('Course enrollment is in progress...');

    setTimeout(function () {
        if (paymentSuccess) {
            callback();
        } else {
            console.log('Payment failed!!');
        }
    }, 2000);
}

function progress(callback) {
    console.log('Course on progress...');

    if (marks >= 80) {
        callback();
    } else {
        console.log("You could not get enough marks to get the certificate!!");
    }
}

function getCertificate() {
    console.log("Here is your certificate!!!");
}

enroll(function () {
    progress(getCertificate);
});