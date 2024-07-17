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
import ProfileEditPage from './pages/MyPage/ProfileEditPage';
import SettingsPage from './pages/MyPage/SettingsPage';
import PlaylistSearchPage from './pages/PlaylistPage/PlaylistSearchPage';
import PlaylistDetailPage from './pages/PlaylistPage/PlaylistDetailPage';
import PlaylistEditPage from './pages/PlaylistPage/PlaylistEditPage';
import IntroducePage from "./pages/IntroducePage/IntroducePage";
import StatisticsPage from "./pages/IntroducePage/StatisticsPage";
import Main from "./pages/IntroducePage/Main";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/details-song" element={<MusicInfoPage />} />
        <Route path="/details-place" element={<PlaceInfoPage />} />
        <Route path="/create" element={<CreatePinPage />} />
        <Route path="/playlist" element={<PlaylistPage />} />
        <Route path="/playlistsearch" element={<PlaylistSearchPage />} />
        <Route path="/playlist/:id" element={<PlaylistDetailPage />} />
        <Route path="/playlist-edit/:id" element={<PlaylistEditPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/edit" element={<ProfileEditPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/introduce" element={<IntroducePage/>}/>
        <Route path="/statistics" element={<StatisticsPage/>}/>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
