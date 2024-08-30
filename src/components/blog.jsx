import React from 'react';
import Card from './card'; // Ensure this is the path to your Card component

const Blog = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <Card 
        imageSrc="img/08-small.jpg" 
        description="This is a sample description for the card." 
      />
    </div>
  );
};

export default Blog;