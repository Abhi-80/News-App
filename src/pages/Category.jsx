import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCategoryNewsStart } from '../redux/action/news.action';
import News from '../components/News';

export default function Category() {
  const { slug } = useParams();
  const categoryNews = useSelector((state) => state.categoryNews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryNewsStart(slug));
  }, [dispatch, slug]);

  return (
    <div className="container">
      <div className="row">
        {categoryNews.length > 0 ? (
          categoryNews.map((item) => (
            <News key={item.id} item={item} />
          ))
        ) : (
          <div className="col-12 text-center">No news available for this category.</div>
        )}
      </div>
    </div>
  );
}
