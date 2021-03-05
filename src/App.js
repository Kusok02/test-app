import './App.css'
import {Header} from "./Components/Header/Header";
import {Content} from "./Components/Content/Content";

const App = (props) => {

    return (
        <div className="app_wrapper">

            <Header/>

            <Content/>

        </div>
    )

}

export default App
