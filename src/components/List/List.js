import Card from 'components/Card/Card';
import css from './List.module.css';
import { useEffect, useState } from 'react';
import FadeLoader from 'react-spinners/FadeLoader';
import { getAllUsers } from 'api';
const List = () => {
  const [users, setUsers] = useState();
  const [max, setMax] = useState();
  const [end, setEnd] = useState(9);
  const [filter, setFilter] = useState('');
  const [filteredItems, setFilteredItems] = useState('');
  const [change, setIsChange] = useState(false);
  useEffect(() => {
    let ls = JSON.parse(localStorage.getItem('users'));
    if (!ls) {
      ls = [];
    }
    const arrayOfIds = ls.map(obj => obj.id);
    if (filter === 'following' && users) {
      const arr = users.filter(user => arrayOfIds.includes(user.id));
      setFilteredItems(arr);
    } else if (filter === 'follow' && users) {
      const arr = users.filter(user => !arrayOfIds.includes(user.id));
      setFilteredItems(arr);
    } else if (users) {
      setFilteredItems(users);
    }
    setMax(filteredItems.length);
  }, [filter, users, change, filteredItems.length]);

  useEffect(() => {
    getAllUsers()
      .then(function (response) {
        setUsers(response.data);
        setMax(response.data.length);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const loadMOre = () => {
    setEnd(prev => (prev += 9));
  };
  const onFilterChange = evt => {
    evt.preventDefault();
    const value = evt.target.value;
    setFilter(value);
    setEnd(9);
  };
  return (
    <div>
      {!filteredItems && (
        <div className={css.centered}>
          <FadeLoader color="#5736A3" />
        </div>
      )}

      {filteredItems && (
        <div className={css.filter}>
          <label htmlFor="filter" className={css.label}>
            Filter
          </label>
          <select
            id="filter"
            name="filter"
            className={css.filter}
            onChange={onFilterChange}
          >
            <option value="all">
              Show all
            </option>
            <option value="follow">Follow</option>
            <option value="following">Following</option>
          </select>
          {filteredItems.length === 0 && filter !== 'all' && (
            <p className={css.centered}>
              There isn`t any user with filter "{filter}"
            </p>
          )}
          <ul className={css.box}>
            {filteredItems.slice(0, end).map(data => {
              return <Card data={data} key={data.id} onChange={setIsChange} />;
            })}
          </ul>
          {end < max && (
            <button className={css.load} onClick={loadMOre}>
              Load more
            </button>
          )}
        </div>
      )}
    </div>
  );
};
export default List;
