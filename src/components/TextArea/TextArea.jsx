import React from 'react'
import './TextArea.css'
function TextArea({ fontSize }) {
    // fontSize for textarea is coming dynamically from props
    return (
        <div className='textarea-contain'>
            <div className='textarea-box' id="printableArea">
                <textarea placeholder='Type @ to insert' style={{
                    height: '300vh',
                    fontSize: fontSize
                }}></textarea>
            </div>
        </div>
    )
}

export default TextArea