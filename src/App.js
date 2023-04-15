import './App.css';
import Navbar from './components/Navbar';
import IMG_slider from './components/IMG_slider';
import brandSlider from './components/brandSlider';

function App() {
  const slides = [
    {url: 'https://picsum.photos/id/2/1000/500'},
    {url: 'https://picsum.photos/id/239/1000/500'},
    {url: 'https://picsum.photos/id/4/1000/500'}
]

const containerStyles = {
  width : '1200px',
  height: '500px',
  margin: '0 auto',
}
  return (
    <div className="App">
     <Navbar/>  
     <div style={containerStyles}>
    <IMG_slider slides={slides}/>
    <brandSlider/>
     </div>

    </div>
  );
}

export default App;
