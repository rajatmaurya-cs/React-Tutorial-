import React, { useEffect, useState } from "react";

import axios from 'axios';
const App = () => {

  const [news, setnews] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const API_KEY = '0fa7a28e299d4406820ceb3b26e71995';






  const fetchdata = async () => {

    const res = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        sources: 'techcrunch',
        apiKey: API_KEY,
      },

    });

    console.log(res.data.articles);
    

   

    setnews(res.data.articles || []);

  }


  useEffect(() => {
    fetchdata();
  }, []);



 const handleClick = (e) => {
  e.preventDefault();

  if (currentPage < totalpages) {
    setCurrentPage((prev) => prev + 1);
  }

};

const handleback = (e)=>{

  e.preventDefault();

  if(currentPage>1) setCurrentPage(prev=>prev-1);


}










  const itemperpage = 6;

  const lastindex = itemperpage * currentPage

  const firstIndex = lastindex - itemperpage;

  const totalpages = Math.ceil(news.length / itemperpage);

  const Data = news.slice(firstIndex, lastindex);


  return (
    <div
      className="min-w-full min-h-screen flex justify-center items-center flex-col space-y-10"
    >

      <button
        className="p-5 bg-pink-400 w-25 rounded-4xl flex justify-center items-center"
        onClick={(e) => handleClick(e)}
      >{currentPage}</button>

      <div className="rounded-4xlf w-fit rounded-2xl">
     
     {Data.map((item , index)=>{
      return (
        <div key ={index} className="mb-5">
          <p className="border-4 border-purple-700 rounded-2xl p-4">{index+1}: {item.author}</p>
        </div>
      );
     })}

      </div>

      <button onClick={(e)=>handleback(e)} className=" flex items-center  justify-center bg-amber-300 w-25 rounded-2xl p-3">Go back</button>

    </div>
  );
};

export default App;