
import './Assistant.css';
//import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';



function Toggleassistant() {
    function dispassistant(){
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
        document.getElementById("botinterface").style.visibility="visible";
        document.getElementById("chatoptions").style.visibility="hidden";

        document.getElementById("imgassistant").style.backgroundColor = "yellow";
        document.getElementById("imghome").style.backgroundColor = "white";
        document.getElementById("imgcards").style.backgroundColor = "white";
        document.getElementById("imgtrans").style.backgroundColor = "white";
        document.getElementById("imgloan").style.backgroundColor = "white";
        document.getElementById("imgcrypto").style.backgroundColor = "white";
        document.getElementById("imgsettings").style.backgroundColor = "white";
        document.getElementById("imgreward").style.backgroundColor = "white";
        
    }
    return (
        <div>
           <div id="toggle" onClick={dispassistant}></div>
        </div>
    )
}

export default Toggleassistant;
