import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch
import './HomePage.css';
import { addToPastes, updateToPastes } from '../features/pasteSlice';
import {default as axios} from 'axios'

const HomePage = () => {
 
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const dispatch = useDispatch(); 
  // For getting the id from the url
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId") ? (searchParams.get("pasteId")) : null;

  const api = "http://localhost:8080/pasteApi";

  useEffect(() => {
    if (pasteId) {
      axios.get(`${api}/id/${pasteId}`)
        .then((res) => {
          setTitle(res.data.title);
          setValue(res.data.content);
        })
        .catch((err) => console.error("Error fetching paste:", err));
    }
  }, [pasteId]);
  

  const createPaste = async () => {
    const paste = {
      title: title,
      content: value,
    }

    try{
      if(pasteId){
        await axios.put(`${api}/id/${pasteId}`, paste);
        dispatch(updateToPastes(paste));
      }
      else{
        await axios.post(api, paste);
        dispatch(addToPastes(paste));
      }
      setTitle('');
      setValue('');
      setSearchParams({});
    }
    catch(error){
      console.log(error);
    }
  };
  
  

  return (
    <div className='home-page'>
      <div className='title-area'>
        <input
          type='text'
          placeholder='Enter title here'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* If URL has pasteId = Update, else Create   http://localhost:5173/?pasteId=2*/}
        <button onClick={createPaste}>
          {pasteId ? "Update Paste" : "Create My Paste"}
        </button>
      </div>
      <div className='text-area'>
        <textarea
          placeholder='Enter Your paste here'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default HomePage;
