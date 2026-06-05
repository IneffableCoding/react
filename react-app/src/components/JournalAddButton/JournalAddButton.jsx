import "./JournalAddButton.css";
import CardButton from "../CardButton/CardButton";

function JournalAddButton() {
  return (
    <CardButton className="journal-add">
      <img src="/add-icon.svg" alt="Добавить воспоминание" />
      Новое воспоминание
    </CardButton>
  );
}

export default JournalAddButton;
