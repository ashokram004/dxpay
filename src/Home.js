import './Home.css';
import { initializeApp } from "firebase/app";

import { getDatabase, ref, set,onValue , child , update, push ,remove, get} from "firebase/database";
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

var current = new Date();


function Home() {

    function openprof(){
        document.getElementById("profileblock").style.visibility = "visible";
    }
    

    function funhome(){
        document.getElementById("transaction").style.visibility="hidden";
        document.getElementById("bankcard").style.visibility="hidden";
        document.getElementById("loan").style.visibility="hidden";
        document.getElementById("homeblock").style.visibility="visible";
        document.getElementById("assistant").style.visibility="hidden";
        document.getElementById("crypto").style.visibility="hidden";
        document.getElementById("setting").style.visibility="hidden";
        document.getElementById("botinterface").style.visibility="hidden";
        document.getElementById("chatoptions").style.visibility="hidden";
        document.getElementById("reward").style.visibility="hidden";

        document.getElementById("imghome").style.backgroundColor = "yellow";
        document.getElementById("imgcards").style.backgroundColor = "white";
        document.getElementById("imgtrans").style.backgroundColor = "white";
        document.getElementById("imgloan").style.backgroundColor = "white";
        document.getElementById("imgcrypto").style.backgroundColor = "white";
        document.getElementById("imgassistant").style.backgroundColor = "white";
        document.getElementById("imgsettings").style.backgroundColor = "white";
        document.getElementById("imgreward").style.backgroundColor = "white";
    }
    function funtransactions(){
        document.getElementById("homeblock").style.visibility="hidden";
        document.getElementById("transaction").style.visibility="visible";
        document.getElementById("bankcard").style.visibility="hidden";
        document.getElementById("loan").style.visibility="hidden";
        document.getElementById("assistant").style.visibility="hidden";
        document.getElementById("crypto").style.visibility="hidden";
        document.getElementById("setting").style.visibility="hidden";
        document.getElementById("botinterface").style.visibility="hidden";
        document.getElementById("chatoptions").style.visibility="hidden";
        document.getElementById("reward").style.visibility="hidden";
        
        document.getElementById("imgtrans").style.backgroundColor = "yellow";
        document.getElementById("imghome").style.backgroundColor = "white";
        document.getElementById("imgcards").style.backgroundColor = "white";
        document.getElementById("imgloan").style.backgroundColor = "white";
        document.getElementById("imgcrypto").style.backgroundColor = "white";
        document.getElementById("imgassistant").style.backgroundColor = "white";
        document.getElementById("imgsettings").style.backgroundColor = "white";
        document.getElementById("imgreward").style.backgroundColor = "white";
    }

    function funcards(){
        document.getElementById("homeblock").style.visibility="hidden";
        document.getElementById("transaction").style.visibility="hidden";
        document.getElementById("loan").style.visibility="hidden";
        document.getElementById("bankcard").style.visibility="visible";
        document.getElementById("assistant").style.visibility="hidden";
        document.getElementById("crypto").style.visibility="hidden";
        document.getElementById("setting").style.visibility="hidden";
        document.getElementById("botinterface").style.visibility="hidden";
        document.getElementById("chatoptions").style.visibility="hidden";
        document.getElementById("reward").style.visibility="hidden";

        document.getElementById("imgcards").style.backgroundColor = "yellow";
        document.getElementById("imghome").style.backgroundColor = "white";
        document.getElementById("imgtrans").style.backgroundColor = "white";
        document.getElementById("imgloan").style.backgroundColor = "white";
        document.getElementById("imgcrypto").style.backgroundColor = "white";
        document.getElementById("imgassistant").style.backgroundColor = "white";
        document.getElementById("imgsettings").style.backgroundColor = "white";
        document.getElementById("imgreward").style.backgroundColor = "white";
    }
    function funloan(){
        document.getElementById("homeblock").style.visibility="hidden";
        document.getElementById("transaction").style.visibility="hidden";
        document.getElementById("bankcard").style.visibility="hidden";
        document.getElementById("loan").style.visibility="visible";
        document.getElementById("assistant").style.visibility="hidden";
        document.getElementById("crypto").style.visibility="hidden";
        document.getElementById("setting").style.visibility="hidden";
        document.getElementById("botinterface").style.visibility="hidden";
        document.getElementById("chatoptions").style.visibility="hidden";
        document.getElementById("reward").style.visibility="hidden";

        document.getElementById("imgloan").style.backgroundColor = "yellow";
        document.getElementById("imghome").style.backgroundColor = "white";
        document.getElementById("imgcards").style.backgroundColor = "white";
        document.getElementById("imgtrans").style.backgroundColor = "white";
        document.getElementById("imgcrypto").style.backgroundColor = "white";
        document.getElementById("imgassistant").style.backgroundColor = "white";
        document.getElementById("imgsettings").style.backgroundColor = "white";
        document.getElementById("imgreward").style.backgroundColor = "white";

    }
    function funrewards(){
        document.getElementById("homeblock").style.visibility="hidden";
        document.getElementById("transaction").style.visibility="hidden";
        document.getElementById("bankcard").style.visibility="hidden";
        document.getElementById("loan").style.visibility="hidden";
        document.getElementById("assistant").style.visibility="hidden";
        document.getElementById("crypto").style.visibility="hidden";
        document.getElementById("setting").style.visibility="hidden";
        document.getElementById("botinterface").style.visibility="hidden";
        document.getElementById("chatoptions").style.visibility="hidden";
        document.getElementById("reward").style.visibility="visible";

        document.getElementById("imgreward").style.backgroundColor = "yellow";
        document.getElementById("imgcrypto").style.backgroundColor = "white";
        document.getElementById("imghome").style.backgroundColor = "white";
        document.getElementById("imgcards").style.backgroundColor = "white";
        document.getElementById("imgtrans").style.backgroundColor = "white";
        document.getElementById("imgloan").style.backgroundColor = "white";
        document.getElementById("imgassistant").style.backgroundColor = "white";
        document.getElementById("imgsettings").style.backgroundColor = "white";

    }
    function funcrypto(){
        document.getElementById("homeblock").style.visibility="hidden";
        document.getElementById("transaction").style.visibility="hidden";
        document.getElementById("bankcard").style.visibility="hidden";
        document.getElementById("loan").style.visibility="hidden";
        document.getElementById("assistant").style.visibility="hidden";
        document.getElementById("crypto").style.visibility="visible";
        document.getElementById("setting").style.visibility="hidden";
        document.getElementById("botinterface").style.visibility="hidden";
        document.getElementById("chatoptions").style.visibility="hidden";
        document.getElementById("reward").style.visibility="hidden";

        document.getElementById("imgcrypto").style.backgroundColor = "yellow";
        document.getElementById("imghome").style.backgroundColor = "white";
        document.getElementById("imgcards").style.backgroundColor = "white";
        document.getElementById("imgtrans").style.backgroundColor = "white";
        document.getElementById("imgloan").style.backgroundColor = "white";
        document.getElementById("imgassistant").style.backgroundColor = "white";
        document.getElementById("imgsettings").style.backgroundColor = "white";
        document.getElementById("imgreward").style.backgroundColor = "white";

    }
    function funassistant(){
        document.getElementById("homeblock").style.visibility="hidden";
        document.getElementById("transaction").style.visibility="hidden";
        document.getElementById("bankcard").style.visibility="hidden";
        document.getElementById("loan").style.visibility="hidden";
        document.getElementById("assistant").style.visibility="visible";
        document.getElementById("crypto").style.visibility="hidden";
        document.getElementById("setting").style.visibility="hidden";
        document.getElementById("chatoptions").style.visibility="visible";
        document.getElementById("reward").style.visibility="hidden";
        document.getElementById("botinterface").style.visibility="hidden";

        document.getElementById("imgassistant").style.backgroundColor = "yellow";
        document.getElementById("imghome").style.backgroundColor = "white";
        document.getElementById("imgcards").style.backgroundColor = "white";
        document.getElementById("imgtrans").style.backgroundColor = "white";
        document.getElementById("imgloan").style.backgroundColor = "white";
        document.getElementById("imgcrypto").style.backgroundColor = "white";
        document.getElementById("imgsettings").style.backgroundColor = "white";
        document.getElementById("imgreward").style.backgroundColor = "white";

    }
    function funsettings(){
        document.getElementById("homeblock").style.visibility="hidden";
        document.getElementById("transaction").style.visibility="hidden";
        document.getElementById("bankcard").style.visibility="hidden";
        document.getElementById("loan").style.visibility="hidden";
        document.getElementById("assistant").style.visibility="hidden";
        document.getElementById("crypto").style.visibility="hidden";
        document.getElementById("setting").style.visibility="visible";
        document.getElementById("botinterface").style.visibility="hidden";
        document.getElementById("chatoptions").style.visibility="hidden";
        document.getElementById("reward").style.visibility="hidden";

        document.getElementById("imgsettings").style.backgroundColor = "yellow";
        document.getElementById("imgassistant").style.backgroundColor = "white";
        document.getElementById("imghome").style.backgroundColor = "white";
        document.getElementById("imgcards").style.backgroundColor = "white";
        document.getElementById("imgtrans").style.backgroundColor = "white";
        document.getElementById("imgloan").style.backgroundColor = "white";
        document.getElementById("imgcrypto").style.backgroundColor = "white";
        document.getElementById("imgreward").style.backgroundColor = "white";
        
    }

    function sendmoneyfun(){
        document.getElementById("sendmoneyblock").style.visibility = "visible";
    }

    function writeNewPost(usize) {
        const postData = {
          transcount : usize,
        };
        const updates = {};
        updates['/ledger/count'] = postData;
        return update(ref(db), updates);
      }
      


    async function transferamount(){

            var snumber = document.getElementById("mnum").value;
            var samount = document.getElementById("mamount").value;


            if(snumber ==="" || samount ==="" )
            {
                document.getElementById("notification").style.visibility = "visible";
                document.getElementById("notification").innerHTML = "Please Fill All Details!";
                await sleep(2000);
                document.getElementById("notification").style.visibility = "hidden";
                return;
            }

            if(snumber.length !== 10)
            {
                document.getElementById("notification").style.visibility = "visible";
                document.getElementById("notification").innerHTML = "Enter Valid Number";
                await sleep(2000);
                document.getElementById("notification").style.visibility = "hidden";
                return;
            }

    
            var dbref = ref(getDatabase());
            var size = 0;
            var tdone = 0;
            get(child(dbref, `neobank/${snumber}`)).then(async (snapshot) => {
    
                if (snapshot.exists()) {
                    
                    get(child(ref(db), "ledger/count/")).then(async (snapshot) => {

                        if (snapshot.exists()) {
                            size = parseInt(snapshot.child('transcount').val());
                            size = size + 1;
                            var sdbref = ref(db, "/ledger/" + size);
                            var fromnumber = document.getElementById("piphone").innerHTML;
                            var CryptoJS = require("crypto-js");
                            var time = current.toLocaleString();
                            var fin = snumber + fromnumber + time;
                            var currhash = CryptoJS.AES.encrypt(fin, "anits").toString();
                            var previhash = 0;
                            get(child(dbref, `ledger/${size-1}`)).then(async (snapshot) => {
                                previhash = snapshot.child('curhash').val();
                                
                            });
                            await sleep(1000);
                            document.getElementById("sendmoneyblock").style.visibility = "hidden";
                            document.getElementById("mnum").value  = "";
                            document.getElementById("mamount").value = "";
                            set(sdbref, {
                                curhash : currhash,
                                prevhash : previhash,
                                from : fromnumber,
                                to : snumber,
                                amount : samount,
                                time : time,
                            })
                                .then(async () => {
                                    document.getElementById("notification").style.visibility = "visible";
                                    document.getElementById("notification").innerHTML = "money sent!";
                                    await sleep(3000);
                                    tdone = 1;
                                    document.getElementById("notification").style.visibility = "hidden";

                                    const dbRef = ref(db, "/ledger");
                                    await sleep(3000);
                                    document.getElementById("results").innerHTML = "";
                                    onValue(dbRef, (snapshot) => {
                                        snapshot.forEach((childSnapshot) => {
                                        const childKey = childSnapshot.key;
                                        get(child(ref(db), "ledger/" + childKey)).then(async (snapshot) => {
                                            var fromnum = snapshot.child('from').val();
                                            if(fromnumber===fromnum){
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
                                    
                                })
                                .catch(async () => {
                                    document.getElementById("notification").style.visibility = "visible";
                                    document.getElementById("notification").innerHTML = "transfer failed!";
                                    await sleep(3000);
                                    document.getElementById("notification").style.visibility = "hidden";
                                });
                        }
                        else{
                            document.getElementById("notification").style.visibility = "visible";
                            document.getElementById("notification").innerHTML = "Server problem!";
                            await sleep(3000);
                            document.getElementById("notification").style.visibility = "hidden";
                        }
                    });

                    
                    
                }
                else {
                    document.getElementById("notification").style.visibility = "visible";
                    document.getElementById("notification").innerHTML = "Invalid Recipient!";
                    await sleep(2000);
                    document.getElementById("notification").style.visibility = "hidden";
                }
    
            }
                
            );

            await sleep(10000);
            if(tdone===1){
                writeNewPost(size);
            }
    }



    function canceltransfer(){
        document.getElementById("sendmoneyblock").style.visibility = "hidden";
        document.getElementById("mnum").value  = "";
        document.getElementById("mamount").value = "";
    }


    return (
        <div>
            <div id="homeblock">
                <div id='midcontent'>
                    <div id="sendmoneyblock">
                        <div id="sendmoneybox">
                            <h1>Money Transfer</h1>
                            <input id="mnum" type="text" placeholder='Enter Mobile Number' autoComplete='false' autoCorrect='false' maxLength={10}/>
                            <input id="mamount" type="number" placeholder='Enter Amount'/>
                            <button type = "submit" id="msend" onClick={transferamount} >SEND</button>
                            <button type = "clear" id="mcancel" onClick={canceltransfer} >CANCEL</button>
                        </div>
                    </div>
                    <div id="card" className='card1'>
                        <div id="cardtitle">
                            Money Transfer 
                        </div>
                        <button id="wallet">
                        <b> DXpay Wallet</b>
                        </button>
                        <button id="sendmoney" onClick={sendmoneyfun}>
                        <b> Send Money</b>
                        </button>
                        <button id="qrcode">
                        <b> Scan QR code</b>
                        </button>
                        <button id="selftransfer">
                        <b> Self Transfer</b>
                        </button>
                        <button id="banktransfer"> 
                        <b> Bank Transfer</b>
                        </button> 
                        <button id="addaccount">
                        <b>  Add Account</b>
                        </button>
                        <button id="checkbalance">
                        <b>  Check Balance</b>
                        </button>
                    </div>
                    <div id="card" className='card2'>
                        <div id="cardtitle" >
                         Recharge and Bill Payment
                        </div>
                        <button id="mobilerec">
                        <b> Mobile <br/>Recharge</b>
                        </button>
                        <button id="dthrec">
                        <b>  DTH <br/>  Recharge</b>
                        </button>
                        <button id="fibernetrec">
                        <b>  Fibernet <br/>Recharge</b>
                        </button>
                        <button id="googlerec">
                        <b>  Google Play<br/> Recharge</b>
                        </button>
                        <button id="billpay">
                        <b>  Bill  <br/>payment</b>
                        </button>
                        <button id="gasbook">
                        <b>  Gas <br/> booking</b>
                        </button>
                        <button id="fasttagrec">
                        <b>  Fastag <br/>Recharge</b>
                        </button>
                    </div>
                    <div id="card" className='card3'>
                        <div id="cardtitle">
                          Ticket Booking
                        </div>
                        <button id="movie">
                        <b>  Movie</b>
                        </button>
                        <button id="train">
                        <b>   Train</b>
                        </button>
                        <button id="bus">
                        <b>   Bus</b>
                        </button>
                        <button id="plane">
                        <b>  Plane</b>
                        </button>
                        <button id="cruise">
                        <b>  Cruise</b>
                        </button>
                        <button id="sports">
                        <b>  Sports</b>
                        </button>
                        <button id="events">
                        <b>   Events</b>
                        </button>
                    </div>
                    <div id="botspace"></div>
                </div>
            </div>


            
            <div id="sidebar"> 
                <ul id= "side-items">
                    <li onClick={funhome}><div id="imghome"></div> <b> Home </b></li>
                    <li onClick={funtransactions}><div id="imgtrans"></div> <b> Transactions </b></li>
                    <li onClick={funcards} ><div id="imgcards"></div> <b> Cards </b></li>
                    <li onClick={funrewards} ><div id="imgreward"></div> <b> Rewards </b></li>
                    <li onClick={funloan}><div id="imgloan"></div> <b> Loan </b></li>
                    <li onClick={funcrypto}><div id="imgcrypto"></div> <b> Crypto </b></li>
                    <li onClick={funassistant}><div id="imgassistant"></div> <b> Assistant </b></li>
                    <li id="sidebarspace"></li>
                    <li onClick={funsettings} id="settings"><div id="imgsettings"></div> <b> Settings </b></li>
                </ul>
            </div>


            
            <div id="nav"></div>

            <div id="header">
                <b>  DXPay </b>
                <div id="nav-items">
                    Hello, 
                </div>
                <div id="profile"></div>
                
                <div id="profilebox">
                    <div id="pic"></div>
                    <h5 id="pname"> Name:  </h5> 
                    <h5 id="pid"> UPI ID: @fyl </h5>
                    <h5 id="kyc"> KYC Not Verified </h5>
                    <button id="btprof" onClick={openprof}>Profile</button>
                </div>
            </div>
        </div>
    )
}

export default Home;
