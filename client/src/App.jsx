import './App.css';
import ViewAll from './components/ViewAll';
import {Routes, Route, Link} from 'react-router-dom'
import AddForm from './components/AddForm.jsx';
import UpdateForm from './components/UpdateForm';
import ViewOne from './components/ViewOne';

function App() {
  return (
    <div className="App">
     <h2> <Link to={'/'}> Full Stack Demo </Link> | <Link to={'/add'}>Add A Game</Link></h2>
     <Routes>
      <Route path='/' element={<ViewAll />} />
      <Route path='/add' element={<AddForm/>} />
      <Route path='/update' element={<UpdateForm/>} />
      <Route path='/game/:_id' element={<ViewOne/>} />
     </Routes>
    </div>
  );
}

export default App;
