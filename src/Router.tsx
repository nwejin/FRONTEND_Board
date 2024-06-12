import { BrowserRouter, Route, Routes } from 'react-router-dom';

// 페이지
import BoardMain from './pages/board/BoardMain';
import BoardDetail from './pages/detail/BoardDetail';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BoardMain />} />
        <Route path="/:id" element={<BoardDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
