import React from "react";
import {HashRouter, Route} from "react-router-dom";
import About from "./routes/About"
import Home from "./routes/Home"
import Detail from "./routes/Detail"
import Navigation from "./components/Navigation";

function App3(){
    return (
        <HashRouter>
            <Navigation/>
            <Route path="/" exact={true} component={Home}></Route>
            <Route path="/about" component={About}/>
            {/* <Route path="/movie-detail" component={Detail}/> */}
            <Route path="/movie/:id" component={Detail}/>
        </HashRouter>
    );
}

export default App3;