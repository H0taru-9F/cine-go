import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '@/layouts/Navbar.jsx';
import Footer from '@/layouts/Footer.jsx';
import MainPage from '@/pages/MainPage';
import DetailPage from '@/pages/DetailPage';
import BuyTicketPage from '@/pages/BuyTicketPage';
import PaymentSuccessPage from '@/pages/PaymentSuccessPage';
import AddMoviePage from '@/pages/admin/AddMoviePage';
import AddActorsAndCityToMovie from '@/pages/admin/AddActorsAndCityToMovie';
import ErrorPage from '@/utils/utilPages/ErrorPage';
import ProtectedRoute from '@/utils/utilPages/ProtectedRoute';
import { useSelector } from 'react-redux';

export default function Dashboard() {
  const userFromRedux = useSelector((state) => state?.user?.payload);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/movie/:movieId" element={<DetailPage />} />
        <Route path="/movie/:movieId/buyTicket" element={<BuyTicketPage />} />
        <Route path="/paymentSuccess" element={<PaymentSuccessPage />} />
        <Route
          path="/addMovie"
          element={
            <ProtectedRoute user={userFromRedux?.roles[0]}>
              <AddMoviePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/addMovie/:movieId"
          element={
            <ProtectedRoute user={userFromRedux?.roles[0]}>
              <AddActorsAndCityToMovie />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}