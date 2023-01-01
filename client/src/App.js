import './App.css';
import {Footer, Loader, NavBar, Services, Transactions, Welcome} from './Components';

function App() {
  return (
    <div>
      <div className='min-h-screen'>
        <div className='gradient-bg-welcome'>
          <NavBar/>
          <Welcome/>
        </div>
      </div>
      <Services/>
      <Transactions/>
      <Footer/>
      <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
    </div>
  );
}

export default App;
