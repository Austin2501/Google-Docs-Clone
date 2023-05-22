import React, { useState } from 'react'
import './Toolbar.css'
function Toolbar({ value, onFontSizeChange }) {

    // state for storing which icons are selected
    const [selected, setSelected] = useState([])

    // function to select/unselect icons using filter
    const handleClick = (id) => {
        if (selected.includes(id)) {
            var b = selected.filter(e => e !== id)
            setSelected(b)
        } else {
            setSelected(old => [...old, id])
        }
    }
    
    return (
        <div className='toolbar'>
            <div className='toolbar-start'>
                <div className='tool-left'>
                    <i onClick={() => handleClick('1')} className={`${selected.includes('1') ? 'selected-icon' : ''} fa fa-undo`}></i>
                    <i onClick={() => handleClick('2')} className={`${selected.includes('2') ? 'selected-icon' : ''} fa fa-redo`}></i>
                    <i className={`fa fa-print`} onClick={() => window.print()}></i>
                    <i onClick={() => handleClick('4')} className={`${selected.includes('4') ? 'selected-icon' : ''} fa fa-spell-check`}></i>
                    <i onClick={() => handleClick('5')} className={`${selected.includes('5') ? 'selected-icon' : ''} fa fa-paint-roller`}></i>
                </div>
                <div className='toolbar-drop'>
                    <select>
                        <option value={'0%'}>0%</option>
                        <option value={'25%'}>25%</option>
                        <option value={'50%'}>50%</option>
                        <option value={'75%'}>75%</option>
                        <option selected value={'100%'}>100%</option>
                    </select>
                </div>
                <div className='toolbar-break'></div>
                <div className='toolbar-drop'>
                    <select>
                        <option selected value={'0%'}>Normal Text</option>
                        <option value={'25%'}>Heading 1</option>
                        <option value={'50%'}>Heading 2</option>
                        <option value={'75%'}>Heading 3</option>
                        <option value={'100%'}>Paragraph</option>
                    </select>
                </div>
                <div className='toolbar-break'></div>
                <div className='toolbar-drop'>
                    <select>
                        <option value={'0%'}>Georgia</option>
                        <option value={'25%'}>Lucid Sans</option>
                        <option value={'50%'}>Poppins</option>
                        <option value={'75%'}>Monsterrat</option>
                        <option selected value={'100%'}>Arial</option>
                    </select>
                </div>
                <div className='toolbar-break'></div>
                <div className='tool-font-size'>
                    <i className={`${selected.includes('6') ? 'selected-icon' : ''} fa fa-minus`} onClick={() => onFontSizeChange(value - 1)}></i>
                    <div>{value}</div>
                    <i className={`${selected.includes('7') ? 'selected-icon' : ''} fa fa-plus`} onClick={() => onFontSizeChange(value + 1)}></i>
                </div>
                <div className='toolbar-break'></div>
                <div className='tool-left'>
                    <i onClick={() => handleClick('8')} className={`${selected.includes('8') ? 'selected-icon' : ''} fa fa-bold`}></i>
                    <i onClick={() => handleClick('9')} className={`${selected.includes('9') ? 'selected-icon' : ''} fa fa-italic`}></i>
                    <i onClick={() => handleClick('10')} className={`${selected.includes('10') ? 'selected-icon' : ''} fa fa-underline`}></i>
                    <div style={{
                        textAlign: 'center'
                    }}>
                        A
                        <div style={{
                            height: 5,
                            width: 30,
                            backgroundColor: 'black'
                        }}></div>
                    </div>
                    <i onClick={() => handleClick('11')} className={`${selected.includes('11') ? 'selected-icon' : ''} fa fa-pencil`}></i>
                    <div className='toolbar-break'></div>
                    <i onClick={() => handleClick('12')} className={`${selected.includes('12') ? 'selected-icon' : ''} fa fa-link`}></i>
                    <i onClick={() => handleClick('13')} className={`${selected.includes('13') ? 'selected-icon' : ''} fa fa-regular fa-message`}></i>
                    <i onClick={() => handleClick('14')} className={`${selected.includes('14') ? 'selected-icon' : ''} fa fa-image`}></i>
                    <div className='toolbar-break'></div>
                    <i onClick={() => handleClick('15')} className={`${selected.includes('15') ? 'selected-icon' : ''} fa fa-align-right`}></i>
                    <i onClick={() => handleClick('16')} className={`${selected.includes('16') ? 'selected-icon' : ''} fa fa-text-height`}></i>
                    <i onClick={() => handleClick('17')} className={`${selected.includes('17') ? 'selected-icon' : ''} fa fa-ellipsis-v`}></i>
                </div>
            </div>

            <div className='toolbar-end'>
                <div className='tool-left'>
                    <i onClick={() => handleClick('18')} className={`${selected.includes('18') ? 'selected-icon' : ''} fa fa-pencil`}></i>
                    <i onClick={() => handleClick('19')} className={`${selected.includes('19') ? 'selected-icon' : ''} fa fa-angle-up`}></i>
                </div>
            </div>

        </div>
    )
}

export default Toolbar