import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';
import Login from './components/Login';
import { useStateValue } from './components/StateProvider';

function App() {
  // const user = null;
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className='app_body'>
            {/* sidebar */}
            <Sidebar />
            {/* feed y3ne bel nos*/}
            <Feed />

            {/* widget */}
            <Widgets />
          </div>
        </>
      )}

    </div>
  );
}

export default App;
