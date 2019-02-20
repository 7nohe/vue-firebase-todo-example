const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

exports.makeUppercase = functions.firestore.document('todo').onCreate((snap, context) => {
  const newValue = snap.data();
  const username = newValue.email.split('@')[0]
  snap.ref.set({ username }, { merge: true })
});
