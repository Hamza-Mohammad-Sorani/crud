import { Route, Routes} from 'react-router-dom';
import './App.css';
import Layout from './src2/components/Layout/Layout';

import { CreateUser, ListUsers, NotFound } from './src2/pages';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<CreateUser />} />
        <Route path='user/list' element={<ListUsers />} />
        <Route path='user/:id/edit' element={<CreateUser editMode={true} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
