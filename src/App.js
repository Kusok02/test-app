import './App.css'
// import {Route} from "react-router-dom";
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Content} from "./Components/Content/Content";

const App = (props) => {
    return (
        <div className="app_wrapper">
            <Header />

            <Navbar />

            <Content />

            {/*<Route path="/" render={() => <MainPage/>}/>*/}
        </div>
    )
}

export default App
