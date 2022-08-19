import { Routes, Route } from "react-router-dom";

const router = () => {
  return (
    <Routes>
      <Route path="/news"></Route>
      <Route path="/teams"></Route>
      <Route path="/players"></Route>
      <Route path="/stats"></Route>
      <Route path="/"></Route>
    </Routes>
  );
};

export default router;
