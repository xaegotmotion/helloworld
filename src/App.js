import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import ToDo from './components/to-do';
import Home from './components/home';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Home/>}></Route>
          <Route path='/todo' element={<ToDo/>}></Route>
          <Route path='*' element={<Home/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
