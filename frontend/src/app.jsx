import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./component/HomePage.jsx";

// import CreateFoodPage from "./pages/CreateFoodPage.jsx";
// import UpdateFoodPage from "./pages/UpdateFoodPage.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                {/* <Route path="/create" element={<CreateFoodPage/>}/>
                <Route path="/update/:id" element={<UpdateFoodPage/>}/> */}
            </Routes>
        </BrowserRouter>
    );
};

export default App;