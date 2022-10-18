import React, { useEffect, useState } from 'react';

const About = () => {
  const [date, setDate] = useState(null);
  
  useEffect(() => {
    setDate(new Date());
  }, [])

  return (
    <>
      <div>About: { date?.toString() }</div>
    </>
  );
};

export default About;