import React from 'react';
import NavBar from './nav/index';
import Content from './content/index';
import Footer from './footer/index';
 
function Overview() {

    return(
        
        <div className="App">
            <div>
                <NavBar/>            
            </div>
            <div>
                <p>
                    <Content/>
                </p>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )

}

export default Overview;