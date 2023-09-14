// Scripts for firebase and firebase messaging
importScripts(
    'https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js'
);
importScripts(
    'https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js'
);

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: 'AIzaSyDpClMLMSC2n_8kwTtCmgmkonAm8EVX-Cg',
    authDomain: 'orcavpn-90331.firebaseapp.com',
    projectId: 'orcavpn-90331',
    storageBucket: 'orcavpn-90331.appspot.com',
    messagingSenderId: '592732028485',
    appId: '1:592732028485:web:a3605d0c8f1a1996852d2c',
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    alert(`${notificationTitle}, ${notificationOptions}`);
});
