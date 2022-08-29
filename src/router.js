import { Routes, Route } from "react-router-dom";
import Players from './components/players/playersNew'

const router = () => {
  return (
    <Routes>
      <Route path="/news"></Route>
      <Route path="/teams"></Route>
      <Route path="/players" element={<Players />} />
      <Route path="/stats"></Route>
      <Route path="/"></Route>
    </Routes >
  );
};

export default router;
