import "./App.css";
import LeftPanel from "./components/layout/LeftPanel/LeftPanel";
import Header from "./components/Header/Header";
import JournalList from "./components/JournalList/JournalList";
import Body from "./components/layout/Body/Body";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton";
import JournalForm from "./components/JournalForm/JournalForm";
import { useLocalStorage } from './hooks/use-localstorage.hook';
import { UserContextProvider } from './context/user.context';
import { useContext, useState } from 'react';
import { UserContext } from './context/user.context';

function mapItems(items) {
  if (!items) {
    return [];
  }
  return items.map(i => ({
    ...i,
    date: new Date(i.date)
  }))
}

function App() {
  const [items, setItems] = useLocalStorage('date', []);
  const { userId } = useContext(UserContext);
  const [selectedItem, setSelectedItem] = useState(null);

  const addItem = item => {
    if (!item.id) {
      setItems(prevItems => {
        const safeItems = prevItems || [];
        return [...mapItems(safeItems), {
          ...item,
          date: new Date(item.date),
          id: safeItems.length > 0 ? Math.max(...safeItems.map(i => i.id)) + 1 : 1,
          userId: userId
        }];
      });
    }
    else {
      setItems([...mapItems(items).map(i => {
        if (i.id === item.id) {
          return {
            ...item
          }
        }
        return i;
      })])
    }
  }

  const deleteItem = (id) => {
    setItems([...items.filter(i => i.id !== id)])
  }

  return (
    <>
      <UserContextProvider>
        <div className="app">
          <LeftPanel>
            <Header />
            <JournalAddButton clearForm={() => setSelectedItem(null)}/>
            <JournalList items={mapItems(items)} setItem={setSelectedItem}>
            </JournalList>
          </LeftPanel>
          <Body>
            <JournalForm onSubmit={addItem} onDelete={deleteItem} data={selectedItem} />
          </Body>
        </div>
      </UserContextProvider>
    </>
  );
}

export default App;