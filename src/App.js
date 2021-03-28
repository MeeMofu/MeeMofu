import './App.css';
import React, {useEffect, useState} from 'react';
import Nav from './components/Navbar';
import Content from './components/PageContent';
import Footer from './components/Footer';

function App() {
  const [tabs] = useState([
    {name: 'About'},
    {name: 'Portfolio'},
    {name: 'Contact'},
    {name: 'Resume'}
  ])

  const [tab, setTab] = useState(tabs[0]);
  // State of the current display tab
  
  const [viewTab,setVisible] = useState(true);
  // State to toggle the visibility of the content of the page
  // Animated CSS package will animate as this state toggle

  useEffect(()=>{
    document.title = tab.name;
    setVisible(true);
  },[tab]);
  
  return (
    <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>
    <div className="App-header" >

      <Nav tabs ={tabs} setVisible={setVisible} currentTab={tab} setTab={setTab}/>
      <Content viewTab ={viewTab} currentTab={tab}/>
    </div>
      <Footer style={{position:'fixed',left: '0', bottom:'0'}}/>
  
    </>
  );
}

export default App;
