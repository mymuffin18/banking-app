import React from 'react'
import ReactDOM from 'react-dom'

function DepositModal({closeDepositModal}) {
    return ReactDOM.createPortal(
        <div className="modalBackGround">
            <div className="modalContainer">
                <div className="title">
                    <h1>Deposit</h1>
                </div>
                <div className="body">
                    <input type="text"placeholder="Deposit Amount"/>
                </div>
                <div className="footer">
                    <button onClick ={()=>closeDepositModal(false)}>Cancel</button>
                    <button>Continue</button>
                </div>
            </div>
        </div>,
        document.getElementById('portal')
    )
}

export default DepositModal
