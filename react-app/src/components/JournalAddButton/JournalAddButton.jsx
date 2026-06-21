import "./JournalAddButton.css";
import CardButton from "../CardButton/CardButton";

function JournalAddButton({ clearForm }) {
  return (
    <CardButton className="journal-add" onClick={clearForm}>
      <img src="/add-icon.svg" alt="Добавить воспоминание" />
      Новое воспоминание
    </CardButton>
  );
}

export default JournalAddButton;
