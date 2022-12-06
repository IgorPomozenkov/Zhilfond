import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

const Home = React.lazy(() => import(/* webpackChunkName: "home" */ '@/scenes/Home'));
const NotFound = React.lazy(() => import(/* webpackChunkName: "notfound" */ '@/scenes/NotFound'));

const Router: React.FC = () => {
  return (
    <Suspense
      fallback={
        <CircularProgress
          color="primary"
          sx={{ position: 'absolute', top: '30%', left: '50%', color: '#333333' }}
        />
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
