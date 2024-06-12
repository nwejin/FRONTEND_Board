import { BrowserRouter, Route, Routes } from 'react-router-dom';

// 페이지
import BoardMain from './pages/board/BoardMain';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BoardMain />} />
      </Routes>
    </BrowserRouter>
  );
}
