import './App.css';
import {Footer, NavBar, Services, Transactions, Welcome} from './Components';

function App() {
  return (
    <div>
      <div className=''>
        <div className='gradient-bg-welcome'>
          <NavBar/>
          <Welcome/>
        </div>
      </div>
      <Services/>
      <Transactions/>
      <Footer/>
    </div>
  );
}

export default App;
