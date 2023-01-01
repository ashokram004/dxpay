import './Cards.css';

function Cards() {
    function funadd(){
        document.getElementById("addform").style.visibility = "visible";

    }
    function cardaddfun(){
        var sname = document.getElementById("iname").value;
        var snum = document.getElementById("inum").value;
        var sn1 = snum.slice(0,4);
        var sn2 = snum.slice(4,8);
        var sn3 = snum.slice(8,12);
        var sdate = document.getElementById("idate").value;
        document.getElementById("topcards").innerHTML += "<div class='atmcard'><h1>DXPay</h1><h2 id='acno'>"+sn1+" "+sn2+" "+sn3+"</h2><h2 id='date'>"+sdate+"</h2><h2 id='acname'>"+sname+"</h2></div>";
        document.getElementById("addform").style.visibility = "hidden";
        document.getElementById("iname").value="";
        document.getElementById("inum").value="";
        document.getElementById("idate").value="";
    }
    function cardbackfun(){
        document.getElementById("addform").style.visibility = "hidden";
        document.getElementById("iname").value="";
        document.getElementById("inum").value="";
        document.getElementById("idate").value="";
    }
    return (
        <div>
            <div id="cardsblock">
                <div id='midcontent'>
                    <div id="topcards">
                        <div class="atmcard">

                            <h1>DXPay</h1>
                            <h2 id="acno">2341 2342 1234</h2>
                            <h2 id="date">02/26</h2>
                            <h2 id="acname">John Cena</h2>
                        </div>
                    </div>
                    <div id="addform">
                        <input id="iname" type="text" placeholder='Enter CardHolder Name'/>
                        <input id="inum" type="number" placeholder='Enter Card Number' maxLength={12}/>
                        <input id="idate" type="text" placeholder='Enter Expiry Date (MM/YY)'/>
                        <button type = "submit" id="cadd" onClick={cardaddfun}>ADD</button>
                        <button type = "clear" id="cback" onClick={cardbackfun}>CANCEL</button>
                    </div>
                    <div id="bottomcards">
                        <div id="addcard">
                            <div id="imgadd" onClick={funadd}></div>
                            <h3> Add New Card </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Cards; 
