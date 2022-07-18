import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import NavHeader from './NavHeader';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Concept from './Concept';
import Story from './Story';
import News from './News';
import News1 from './News1';
import News2 from './News2';
import Forum from './Forum';
import Post from './Post';
import UserPost from './UserPost';
import Profile from './Profile';
import SignUp from './SignUp';
import Login from './Login';
import HomeJP from './HomeJP';
import NavHeaderJP from './NavHeaderJP';
import ConceptJP from './ConceptJP';
import StoryJP from './StoryJP';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route extact path="/home" element={<NavHeader />}></Route>
          <Route extact path="/Project2final" element={<NavHeader />}></Route>
          <Route extact path="/concept" element={<NavHeader />}></Route>
          <Route extact path="/story" element={<NavHeader />}></Route>
          <Route extact path="/news" element={<NavHeader />}></Route>
          <Route extact path="/news/news1" element={<NavHeader />}></Route>
          <Route extact path="/news/news2" element={<NavHeader />}></Route>
          <Route extact path="/forum/post" element={<NavHeader />}></Route>
          <Route extact path="/forum/userpost" element={<NavHeader />}></Route>
          <Route extact path="/forum" element={<NavHeader />}></Route>
          <Route extact path="/profile" element={<NavHeader />}></Route>
          <Route extact path="/login" element={<NavHeader />}></Route>
          <Route extact path="/signup" element={<NavHeader />}></Route>
        </Routes>
        <Routes>
          <Route extact path="/homeJP" element={<NavHeaderJP />}></Route>
          <Route extact path="/conceptJP" element={<NavHeaderJP />}></Route>
          <Route extact path="/storyJP" element={<NavHeaderJP />}></Route>

        </Routes>
        <div className='content'>
          <Routes>
            <Route extact path="/Project2final" element={<Home />}></Route>
            <Route extact path="/home" element={<Home />}></Route>
            <Route extact path="/homeJP" element={<HomeJP />}></Route>
            <Route extact path="/concept" element={<Concept />}></Route>
            <Route extact path="/conceptJP" element={<ConceptJP />}></Route>
            <Route extact path="/story" element={<Story />}></Route>
            <Route extact path="/storyJP" element={<StoryJP />}></Route>
            <Route extact path="/news" element={<News />}></Route>
            <Route extact path="/news/news1" element={<News1 />}></Route>
            <Route extact path="/news/news2" element={<News2 />}></Route>
            <Route extact path="/forum/post" element={<Post />}></Route>
            <Route extact path="/forum/userpost" element={<UserPost />}></Route>
            <Route extact path="/forum" element={<Forum />}></Route>
            <Route extact path="/profile" element={<Profile />}></Route>
            <Route extact path="/login" element={<Login />}></Route>
            <Route extact path="/signup" element={<SignUp />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
