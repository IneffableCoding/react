import "./App.css";
import LeftPanel from "./components/layout/LeftPanel/LeftPanel";
import Header from "./components/Header/Header";
import JournalList from "./components/JournalList/JournalList";
import Body from "./components/layout/Body/Body";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton";
import JournalForm from "./components/JournalForm/JournalForm";
import { useState } from "react";

const INITIAL_DATA = [
  // {
  //   id: 1,
  //   title: "Подготовка к обновлению курсов",
  //   text: "Горные походы открывают удивительный природный ланшафт",
  //   date: new Date(),
  // },
  // {
  //   id: 2,
  //   title: "Поход в горы",
  //   text: "Думал, что очень много времени",
  //   date: new Date(),
  // }
]

function App() {
  const [items, setItems] = useState(INITIAL_DATA);

  const addItem = item => {
    setItems(oldItems => [...oldItems, {
      text: item.text,
      title: item.title,
      date: new Date(item.date),
      id: oldItems.length > 0 ? Math.max(...oldItems.map(i => i.id)) + 1 : 1
    }])
  }

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList items={items}>
        </JournalList>
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addItem} />
      </Body>
    </div>
  );
}

export default App;
