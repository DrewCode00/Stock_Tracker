import './App.css';

const stocks = ['GOOG' , 'AAPL', 'FB', 'AMZN', 'NFLX']
function App() {
  return (
    <div className="App">
      <h1> STOCK TRACKER</h1>
      <div className='stocks'>
      {/*{stocks.map(stock => <StockContainer key={stock} stock={stock} />)} */}
        </div>    
      </div>
  );
}

export default App;
