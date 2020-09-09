/**
 * Routing between pages
 * @packageDocumentation
 */
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { MainPage } from 'Pages';

/** Router for the website */
export default () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  );
};
