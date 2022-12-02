import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Customer from "./pages/Customer";
import NoMatch from "./pages/NoMatch";

function App() {
    return (
        <div className="">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/customer" element={<Customer/>}/>
                <Route path="*" element={<NoMatch/>} />
            </Routes>
        </div>
    );
}

export default App;
