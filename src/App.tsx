import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reservation from './pages/Reservation';
import Layout from './components/Layout';
import { Toaster } from 'sonner';

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="reservation" element={<Reservation />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Toaster />
    </Layout>
  );
}

export default App;