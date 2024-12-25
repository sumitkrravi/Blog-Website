import React from 'react';

const authors = [
  {
    id: 1,
    name: 'John Doe',
    image: 'https://via.placeholder.com/150',
    bio: 'An experienced tech blogger with a passion for AI and Machine Learning.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: 'https://via.placeholder.com/150',
    bio: 'A lifestyle writer exploring wellness, travel, and productivity hacks.',
  },
  {
    id: 3,
    name: 'Alex Johnson',
    image: 'https://via.placeholder.com/150',
    bio: 'A finance expert sharing tips on personal finance and investment strategies.',
  },
  {
    id: 4,
    name: 'Emily Davis',
    image: 'https://via.placeholder.com/150',
    bio: 'A creative writer with a knack for storytelling and poetry.',
  },
];

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
  heading: {
    fontSize: '32px',
    color: '#333',
    marginBottom: '20px',
    textTransform: 'uppercase',
  },
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  },
  card: {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    width: '250px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, boxShadow 0.3s ease',
  },
  cardHover: {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
  image: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    margin: '0 auto 15px',
    objectFit: 'cover',
  },
  name: {
    fontSize: '20px',
    color: '#007bff',
    marginBottom: '10px',
  },
  bio: {
    fontSize: '14px',
    color: '#555',
    lineHeight: '1.6',
  },
};

function Author() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Our Authors</h1>
      <div style={styles.list}>
        {authors.map((author) => (
          <div
            key={author.id}
            style={{
              ...styles.card,
              ':hover': styles.cardHover, // Pseudo hover effect using inline styles
            }}
          >
            <img src={author.image} alt={author.name} style={styles.image} />
            <h2 style={styles.name}>{author.name}</h2>
            <p style={styles.bio}>{author.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Author;
