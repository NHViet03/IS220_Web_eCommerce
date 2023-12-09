import '../../styles/tailwind-style.css';
import '../../styles/account.css';
import React from 'react';
import Profile from './profile';
import Sidebar from '../../components/MyAccount/Sidebar';

function AccountPage() {
    return (
        <div>
            <div className='wrapbox-content-account'>
                <div className='container-fluid max-w-screen-xl mx-auto px-2.5 pt-4 pb-2.5 pt-0 w-full block'>
                    <div className='row -mr-2 -ml-2 flex flex-wrap border-box text-left'>
                        <Sidebar activePage="profile"/>
                        <div className='order-2 mb-6 px-2 grow-0 shrink-0 w-3/4 relative p-0 box-border block text-left colright'>
                            <div className='right-main tab-content-container h-full m-0 p-0 text-left bg-white rounded box-border block'>
                                <Profile/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountPage;