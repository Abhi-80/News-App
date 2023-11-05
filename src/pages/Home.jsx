import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNewsStart } from '../redux/action/news.action';
import News from '../components/News';

export default function Home() {

  const news = useSelector(state => state.news);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsStart())
  },[news.length])

  return (
    <div className='container'>
      <div className="row">
        {
          news.length > 0 && news.map((n,index) => (
            <News key={index}/>
          ))
        }
      </div>  
    </div>
  )
}
