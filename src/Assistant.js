
import './Assistant.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import React from 'react';


const utterances = [ 
    ["how are you", "how is life", "how are things"],        //0
    ["hi", "hey", "hello", "good morning", "good afternoon"],      //1
    ["what are you doing", "what is going on", "what is up"],      //2
    ["how old are you"],					//3
    ["who are you", "are you human", "are you bot", "are you human or bot"],   //4
    ["can i order a pizza" , "order a pizza" , "can you order me a pizza"],   //5
    ["fine","good","i am fine", "im fine", "i am good","im good"], //6
    ["check my credit card balance","balance","check my balance","show my balance"],
    ["open an account","I want to open an account"],
    ["How much additional money will I need to purchase a tesla car"],
    ["Notify me when the price of bitcoin reaches x"],
    ["ok","okay","thanks","thank you"],
    ["no"]
   
];

const answers = [
     [
      "Fine... how are you?",
      "Pretty well, how are you?",
      "Fantastic, how are you?"
    ],                    //0
    [
      "Hello sir!", "Hi sir!", "Hi there!"
    ],						//1
    [
      "Helping people"
    ],						//2
    ["I am infinite"],					//3
    ["I am your banking assistant" , "Your assistant"],	//4
    [ "Sorry sir, You don't have enough balance for that" ], //5
    ["glad to hear that"],
    ["Here's your latest balance : 23rs"],
    ["This feature is currenly under implementation"],
    ["You need 5200000rs more for buying a tesla car"],
    ["Sure sir"],
    ["Is there anything else I can help you?"],
    ["Have a great day"],
    ["Can you please say it again" , "Please repeat it again"]

];






function Assistant() {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
      } = useSpeechRecognition();

 
    const msg = new SpeechSynthesisUtterance()
    const voices = window.speechSynthesis.getVoices();
    msg.voice = voices[4];


    
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    
    function autoscroll(){
        const el = document.getElementById('messagearea');
        if (el) {
        el.scrollTop = el.scrollHeight;
        }
    }


    async function botreact(umessage){
        var mess;
        var items = "";
        if(umessage.includes("transactions")){
            await sleep(1000);
            document.getElementById("messagearea").innerHTML += "<div id='botmessage'>Taking you to transactions page</div><br/><br/><br/>";
            autoscroll();
            await sleep(1500);
            document.getElementById("homeblock").style.visibility="hidden";
            document.getElementById("transaction").style.visibility="visible";
            document.getElementById("bankcard").style.visibility="hidden";
            document.getElementById("loan").style.visibility="hidden";
            document.getElementById("assistant").style.visibility="hidden";
            document.getElementById("crypto").style.visibility="hidden";
            document.getElementById("setting").style.visibility="hidden";
            document.getElementById("botinterface").style.visibility="hidden";
            document.getElementById("chatoptions").style.visibility="hidden";
            
            document.getElementById("imgtrans").style.backgroundColor = "yellow";
            document.getElementById("imghome").style.backgroundColor = "white";
            document.getElementById("imgcards").style.backgroundColor = "white";
            document.getElementById("imgloan").style.backgroundColor = "white";
            document.getElementById("imgcrypto").style.backgroundColor = "white";
            document.getElementById("imgassistant").style.backgroundColor = "white";
            document.getElementById("imgsettings").style.backgroundColor = "white";
            return;
        }
        for (let x = 0; x < utterances.length; x++) {
          for (let y = 0; y < utterances[x].length; y++) {
            if (utterances[x][y] === umessage) {
              items = answers[x];
              mess = items[Math.floor(Math.random() * items.length)];
            }
          }
        }

        if(items===""){
        items = answers[answers.length-1];
        mess = items[Math.floor(Math.random() * items.length)];
        }

        await sleep(1000);
        msg.text = mess;
        window.speechSynthesis.speak(msg);
        document.getElementById("messagearea").innerHTML += "<div id='botmessage'>"+mess+"</div><br/><br/><br/>";
        autoscroll();
    }




    function sendmess(){
        var umessage = document.getElementById("text").value;
        document.getElementById("messagearea").innerHTML += "<div id='usermessage'>"+umessage+"</div><br/><br/><br/>";
        document.getElementById("text").value="";
        autoscroll();
        umessage = umessage.replace("?","");
        umessage = umessage.replace("'","");
        botreact(umessage);
    }




    function mesback(){
        document.getElementById("botinterface").style.visibility="hidden";
        document.getElementById("chatoptions").style.visibility="visible";
    }




    async function newquery(){
        document.getElementById("messagearea").innerHTML = "";
        document.getElementById("botinterface").style.visibility="visible";
        document.getElementById("chatoptions").style.visibility="hidden";
        await sleep(500);
        document.getElementById("messagearea").innerHTML += "<div id='botmessage'>Hello there! What can I do for you?</div><br/><br/><br/>";
    }




    function resumequery(){
        document.getElementById("botinterface").style.visibility="visible";
        document.getElementById("chatoptions").style.visibility="hidden";
    }


    

    function recordvoice(){
    }




    return (
        <div>
            <div id="assistantblock">
                <div id='midcontent'>
                    <div id="chatoptions">
                        <button id="resumechat" onClick={resumequery}>
                            Resume Previous Query
                        </button> 
                        <button id="createtasks">
                            Create Task
                        </button><br/>
                        <button id="newquery" onClick={newquery}>
                            Start New Query
                        </button> 
                        
                        <button id="managetasks">
                            Manage Tasks
                        </button>

                        <p>*Your Banking Assisant is here! <br/>
                            It assists you in completing/scheduling tasks and answering questions.<br/><br/>
                            Eg: <br/>
                               - Can I purchase a burger?  <br/>
                               - How much additional money will I need to purchase a tesla car?  <br/>
                               - Notify me when the price of bitcoin reaches x <br/>
                               - Book Bahubali movie tickets at my local Inox
                        </p>
                    </div>
                </div>
                <div id="botinterface">
                    <div id="botheader">
                        <b> Banking Assisant </b>
                        <button id="botback" onClick={mesback}>Back</button>
                    </div>
                    <div id="messagearea"></div>
                    <div id="typemessage">
                        <form action="javascript:void(0);">
                        <span id="voicebutton" onClick={recordvoice}></span>
                        <input type="text" id="text" placeholder='Enter message' autoComplete='off' />
                        <button id="sendmessage" type="submit" onClick={sendmess}>Send</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Assistant;
