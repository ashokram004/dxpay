import './Loans.css';

function Loans() {
    return (
        <div>
            <div id="loanblock">
                <div id='midcontent'>
                    <div id="loanoptions">
                        <button id="applyloan">
                            Apply for loan
                        </button> 
                        <button id="pending">
                            Pending Approvals
                        </button><br/>
                        <button id="newchat">
                            Pay outstanding
                        </button> 
                        
                        <button id="prevloans">
                            Loan History
                        </button>

                        <p>*Repay the amount on time to protect your credit score!
                            
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loans;
