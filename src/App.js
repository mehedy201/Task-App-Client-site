import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllTask from './Pages/AllTask/AllTask';
import CompletedTask from './Pages/CompletedTask/CompletedTask';
import NewTask from './Pages/NewTask/NewTask';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className='xl:max-w-[1140px] lg:max-w-[90%] md:max-w-[90%] sm:max-w-[90%] w-[95%] mx-auto'>
      <Header></Header>
        <Routes>
          <Route path='/' element={<AllTask/>}></Route>
          <Route path='/all-task' element={<AllTask/>}></Route>
          <Route path='/new_task' element={<NewTask/>}></Route>
          <Route path='/completed-task' element={<CompletedTask/>}></Route>
        </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
