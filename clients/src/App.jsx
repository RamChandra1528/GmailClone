import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Layout } from './Layout';
// import { Mail } from './components/Mail';
import Inbox from './components/Inbox'
import Mail from './components/Mail';
// import NewMessage from './components/NewMessage';
// import Message from './components/newMessage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Inbox/>} />
        {/* <Route path='/newMassage' element={<NewMessage/>}/> */}
        <Route path="mail/:id" element={<Mail />} />
      </Route>
    </>
  )
);

function App() {
  return (
    <div className='bg-[#F6F8FC] h-screen'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;