
import './loginform.css';
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

const sleep = ms => new Promise(r => setTimeout(r, ms));

function Loginform() {
    function slide(){
        document.getElementById("cover").style.left="960px";
        document.getElementById("logform").style.transform = 'scale(0.8)';
        document.getElementById("regform").style.transform = 'scale(1)';
    }
    async function forgot(){
        var x = document.getElementById("unumber").value;
        if(x===null || x===""){
            document.getElementById("notification").style.visibility = "visible";
            document.getElementById("notification").innerHTML = "Please Enter Mobile number<br/>and Click on Forgot!";
            await sleep(2000);
            document.getElementById("notification").style.visibility = "hidden";
        }
        else{
            document.getElementById("notification").style.visibility = "visible";
            document.getElementById("notification").innerHTML = "A Reset password link<br/> is sent to the given number";
            await sleep(2000);
            document.getElementById("notification").style.visibility = "hidden";
        }
    }

    async function funlog(){
        function passinfo(sid){
            get(child(ref(db), "neobank/" + sid)).then((snapshot) => {
                if (snapshot.exists()) {
                var name = snapshot.child('name').val();
                var mobile = snapshot.child('number').val();
                var mail = snapshot.child('mail').val();
                var age = snapshot.child('age').val();
                document.getElementById("nav-items").innerHTML = "Hello, "+name;
                document.getElementById("pname").innerHTML = "Name: "+name;
                document.getElementById("pid").innerHTML = "UPI ID: "+mobile+"@dxp";
                document.getElementById("piname").innerHTML = name;
                document.getElementById("piphone").innerHTML = mobile;
                document.getElementById("pimail").innerHTML = mail;
                document.getElementById("piid").innerHTML = mobile+"@dxp";
                }
            });
        }

        var sid = document.getElementById("unumber").value;
        var spass = document.getElementById("upass").value;
        if(sid ==="" || spass === "")
            {
                document.getElementById("notification").style.visibility = "visible";
                document.getElementById("notification").innerHTML = "Please Fill All Details!";
                await sleep(2000);
                document.getElementById("notification").style.visibility = "hidden";
                return;
            }
            
        get(child(ref(db), "neobank/" + sid)).then(async (snapshot) => {

            if (snapshot.exists()) {
                var pass = snapshot.child('password').val();
                var CryptoJS = require("crypto-js");
                pass = CryptoJS.AES.decrypt(pass, "anits").toString(CryptoJS.enc.Utf8);

                if (pass === spass) {

                    document.getElementById("home").style.visibility = "visible";
                    document.getElementById("homeblock").style.visibility="visible";
                    document.getElementById("imghome").style.backgroundColor = "yellow";
                    document.getElementById("unumber").value="";
                    document.getElementById("upass").value="";
                    document.getElementById("rcpass").style.border = "none";
                    document.getElementById("rnumber").style.border = "none";
                    document.getElementById("toggleassistant").style.visibility = "visible";
                    passinfo(sid);


                    const dbRef = ref(db, "/ledger");
                    document.getElementById("results").innerHTML = "";
                    onValue(dbRef, (snapshot) => {
                        snapshot.forEach((childSnapshot) => {
                        const childKey = childSnapshot.key;
                        get(child(ref(db), "ledger/" + childKey)).then(async (snapshot) => {
                            var fromnum = snapshot.child('from').val();
                            if(sid===fromnum){
                                var tonum = snapshot.child('to').val();
                                var pamount = snapshot.child('amount').val();
                                var pdatetime = snapshot.child('time').val();
                                pdatetime = pdatetime.split(", ");
                                var pdate = pdatetime[0];
                                var ptime = pdatetime[1];
                                document.getElementById("results").innerHTML += "<div id='transcard'><div id='senttag'>Sent to</div><div id='sentnumber'>"+tonum+"</div><div id='sentamount'>"+pamount+"rs</div><div id='senttime'>"+ptime+"<br/>"+pdate+"</div></div>";
                            }
                            });
                        });
                    }, {
                        onlyOnce: true
                    });
                    
                }
                else {
                    document.getElementById("notification").style.visibility = "visible";
                    document.getElementById("notification").innerHTML = "Wrong password!";
                    await sleep(3000);
                    document.getElementById("notification").style.visibility = "hidden";



                }

            }
            else{
                document.getElementById("notification").style.visibility = "visible";
                document.getElementById("notification").innerHTML = "Invalid user!";
                await sleep(3000);
                document.getElementById("notification").style.visibility = "hidden";
            }
        });

        
        
    }
    
    return (
        <div id="loginbox">
            <div id='logform'>
                <div id="loginheader">
                    LOGIN
                </div>
                <input type="text" id="unumber" placeholder='Enter Mobile Number'/> <br/><br/>
                <input type="password" id="upass" placeholder='Enter Password'/><br/><br/>
                <button id="loginbutton" type="submit" onClick={funlog}>Login</button> <br/> <br/>
                <b id="forgotpass" onClick={forgot}>Forgot password</b> <br/> <br/> 
                <b id="slidelogin" onClick={slide}>Don't have an account</b>
            </div>
        </div>
    )
}

export default Loginform;
