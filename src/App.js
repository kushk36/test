import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import feedbackData from './data/feedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import Post from './components/Post';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  // const [feedback, setfeedback] = useState(feedbackData)

  // const addFeedback = (newFeedback) => {
  //   newFeedback.id = uuidv4()
  //   console.log(newFeedback);
  //   setfeedback([newFeedback, ...feedback])
  // }
  // const deleteFeedback = (id) => {
  //   if (window.confirm('Are You Sure!!')) {
  //     setfeedback(feedback.filter(item => item.id !== id))
  //   }
  // }
  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Header />
        <div className='container'>
          <Routes>
            <Route exact path='/' element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
              </>
            }>

            </Route>
            <Route path='/about' element={<AboutPage />}></Route>
            <Route path='/post/*' element={<Post />}></Route>
          </Routes>
        </div>
        <AboutIconLink />
      </BrowserRouter>
    </FeedbackProvider>
  );
}

export default App;
