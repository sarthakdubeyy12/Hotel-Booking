import React from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import { Footer, Header, PageNotFound } from './components';
import { Home, RoomDetails } from './pages';
import RoomsPage from './pages/RoomsPage';
import RestaurantPage from './pages/RestaurantPage';
import SpaPage from './pages/SpaPage';
import ContactPage from './pages/ContactPage';


const App = () => {

  // const paths = [
  //   { path: '/', element: <Home /> },
  //   { path: '/room/:id', element: <RoomDetails /> },
  //   { path: '*', element: <PageNotFound /> },
  // ]

  // const router = createBrowserRouter(paths);
  // <RouterProvider router={router} /> 

  return (

    <main className=''>
      <BrowserRouter>

        <Header />

        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/rooms'} element={<RoomsPage />} />
          <Route path={'/restaurant'} element={<RestaurantPage />} />
          <Route path={'/spa'} element={<SpaPage />} />
          <Route path={'/contact'} element={<ContactPage />} />
          <Route path={'/room/:id'} element={<RoomDetails />} />
          <Route path={'*'} element={<PageNotFound />} />
        </Routes>

        <Footer />

      </BrowserRouter>
    </main>
  )
}

export default App