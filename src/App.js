// import logo from './logo.svg';
import React, { useState } from 'react'
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

function App() {

  const [progress, setProgress] = useState(0);

  const Apikey ="d086006cb1064ff5bbeb238f2bba7357";
  const pageSize = 8;
  const Language = "en";
  const Country = "in";

  return (
    <Router>
      <div className="App">
          <LoadingBar
            color='#f11946'
            height={3}
            progress={progress}
            loaderSpeed={1000}
          />
          <Navbar />
          <Switch>
            <Route exact path="/business"> <News setProgress={setProgress} Apikey={Apikey} key="business" Country={Country} Category="business" Language={Language} pageSize={pageSize}/> </Route>
            <Route exact path="/entertainment"> <News setProgress={setProgress} Apikey={Apikey} key="entertainment" Country={Country} Category="entertainment" Language={Language} pageSize={pageSize}/> </Route>
            <Route exact path="/"> <News setProgress={setProgress} Apikey={Apikey} key="general" Country={Country} Category="general" Language={Language} pageSize={pageSize}/> </Route>
            <Route exact path="/health"> <News setProgress={setProgress} Apikey={Apikey} key="health" Country={Country} Category="health" Language={Language} pageSize={pageSize}/> </Route>
            <Route exact path="/science"> <News setProgress={setProgress} Apikey={Apikey} key="science" Country={Country} Category="science" Language={Language} pageSize={pageSize}/> </Route>
            <Route exact path="/sports"> <News setProgress={setProgress} Apikey={Apikey} key="sports" Country={Country} Category="sports" Language={Language} pageSize={pageSize}/> </Route>
            <Route exact path="/technology"> <News setProgress={setProgress} Apikey={Apikey} key="technology" Country={Country} Category="technology" Language={Language} pageSize={pageSize}/> </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
