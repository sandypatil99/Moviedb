import React from 'react';

const CastList = ({ cast }) => {
  if (!cast || cast.length === 0) {
    return <p>No cast information available.</p>;
  }

  return (
    <div className="cast-list">
      <h2>Cast</h2>
      <div className="cast-grid">
        {cast.slice(0, 10).map((member) => (
          <div key={member.id} className="cast-card">
            <img
              src={
                member.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${member.profile_path}`
                  : 'https://via.placeholder.com/150'
              }
              alt={member.name}
            />
            <p className="cast-name">{member.name}</p>
            <p className="cast-character">as {member.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CastList;
