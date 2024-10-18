// firebase.js
const admin = require('firebase-admin');
 // Update path
 const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'gs://sleekstyle-98723.appspot.com', // Update your bucket name
});

const bucket = admin.storage().bucket();

module.exports =  bucket ;
