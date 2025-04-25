import React from 'react';
import Spline from '@splinetool/react-spline';
import './App.css';
import Overlay from './Overlay';

export default function App() {
  return (
    <div className="fullscreen-spline">
      <Spline scene="https://prod.spline.design/MGEnkWVQnrjsfX5P/scene.splinecode" />
      <Overlay />
    </div>
  );
}





