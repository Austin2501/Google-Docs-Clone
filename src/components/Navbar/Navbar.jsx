import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { copyURLToClipboard } from '../../utils/plugins'
function Navbar() {
    // state for saving document name, favourite status, and sharing status
    const [pageData, setData] = useState({
        docName: 'Untitled document',
        isSharing: false,
        isFavourite: false
    })

    // When User Enter Document Name Empty, Set to Untitled document after 1s
    useEffect(e => {
        var newTimeout;
        if (pageData.docName === '') {
            newTimeout = setTimeout(() => {
                setData({ ...pageData, docName: 'Untitled document' })
            }, 1000)
        }


        // clears timeout if user enters data
        return () => clearTimeout(newTimeout)
        
        //eslint-disable-next-line
    }, [pageData.docName])


    return (
        <div className='infobar'>
            <div id='navbar-left'>
                <img
                    alt='smdkms'
                    src='https://cdn-icons-png.flaticon.com/512/5968/5968517.png'
                    width={35} height={35} />

                <div>
                    <div>
                        <input
                            value={pageData.docName}
                            onChange={(e) => setData({ docName: e.target.value })} />
                        <i
                            onClick={() => setData({
                                ...pageData,
                                isFavourite: !pageData.isFavourite
                            })}
                            className={
                                `${(pageData.isFavourite)
                                    ? 'fa favourited'
                                    : 'fa-regular'} fa-star`} />
                    </div>
                    <div>
                        <div>
                            <a href='#abc'>File</a>
                            <a href='#abc'>Edit</a>
                            <a href='#abc'>View</a>
                            <a href='#abc'>Insert</a>
                            <a href='#abc'>Format</a>
                            <a href='#abc'>Tools</a>
                            <a href='#abc'>Extension</a>
                            <a href='#abc'>Help</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id='navbar-right'>
                <i className='fa-regular fa fa-clock'></i>
                <i className='fa-regular fa fa-message'></i>
                <i className=' fa fa-camera'></i>
                <button
                    className='share-btn'
                    onClick={() => {
                        if (pageData.isSharing === false) {
                            copyURLToClipboard()
                            setData({ ...pageData, isSharing: true })
                        }
                    }}>
                    {(pageData.isSharing)
                        ? <div>
                            <i
                                title='Link Copied to Clipboard'
                                className=' fa fa-unlock mr-2' />
                            Sharing
                        </div>
                        : <div>
                            <i
                                title='Click to Share Document'
                                className='fa fa-lock mr-2' />
                            Share
                        </div>}

                </button>
            </div>
        </div >
    )
}

export default Navbar