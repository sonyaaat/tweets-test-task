import { useState } from 'react';
import logo from '../../images/logo.png';
import main from '../../images/main.png';
import css from './Card.module.css';
const Card = ({ data }) => {
  const { followers, avatar, id, tweets } = data;
  let ls = JSON.parse(localStorage.getItem('users'));
  if (!ls) {
    ls = [];
  }
  console.log('LS', ls);
  const [isFollowed, setIsFollowed] = useState(
    ls.length > 0 ? ls.some(el => el.id === id) : false
  );

  const handleChange = id => {
    console.log(id);
    const object = {
      id: id,
      value: true,
    };
    const storage = JSON.parse(localStorage.getItem('users'));
    if (storage) {
      const alreadyIs = storage.find(el => el.id === id);
      if (alreadyIs) {
        const filtered = storage.filter(el => el.id !== id);
        localStorage.setItem('users', JSON.stringify([...filtered]));
        console.log('is', filtered);
        setIsFollowed(false);
        return;
      }
      const newLocal = [storage, { id: id, value: true }];
      console.log(newLocal);
      localStorage.setItem('users', JSON.stringify([...storage, object]));
      setIsFollowed(true);
    } else {
      localStorage.setItem('users', JSON.stringify([object]));
      setIsFollowed(true);
    }
    console.log(storage);
  };
  const formatedFollowers=(val)=>new Intl.NumberFormat('en-US').format( val);

  return (
    <>
      <div className={css.card} onClick={() => handleChange(id)}>
       
        <img alt="logo" src={logo} className={css.logo} />
        <img alt="main" src={main} className={css.mainImg} />
        <div className={css.line}></div>
        <div className={css.personBox}>
          <img alt="person" src={avatar} className={css.avatar} />
        </div>
        <div className={css.textBox}>
          <p className={css.text}>{tweets} tweets</p>
          <p className={css.text}>{isFollowed ? formatedFollowers(followers+1) :formatedFollowers(followers)} followers</p>
          {isFollowed? <button className={css.buttonFollowing }>following</button>
          :
          <button className={ css.button}>follow</button>}
        </div>
      </div>
    </>
  );
};
export default Card;
