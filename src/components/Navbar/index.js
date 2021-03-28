import React from 'react';
import TabBtn from './TabButton';

function Nav(props) {
    const {tabs =[], setVisible, currentTab, setTab} = props;

    return (
        <nav className="row no-gutters col-12 header">
            <h1 className="col-12 pb-2 pl-4 pt-3 m-0 text text-center text-sm-left" style={{ fontSize: "3rem", }}>Vinh Tran</h1>
            <div className="col-12 pb-2 btn-group  d-flex justify-content-center justify-content-sm-end" >
                {tabs.map((tab)=>(
                    <TabBtn setVisible={setVisible} thisTab= {tab} currentTab={currentTab} setTab={setTab}
                    key ={tab.name} />
                ))}
            </div>
        </nav>
    )
}

export default Nav;