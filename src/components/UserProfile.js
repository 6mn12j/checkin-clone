import React, { useState } from 'react';

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState({
    image:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fwn8ds%2Fbtq5u4RsTuG%2F7KMKUbqv3CLSbdigBxxnJ0%2Fimg.png',
    id: 'minjupar',
    cursus: '42 Cursus',
  });
  const { image, id, cursus } = userInfo;
  return (
    <div className="profile-wrap">
      <img alt="logo" src="img/main_logo_black.png" className="logo" />
      <img alt="user" src={image} className="user-img" />
      <h2 className="user-id">{id}</h2>
      <h3 className="user-cursus">{cursus}</h3>
    </div>
  );
};

export default UserProfile;
