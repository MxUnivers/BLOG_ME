
import './App.css';
import  {BrowserRouter , Routes ,Route} from  "react-router-dom"
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Category from './pages/Category';
import Article from "./pages/Article";
import ListArticles from "./pages/ListArticles";


function App() {
  return (
    <div >
       <BrowserRouter>
           <Routes>
               {/* page d'accueil */}
               <Route path="/" element={<Home/>}  /> 
               <Route path="/contact" element={<ContactUs/>}  />   
               <Route path="/about" element={<AboutUs/>}  /> 
               <Route path="/category" element={<Category/>}  /> 
               <Route path="/article" element={<Article/>}  /> 
               <Route path="/more-articles" element={<ListArticles/>} />       
               <Route path='="*' element={<div>Page not found</div>} />   
                 
           </Routes>
       </BrowserRouter>        
    </div>
  );
}

export default App;
