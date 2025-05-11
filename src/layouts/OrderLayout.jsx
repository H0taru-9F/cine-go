import React from 'react';
import { Outlet } from 'react-router-dom';

export default function OrderLayout() {
  return (
    <main>
      <Outlet />
    </main>
  );
} 