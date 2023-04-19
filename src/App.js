import './App.css';
import Navbar from './components/Navbar';
import IMG_slider from './components/IMG_slider';
import BrandSlider from './components/BrandSlider';
import About from './components/About';
import Services from './components/Services';
import OurServices from './components/OurServices';

function App() {
  const slides = [
    {url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'},
    {url: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'},
    {url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'}
]

const containerStyles = {
  width : '102%',
  height: '580px',
  margin: '0 auto',
}
  return (
    <div className="App">
     <Navbar/>  
     <div style={containerStyles}>
    <IMG_slider slides={slides}/>
     </div>

     <BrandSlider/>
     <About/>
     <Services/>
     <OurServices/>
    </div>
  );
}

export default App;
