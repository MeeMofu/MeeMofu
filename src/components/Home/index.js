import React from 'react';

function Home({width, height}) {
    return(
        <div className={"home-section text-center d-flex align-items-center justify-content-center"} style={{minHeight:550,height:height,fontFamily: "Consolas, monaco, monospace",color:'white'}}>
            <div >
                <div style={(width>1000)?
                    {fontSize:"50px"}:
                    {fontSize:"7vw"}}>
                        Please to meet you, I am
                </div>
                <div style ={(width>1000)?
                    {fontSize:"110px",color:' var(--text)', fontWeight:'bold'}:
                    {fontSize:"12vw",color:' var(--text)', fontWeight:'bold'}} 
                    className={'p-3'}>Vinh Tran</div>
                <div style={(width>1000)?
                    {fontSize:"40px"}:
                    {fontSize:"5.5vw"}}
                    >Electrical Engineer {'&'} full stack web developer</div>
            </div>
        </div>
    )
}

export default Home;