import React from "react";
import ReactDOM from "react-dom/client"
import Body from "./componnet/Body";
import Header from "./componnet/Header";

const Body = (props) => {
      
    return (
        <>
            <div className="p-5 gap-6 flex flex-wrap overflow-hidden ">
                {
                    resobj.map((list) => < Restaurantcard key={list.info.id} resdata={list}/>)
                }
            </div>
        </>
    )
}

const App = () => {
    return (
        <>
            <Header />
            <Body />
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)