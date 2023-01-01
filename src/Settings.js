import './Settings.css';

function Settings() {
    function openprofile(){
        document.getElementById("profileblock").style.visibility = "visible";
    }
    function hide(){
        document.getElementById("home").style.visibility="hidden";
        document.getElementById("homeblock").style.visibility="hidden";
        document.getElementById("transaction").style.visibility="hidden";
        document.getElementById("bankcard").style.visibility="hidden";
        document.getElementById("loan").style.visibility="hidden";
        document.getElementById("assistant").style.visibility="hidden";
        document.getElementById("crypto").style.visibility="hidden";
        document.getElementById("setting").style.visibility="hidden";
        document.getElementById("profilebox").style.visibility="hidden";
        document.getElementById("botinterface").style.visibility="hidden";
        document.getElementById("chatoptions").style.visibility="hidden";
        document.getElementById("toggleassistant").style.visibility = "hidden";
        document.getElementById("results").innerHTML = "";

        document.getElementById("imghome").style.backgroundColor = "white";
        document.getElementById("imgcards").style.backgroundColor = "white";
        document.getElementById("imgtrans").style.backgroundColor = "white";
        document.getElementById("imgloan").style.backgroundColor = "white";
        document.getElementById("imgcrypto").style.backgroundColor = "white";
        document.getElementById("imgassistant").style.backgroundColor = "white";
        document.getElementById("imgsettings").style.backgroundColor = "white";
    }
    
    return (
        <div>
            <div id="settingsblock">
                <div id='midcontent'>
                    <div id="settingscontent">
                        <center>
                        <div onClick={openprofile}><b> Profile </b></div>
                        <div><b>Notifications </b></div>
                        <div><b>UPI address</b></div>
                        <div><b>Privacy</b></div>
                        <div><b>About us</b></div>
                        <div onClick={hide}><b>Log Out</b></div>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings;
