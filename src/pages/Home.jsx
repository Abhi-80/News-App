import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsStart } from '../redux/action/news.action';  // Adjust the import as necessary
import News from '../components/News';

export default function Home() {
  const news = useSelector((state) => state.news || []); // Get all news from Redux state

  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch all news when the component mounts (first load)
    if (news.length === 0) {
      dispatch(getNewsStart());  // Dispatch the action to fetch all news
    }
  }, [dispatch, news.length]);  // Trigger once, when news is empty

  return (
    <div className="container">
      <div className="row">
        {/* Check if news is available and map over it */}
        {news.length > 0 ? (
          news.map((n, index) => <News key={index} item={n} />) // Render each news item
        ) : (
          <div className="col-12">
            <p>No news available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}
