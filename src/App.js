import TopBar from './components/TopBar'
import Background from './components/Background'
import StoreListings from './components/StoreListings'

function App() {
  return (
    <div style={{ maxWidth: '100%', margin: '0 auto', padding: '20px 0' }}>
      <TopBar />
      <Background />
      <StoreListings />
    </div>
  );
}

export default App;


