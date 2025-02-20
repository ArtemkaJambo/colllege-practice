import MyClassComponent from "./MyClassComponent";
import MyFunctionComponent from "./MyFunctionComponent";
import axios from 'axios'

function App() {

    const getUser = async () => {
        const response = await axios.get('http://localhost:3000')
        
    }
    
    return (
      <div>
        <h1>Мій власний заголовок</h1>
        <p>Ласкаво просимо до мого React-проєкту!</p>
        <MyFunctionComponent></MyFunctionComponent>
        <MyClassComponent></MyClassComponent>
      </div>
    );
  }
  export default App;
  