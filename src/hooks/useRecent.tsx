import { useEffect, useState } from 'react';

export const useRecent = () => {
  const [recentItems, setRecentItems] = useState([]);
  const hasRecentItems = () => {
    if (recentItems.length === 0) return '최근 검색어가 없습니다';
    else return null;
  };

  useEffect(() => {
    setRecentItems([]);
  }, []);

  return {
    hasRecentItems,
  };
};
