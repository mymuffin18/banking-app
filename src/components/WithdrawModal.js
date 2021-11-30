import React from 'react'
import ReactDOM from 'react-dom'

function WidthrawalModal( {closeWithdrawModal}) {
    return ReactDOM.createPortal(
        <div className="modalBackGround">
            <div className="modalContainer glass card">
                <div className="title">
                    <h1>Withdraw</h1>
                </div>
                <div className="body">
                    <input type="number" min="0" placeholder="Withdraw Amount"/>
                </div>
                <div className="footer">
                    <button className="btn-blue" onClick ={()=>closeWithdrawModal(false)}>Cancel</button>
                    <button className="btn-blue">Continue</button>
                </div>
            </div>
        </div>,
        document.getElementById('portal')
    )
}

export default WidthrawalModal
