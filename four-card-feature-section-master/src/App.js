import Cards from "./components/Cards";
import Header from "./components/Header";
import React from "react";
import cal from "./images/icon-calculator.svg";
import supervisor from "./images/icon-supervisor.svg"
import karma from "./images/icon-karma.svg"
import build from "./images/icon-team-builder.svg"
function App() {
  return (
    <div className="App">
        <Header />
        <div className="card-layout">
            <Cards push={true} title="Supervisor" desc="Monitors activity to identify project roadblocks" icon={supervisor} style={{ borderTop: '3px solid hsl(180, 62%, 55%)'}}/>          
            <Cards push={false} title="Team Builder" desc="Scans our talent network to create the optimal team for your project" icon={build} style={{ borderTop: '3px solid hsl(0, 78%, 62%)' }}/>                          
            <Cards push={true} title="Calculator" desc="Uses data from past projects to provide better delivery estimates" icon={cal} style={{ borderTop: '3px solid hsl(212, 86%, 64%)' }}/>
            <Cards push = {false} title="Karma" desc="Regularly evaluates our talent to ensure quality" icon={karma} style={{ borderTop: '3px solid hsl(34, 97%, 64%)' }}/>
        </div>
        
    </div>
  )
}

export default App;













