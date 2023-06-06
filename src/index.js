import React from "react"
import ReactDOM from "react-dom/client"
import {BrowserRouter} from "react-router-dom";
import App from "./App"
import "./index.css"
import "./animations.css"


// ReactDOM.render(<App/>, document.querySelector("#root"))
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
)