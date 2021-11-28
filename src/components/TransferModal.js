import React from 'react'
import ReactDOM from 'react-dom'

function TransferModal({closeTransferModal}) {
    return ReactDOM.createPortal(
        <div className="modalBackGround">
            <div className="modalContainer">
                <div className="title">
                    <h1>Transfer</h1>
                </div>
                <div className="body">
                    <input type="text"placeholder="Transfer Amount"/>
                </div>
                <div className="footer">
                    <button onClick ={()=>closeTransferModal(false)}>Cancel</button>
                    <button>Continue</button>
                </div>
            </div>
        </div>,
        document.getElementById('portal')
    )
}

export default TransferModal
