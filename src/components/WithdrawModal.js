import React from 'react'
import ReactDOM from 'react-dom'

function WidthrawalModal( {closeWithdrawModal}) {
    return ReactDOM.createPortal(
        <div className="modalBackGround">
            <div className="modalContainer">
                <div className="title">
                    <h1>Widthraw</h1>
                </div>
                <div className="body">
                    <input type="text"placeholder="Withdraw Amount"/>
                </div>
                <div className="footer">
                    <button onClick ={()=>closeWithdrawModal(false)}>Cancel</button>
                    <button>Continue</button>
                </div>
            </div>
        </div>,
        document.getElementById('portal')
    )
}

export default WidthrawalModal
