import { Routes ,Route ,HashRouter} from 'react-router-dom';
import Home from 'screens/Home/Home';

function App() {

  return (
    <div>
      <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
