import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Registerform from './registerform';
import Loginform from './loginform';
import Home from './Home';
import Transactions from './Transactions';
import Cards from './Cards';
import Loans from './Loans';
import Rewards from './Rewards';
import Crypto from './Crypto';
import Assistant from './Assistant';
import Settings from './Settings';
import Profile from './Profile';
import Toggleassistant from './Toggleassistant';

const form1 = ReactDOM.createRoot(document.getElementById('registerform'));
form1.render(

    <Registerform />

);


const form2 = ReactDOM.createRoot(document.getElementById('loginform'));
form2.render(

    <Loginform />

);

const home = ReactDOM.createRoot(document.getElementById('home'));
home.render(

    <Home />

);


const transactions = ReactDOM.createRoot(document.getElementById('transaction'));
transactions.render(

    <Transactions />

);

const cards = ReactDOM.createRoot(document.getElementById('bankcard'));
cards.render(

    <Cards />

);

const loans = ReactDOM.createRoot(document.getElementById('loan'));
loans.render(

    <Loans />

);

const rewards = ReactDOM.createRoot(document.getElementById('reward'));
rewards.render(

    <Rewards />

);

const cryptos = ReactDOM.createRoot(document.getElementById('crypto'));
cryptos.render(

    <Crypto />

);

const assistants = ReactDOM.createRoot(document.getElementById('assistant'));
assistants.render(

    <Assistant />

);

const settings = ReactDOM.createRoot(document.getElementById('setting'));
settings.render(

    <Settings />

);

const profilepage= ReactDOM.createRoot(document.getElementById('profileblock'));
profilepage.render(

    <Profile />

);



const toggleassistant= ReactDOM.createRoot(document.getElementById('toggleassistant'));
toggleassistant.render(

    <Toggleassistant />

);




