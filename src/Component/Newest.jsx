import React, {useState, useEffect} from 'react'
import './Anime.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Link} from 'react-router-dom';
import {  Navigation } from "swiper";

function Newest() {
  const [data, setData] = useState([]);
  const loadData = async() =>{
      const anime = await fetch(`https://api.jikan.moe/v4/seasons/now`);
      const value = await anime.json()
      if (anime.ok) {
        setTimeout(() => {
          return  setData(value.data);
        }, 3000);
      }
  }

  useEffect(() =>{
      loadData();
  },[])
  return (
    <>
        <div className='anime-list'>
            <span className='anime-title'>Newest Anime</span>
            <div className='garis'></div>
           
        </div>
        <Swiper
        slidesPerView={6}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={false}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <div className="list-anime">
        {data.map(datas =>{
            const standarimage = datas.images.webp.image_url
           
            return(
              <div key={datas.mal_id}>
              <SwiperSlide>
            <div  className="image" >
                <img src={standarimage} alt={datas.title}/>
                <div className="image-content">
                    <div className='image-title'>{datas.title}</div>
                    <Link to={`/details/${datas.type}/${datas.mal_id}`} state={{ data : datas }} className="detail-button">DETAILS</Link>
                    <div>{datas.year}</div>
                </div>
                </div>
                </SwiperSlide>
                </div>
            )
        })}    
        </div>
         
        </Swiper>
    </>
  )
}

export default Newest