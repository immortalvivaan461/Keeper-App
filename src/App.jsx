import { useState } from 'react'
import './App.css'
import Header from './components/UI/Header'
import Footer from './components/UI/Footer'
import InputHandler from './components/IOHandler'
import 'bootstrap/dist/css/bootstrap.min.css';

const Data = [{
  id: "a1",
  title: "Dummy Title 1",
  description: "Dummy Description 1"
},
{
  id: "a2",
  title: "Dummy Title 2",
  description: "Dummy Description 2"
},
{
  id: "a3",
  title: "Dummy Title 3",
  description: "Dummy Description 3"
}
]


function App() {
  const [updatedlist, setUpdatedlist] = useState(Data)

  const getDatafrommiddle = (NewData) => {
    console.log(NewData);
    setUpdatedlist(prevList => [NewData, ...prevList]);
  }


  const handleDelete = (DeleteId) => {
    setUpdatedlist(prevList => {
      const newList = prevList.filter(item => item.id !== DeleteId);
      console.log("Updated List After Deletion:", newList); 
      return newList;
    });
  }

  const handleEdit = (id, updatedData) => {
    setUpdatedlist(prevList =>
      prevList.map(item => item.id === id ? { ...item, ...updatedData } : item)
    );
  };

  return (
    <>
      <Header />
      <InputHandler Tasks={updatedlist} getData={getDatafrommiddle} deleteReq={handleDelete} editReq={handleEdit} />
      <Footer />
    </>
  )
}

export default App