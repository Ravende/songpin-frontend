import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//import Main from "./pages/IntroducePage/Main";
import HomePage from './pages/HomePage/HomePage';
import StatisticsPage from './pages/IntroducePage/StatisticsPage';
// import SearchPage from "./pages/SearchPage";
// import CreatePinPage from "./pages/CreatePinPage";
// import PlaylistPage from "./pages/PlaylistPage";
// import UsersPage from "./pages/UsersPage";
// import MyPage from "./pages/MyPage";
// import IntroducePage from "./pages/IntroducePage/IntroducePage";
// import StatisticsPage from "./pages/IntroducePage/StatisticsPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Main />} /> */}
        <Route path="/home" element={<HomePage />} />
        {/* <Route path="/search" element={<SearchPage />} />
        <Route path="/create" element={<CreatePinPage />} />
        <Route path="/playlist" element={<PlaylistPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/introduce" element={<IntroducePage />} />*/}
        <Route path="/statistics" element={<StatisticsPage />} />

        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
