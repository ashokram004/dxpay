import './Transactions.css';

import { initializeApp } from "firebase/app";

import { getDatabase, ref , set, child , update, remove, onValue, get} from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCpWSszxhDlQasxK1rwdgsHHc31Qka2hdk",
    authDomain: "neobank-d79a3.firebaseapp.com",
    databaseURL: "https://neobank-d79a3-default-rtdb.firebaseio.com",
    projectId: "neobank-d79a3",
    storageBucket: "neobank-d79a3.appspot.com",
    messagingSenderId: "641306442398",
    appId: "1:641306442398:web:faaef3e7040c98f369198f",
    measurementId: "G-6WFR69QQDF"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();


function Transactions() {
    return (
        <div>
            <div id="transblock">
                <div id='midcontent'>
                    <div id="filter">
                        <h2> Category </h2>: 
                        <select>
                            <option value="">All</option>
                            <option value="">Transfer</option>
                            <option value="">Movies</option>
                            <option value="">Shopping</option>
                            <option value="">Recharge</option>
                            <option value="">Crypto</option>
                            <option value="">Rent</option>
                            
                        </select>

                        <h2> Account </h2>: 
                        <select>
                            <option value="">All</option>
                            <option value="">XXXX1</option>
                            <option value="">XXXX2</option>
                            <option value="">XXXX3</option>
                        </select>
                    </div>
                    <div id="results">

                        <div id="transcard">
                            <div id="senttag">
                                Sent to
                            </div>
                            <div id="sentnumber">
                                1231231234
                            </div>
                            <div id="sentamount">
                                10000000rs
                            </div>
                            <div id="senttime">
                                12:34 AM <br/>
                                11/12/2023
                            </div>
                        </div>
                        

                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transactions;
