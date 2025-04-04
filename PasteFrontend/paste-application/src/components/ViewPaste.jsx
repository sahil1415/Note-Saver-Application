import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ViewPaste.css';
import { toast } from 'react-toastify';
import {default as axios} from 'axios';
import { useSelector } from 'react-redux';

const ViewPaste = () => {
  const [paste, setPaste] = useState([]);
  const { pasteId } = useParams(); 
  console.log(pasteId);

  // const pastes = useSelector((state) => state.paste.pastes);
  
  // useEffect(() => {
  //   const pasteData = pastes.find((p) => pasteId === p.id);
  //   console.log("Redux Pastes:", pastes);
  //   console.log("Paste ID from URL:", pasteId);
  //   setPaste(pasteData);
  // }, [pasteId, pastes])
  

  const api = `http://localhost:8080/pasteApi/id/${pasteId}`;

  const getPasteData = async () => {
    try{
      const res = await axios.get(api);
      console.log(res.data);
      setPaste(res.data);
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getPasteData();
  }, [pasteId])
  

  if (!paste) {
    return <h2 className="error">Paste not found</h2>;
  }

  function handleCopy(content){
      navigator.clipboard.writeText(content);
      toast.success("Copied Successfully");
  }

  return (
    <div className="view-page">
      <div className="title-area">
        <input type="text" value={paste.title} disabled />
      </div>
      <div className="text-area">
        <textarea value={paste.content} disabled />
      </div>
      <div className='button-container'>
        <button className='view-copy' onClick={() => handleCopy(paste.content)}>Copy</button>
      </div>
    </div>
  );
};

export default ViewPaste;
