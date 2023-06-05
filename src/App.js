import Nav from './components/Nav';
import Card from './components/Card';
import data from './data';

function App() {
  const cardData = data.map(card => {
    return <Card items={card} key={card.id} />
  })

  return (
    <div className="App">
       <Nav />
       <div className="card--container">
        {cardData}
       </div>
    </div>
  )
}

export default App;
