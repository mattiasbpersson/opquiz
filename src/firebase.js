import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
  apiKey: 'AIzaSyCt1w3N_MYfIQHrPFFTo1ESzqIfPBpCGuY',
    authDomain: 'opquiz-134a5.firebaseapp.com',
    databaseURL: 'https://opquiz-134a5.firebaseio.com',
    projectId: 'opquiz-134a5',
    storageBucket: 'opquiz-134a5.appspot.com',
    messagingSenderId: '630674965180'
});

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const db = firebaseApp.database();
