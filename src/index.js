import React from "react"
import ReactDOM from "react-dom"
import {HashRouter} from "react-router-dom";
import App from "./App"
import "./index.css"
import "./animations.css"


// ReactDOM.render(<App/>, document.querySelector("#root"))
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <HashRouter>
            <App/>
        </HashRouter>
    </React.StrictMode>
)