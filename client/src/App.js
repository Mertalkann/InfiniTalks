import './App.css';
import Post from './post';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { UserContextProvider } from './UserContext';
import CreatePost from './pages/CreatePost';
import PostPage from './pages/PostPage';
import EditPost from './pages/EditPost';

function App() {
  return (
    <UserContextProvider>
      <Routes> // Sayfa yönlendirmelerini tanımlamak için kullanılır//
        <Route path="/"element={<Layout/>}> //Ana yolu temsil eder ve Layout bileşenini render eder.//
          <Route index element={<IndexPage/>}/> Ana yolu temsil eden sayfa içerisindeki varsayılan (index) sayfa
          <Route path='/login' element={<LoginPage/>}/>//login" yolu için LoginPage bileşenini render eder.
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/create' element={<CreatePost/>}/>
          <Route path='/post/:id' element={<PostPage/>}/>//:id, dinamik bir parametreyi temsil eder.
          <Route path='/edit/:id' element={<EditPost/>}/>
        </Route>       
      </Routes>
    </UserContextProvider> 
  );
}

export default App;
