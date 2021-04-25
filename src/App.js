import './App.css';
import './normalize.css';
import Data from './data.json';

function App() {
  return (
    <div className="App">
      <div>
        <div className="main">
          { Data.map(post => {
            return(
              <div key={post.header} className="data">
              <h2 className="header">{ post.header }</h2>
              <ul className="options">
                <li>{ post.options[0] }</li>
                <li>{ post.options[1] }</li>
                <li>{ post.options[2] }</li>
                <li>{ post.options[3] }</li>
                <li>{ post.options[4] }</li>
              </ul>
              <p className="text">{ post.text }</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
