import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import IntroducePage from './pages/IntroducePage/IntroducePage';
import HomePage from './pages/HomePage/HomePage';
import SearchPage from './pages/MusicSearchPage/SearchPage';
import MusicInfoPage from './pages/MusicSearchPage/MusicInfoPage';
import PlaceInfoPage from './pages/MusicSearchPage/PlaceInfoPage';
import CreatePinPage from './pages/CreatePinPage/CreatePinPage';
import PlaylistPage from './pages/PlaylistPage/PlaylistPage';
import UsersPage from './pages/UsersPage/UsersPage';
import MyPage from './pages/MyPage/MyPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroducePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/details-song" element={<MusicInfoPage />} />
        <Route path="/details-place" element={<PlaceInfoPage />} />
        <Route path="/create" element={<CreatePinPage />} />
        <Route path="/playlist" element={<PlaylistPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
