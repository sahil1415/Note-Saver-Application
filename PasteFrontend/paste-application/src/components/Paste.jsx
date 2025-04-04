import React, { use, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Paste.css';
import { removeFromPaste } from '../features/pasteSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { default as axios } from 'axios';

const Paste = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [pasteData, setPasteData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const api = "http://localhost:8080/pasteApi";
  
  const getPastesData = async () => {
    try{
      const res = await axios.get(api);
      console.log(res.data);
      setPasteData(res.data);

    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getPastesData();
  }, [])
  
  const filterData = pasteData.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

 

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  const handleDelete = async (pasteId) => {
    try{
      await axios.delete(`${api}/id/${pasteId}`);
      setPasteData(prevData => prevData.filter(paste => paste.id !== pasteId));
      dispatch(removeFromPaste(pasteId));
      toast.success("Successfully deleted");
    }
    catch(error){
      console.log(error);
    }
  }
 
  function handleCopy(content){
    navigator.clipboard.writeText(content);
    toast.success("Copied Successfully")
  }

  function handleShare(pasteId){
    const pasteUrl = `${window.location.origin}/pastes/${pasteId}`;
      navigator.clipboard.writeText(pasteUrl)
      .then(() => toast.success("Link copied to clipboard"))
      .catch(err => toast.error('Failed to copy: ', err));
  }

  return (
    <div className='paste-container'>
      <input
        className='search-bar'
        type='search'
        placeholder='Search pastes...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className='card-container'>
        {filterData.length > 0 ? (
          filterData.map((paste) => (
            <div className='paste-card' key={paste.id}>
              <h3 className='paste-title'>{paste.title}</h3>
              <p className='paste-id'>ID: {paste.id}</p>

              <div className='button-grp'>
                <button className='edit' onClick={() => navigate(`/?pasteId=${paste.id}`)}>Edit</button>
                <button className='view' onClick={() => navigate(`/pastes/${paste.id}`)}>View</button>
                <button className='delete' onClick={() => handleDelete(paste.id)}>Delete</button>
                <button className='copy' onClick={() => handleCopy(paste.content)}>Copy</button>
                <button className='share' onClick={() => handleShare(paste.id)}>Share</button>
              </div>

              <p className='paste-date'>{formatDate(paste.createdAt)}</p>
            </div>
          ))
        ) : (
          <p className='no-results'>No pastes found</p>
        )}
      </div>
    </div>
  );
};

export default Paste;
