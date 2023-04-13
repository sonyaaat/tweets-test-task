import Card from 'components/Card/Card';
import css from "./List.module.css"
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const List = () => {
  return (
    <div className="container">
      <div >
        <ul className={css.box}>
          {arr.map(() => {
            return <Card />;
          })}
        </ul>
      </div>
    </div>
  );
};
export default List;
