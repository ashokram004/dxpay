import './Profile.css';

function Profile() {
    function hideprof(){
        document.getElementById("profileblock").style.visibility="hidden";
    
    }
    
    return (
        <div>
            <div id="profilepage">
                <div id='tempprof'>
                    
                <div id="divActivites" name="divActivites">
                    <img src={require('./images/profile.png')} id="proimg"  alt=''/>
                    <br/>
                    <br/><label id="prolabel" ><b>My Profile</b></label>
                    <table id="tab22">
                        <tr><td>NAME</td><td id="td1">:</td><td id="piname" className="td2">AAAAAAAA</td></tr>
                        <tr><td>PHONE  </td><td>  :</td><td id="piphone" className="td2">564654668930</td></tr>
                        <tr><td>MAIL</td><td id="td1">:</td><td id="pimail" className="td2">AAAAAAAA@gmail.com</td></tr>
                        <tr><td>UPI ID</td><td id="td1">:</td><td id="piid" className="td2">AAAAAAAA@oksbi</td></tr>
                    </table>
                    <button id='edit' style={{marginLeft:'150px',marginTop:'5px'}}>Edit</button>
                </div> 
                <div id="profinfo">
                    <div id='acc'>
                        <br/><label id="label"><b> &nbsp;My DXPay Account</b></label>
                        <hr/>
                        <table id="shorttable">
                            <tr><td>ACCOUNTS</td><td><button id="acctd">SHOW ALL</button></td></tr>
                            <tr><td>BLOCKED ACCOUNTS</td><td><button id="acctd">SHOW ALL</button></td></tr>
                        </table>
                    </div>
                    <br/>
                    <div id='pay'> 
                        <br/><label id="label"><b> &nbsp; My Bills</b></label>
                        <hr/>
                        <table id="shorttable">
                            <tr><td><img src={require('./images/red.png')} id="light" alt=''/></td><td>Phone Bill</td><td><button id='billtd' >Pay</button></td></tr>
                            <tr><td><img src={require('./images/red.png')} id="light" alt=''/></td><td>Internet Bill</td><td><button id='billtd'>Pay</button></td></tr>
                            <tr><td><img src={require('./images/green.jpeg')} id="light" alt=''/></td><td>Income tax Bill</td><td><button id='billtd'>Details</button></td></tr>
                        </table>
                    </div>
                </div>
                <br/>
                <button id="profbackbt" onClick={hideprof}>Back</button>
                </div>

            </div>
        </div>
    )
}

export default Profile;