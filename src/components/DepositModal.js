import React from 'react'
import ReactDOM from 'react-dom'

function DepositModal({closeDepositModal}) {
    return ReactDOM.createPortal(
        <div className="modalBackGround">
            <div className="modalContainer glass card">
                <div className="title">
                    <h1>Deposit</h1>
                </div>
                <div className="body">
                    <input type="number" min="0" placeholder="Deposit Amount"/>
                </div>
                <div className="footer">
                    <button className="btn-blue" onClick ={()=>closeDepositModal(false)}>Cancel</button>
                    <button className="btn-blue">Continue</button>
                </div>
            </div>
        </div>,
        document.getElementById('portal')
    )
}

export default DepositModal
