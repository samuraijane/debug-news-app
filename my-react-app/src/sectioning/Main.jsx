import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Politics,
  World,
  US,
  Business,
  Health,
  Entertainment,
  Travel,
  Sports,
} from "../views";

const Main = () => {
  return (
    <main class="y-wrap">
      <Routes>
        <Route path="/" element={<US />} />
        <Route path="/world" element={<World />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/business" element={<Business />} />
        <Route path="/health" element={<Health />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/sports" element={<Sports />} />
      </Routes>
    </main>
  );
};

export default Main;
