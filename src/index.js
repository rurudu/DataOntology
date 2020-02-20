import React from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './App';
import Init from './Init';
import './index.css';
import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAuCrtF6WCKzY-BUrTdxdpSHEX9kq-FfZA",
    authDomain: "ontologydb.firebaseapp.com",
    databaseURL: "https://ontologydb.firebaseio.com",
    projectId: "ontologydb",
    storageBucket: "ontologydb.appspot.com",
    messagingSenderId: "130820037060",
    appId: "1:130820037060:web:dce897d9f50adb6fa4ac91",
    measurementId: "G-CE6FPTZFF0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

 ReactDOM.render(
	 <Init />,

	document.getElementById('root')
	);