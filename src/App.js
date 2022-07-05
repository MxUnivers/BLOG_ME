
import './App.css';
import  {BrowserRouter , Routes ,Route} from  "react-router-dom"
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import CategoryArticle from './pages/CategoryArticle';
import Article from "./pages/Article";
import ListArticles from "./pages/ListArticles";
import Error404 from './pages/Error404';
import SignUp from './pages/SignUp';
import ActuVideos from './pages/ActuVideos';
import ListCategory from './pages/ListCategory';


function App() {
  return (
    <div className="dark:bg-gray-900 bg-gray-800" >
       <BrowserRouter>
           <Routes>
               {/* page d'accueil */}
               <Route path="/" element={<Home/>}  /> 
               <Route path="/contact" element={<ContactUs/>}  />   
               <Route path="/about" element={<AboutUs/>}  /> 
               <Route path="/category" element={<CategoryArticle/>}  /> 
               <Route  path="/list-cart" element ={<ListCategory/>} />
               <Route path="/article" element={<Article/>}  /> 
               <Route path="/more-articles" element={<ListArticles/>} />   
               <Route path="/actu" element={<ActuVideos/>} />
               <Route path="/join" element={<SignUp/>} />    
               <Route path="/*" element={<Error404/>} />   
                 
           </Routes>
       </BrowserRouter>        
    </div>
  );
}

export default App;
