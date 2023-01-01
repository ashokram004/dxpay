import React from 'react';
import './registerform.css';
import { initializeApp } from "firebase/app";

import { getDatabase, ref, set,onValue } from "firebase/database";
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

const sleep = ms => new Promise(r => setTimeout(r, ms));

function Registerform() {

    async function funreg(){
            var rname = document.getElementById("rname").value;
            var rnumber = document.getElementById("rnumber").value;
            var rage = document.getElementById("rage").value;
            var rpass = document.getElementById("rpass").value;
            var rcpass = document.getElementById("rcpass").value;
            var passtemp = rpass;
            var CryptoJS = require("crypto-js");
            rpass = CryptoJS.AES.encrypt(rpass, "anits").toString();
            var remail = document.getElementById("remail").value;


            if(rname ==="" || rnumber ==="" || rage === "" || rpass === "" || remail === "")
            {
                document.getElementById("notification").style.visibility = "visible";
                document.getElementById("notification").innerHTML = "Please Fill All Details!";
                await sleep(2000);
                document.getElementById("notification").style.visibility = "hidden";
                return;
            }

            if(rnumber.length !== 10)
            {
                return;
            }

            if(passtemp!==rcpass)
            {
                alert(rpass);
                document.getElementById("rcpass").style.border = "2px solid red";
                document.getElementById("notification").style.visibility = "visible";
                document.getElementById("notification").innerHTML = "Passwords mismatch!";
                await sleep(2000);
                document.getElementById("notification").style.visibility = "hidden";
                return;
            }
    
            var dbref = ref(db, "/neobank/" + rnumber);

            
            onValue(dbref, async (snapshot) => {
    
                if (snapshot.exists()) {
                    document.getElementById("notification").style.visibility = "visible";
                    document.getElementById("notification").innerHTML = "User already exists!";
                    await sleep(3000);
                    document.getElementById("notification").style.visibility = "hidden";
                }
                else {
                    set(dbref, {
                        name: rname,
                        dob: rage,
                        number: rnumber,
                        password: rpass,
                        mail : remail,
                    })
                        .then(async () => {
                            document.getElementById("notification").style.visibility = "visible";
                            document.getElementById("notification").innerHTML = "Registration Successful!";
                            document.getElementById("cover").style.left="0px";
                            document.getElementById("logform").style.transform = 'scale(1)';
                            document.getElementById("regform").style.transform = 'scale(0.8)';
                            document.getElementById("rname").value="";
                            document.getElementById("rnumber").value="";
                            document.getElementById("rage").value="";
                            document.getElementById("rpass").value="";
                            document.getElementById("remail").value="";
                            document.getElementById("rcpass").style.border = "none";
                            document.getElementById("rnumber").style.border = "none";
                            await sleep(2500);
                            document.getElementById("notification").style.visibility = "hidden";
                        })
                        .catch(async () => {
                            document.getElementById("notification").style.visibility = "visible";
                            document.getElementById("notification").innerHTML = "Registration failed!";
                            await sleep(3000);
                            document.getElementById("notification").style.visibility = "hidden";
                        });
                }
    
            }
                , {
                    onlyOnce: true
                }
            );
            

        
    }

    function checknum(){
        var passtemp = document.getElementById("rnumber").value;
        if(passtemp.length!==10){
        document.getElementById("rnumber").style.border = "2px solid red";
        }
        else{
            document.getElementById("rnumber").style.border = "none";
        }
    }

    function slide(){
        document.getElementById("cover").style.left="0px";
        document.getElementById("logform").style.transform = 'scale(1)';
        document.getElementById("regform").style.transform = 'scale(0.8)';
    }

    

    return (
        <div id="regbox">
            <div id='regform'>
                <div id="regheader">
                    REGISTER
                </div>
                <input type="text" class="regfields" id="rname" placeholder='Enter Name'/> <br/><br/>
                <input type="date" class="regfields" id="rage" placeholder='Enter DOB (DD/MM/YYYY)'/> <br/><br/>
                <input type="number" class="regfields" id="rnumber" onChange={checknum} placeholder='Enter Mobile Number'/> <br/><br/>
                <input type="text" class="regfields" id="remail" placeholder='Enter Mail Id'/> <br/><br/>
                <input type="password" class="regfields" id="rpass" placeholder='Enter Password'/> <br/><br/>
                <input type="password" class="regfields" id="rcpass" placeholder='Confirm Password'/> <br/><br/>
                <button id="regbutton" type="submit" onClick={funreg}>Register</button> <br/> <br/>
                <b id="slidereg" onClick={slide}>Have an account</b>
            </div>

            
        </div>
    )
}

export default Registerform;
