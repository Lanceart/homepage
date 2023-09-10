import { useState, useEffect } from 'react';

export default function YourComponent({id}) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`/api/posts/${id}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log('Error fetching data:', error));
  }, [id]);

  // console.log(data);
  return (
    
    <div>
      {data ? data.title : 'Loading...'}
    </div>
  );
}
