import "./JournalList.css";
import JournalItem from "../JournalItem/JournalItem";
import CardButton from "../CardButton/CardButton";
import { UserContext } from "../../context/user.context";
import { useContext, useMemo } from 'react';

function JournalList({ items, setItem }) {
  const { userId } = useContext(UserContext);

  const sortItems = (a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  }

  const filteredItems = useMemo(() => items
    .filter(el => el.userId === userId)
    .sort(sortItems), [items, userId]);

  if (items.length === 0) {
    return <p>Записей пока нет, добавьте первую</p>
  }

  return <>
    {filteredItems
      .map(el => (
        <CardButton key={el.id} onClick={() => setItem(el)}>
          <JournalItem
            title={el.title}
            post={el.post}
            date={el.date}
          ></JournalItem>
        </CardButton>
      ))}</>
}

export default JournalList;
