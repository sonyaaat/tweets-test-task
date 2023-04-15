import logo from '../../images/logo.png';
import main from '../../images/main.png';
import css from './Card.module.css';
const Card = ({ data, onChange }) => {
  const { followers, avatar, id, tweets } = data;
  let ls = JSON.parse(localStorage.getItem('users'));
  if (!ls) {
    ls = [];
  }
  const arrayOfIds = ls.map(obj => obj.id);
  const handleChange = id => {

    const object = {
      id: id,
      value: true,
    };
    const storage = JSON.parse(localStorage.getItem('users'));
    if (!storage) {
      localStorage.setItem('users', JSON.stringify([object]));
      onChange(prev=>!prev);
      return;
    }
    const alreadyIs = storage.find(el => el.id === id);
    if (alreadyIs) {
      const filtered = storage.filter(el => el.id !== id);
      localStorage.setItem('users', JSON.stringify([...filtered]));
      onChange(prev=>!prev);
      return;
    }
    localStorage.setItem('users', JSON.stringify([...storage, object]));
    onChange(prev=>!prev);
  };
  const formatedFollowers = val => new Intl.NumberFormat('en-US').format(val);
  return (
    <>
      <div className={css.card} >
        <img alt="logo" src={logo} className={css.logo} />
        <img alt="main" src={main} className={css.mainImg} />
        <div className={css.line}></div>
        <div className={css.personBox}>
          <img alt="person" src={avatar} className={css.avatar} />
        </div>
        <div className={css.textBox}>
          <p className={css.text}>{tweets} tweets</p>
          <p className={css.text}>
            {arrayOfIds.includes(id)
              ? formatedFollowers(followers + 1)
              : formatedFollowers(followers)}{' '}
            followers
          </p>
          {arrayOfIds.includes(id) ? (
            <button className={css.buttonFollowing} onClick={() => handleChange(id)}>following</button>
          ) : (
            <button className={css.button} onClick={() => handleChange(id)}>follow</button>
          )}
        </div>
      </div>
    </>
  );
};
export default Card;
