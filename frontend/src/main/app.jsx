import React from 'react';
import '../common/template/dependencies'
import Header from '../common/template/header'
import Sidebar from '../common/template/sidebar'
import Footer from '../common/template/footer'

export default props => {
  return (
    <div className="wrapper">
       <Header/>
       <Sidebar/>
       <div className='content-wrapper'>
            <h2>Conteudo</h2>
       </div>
       <Footer/>
    </div>
  );
}
