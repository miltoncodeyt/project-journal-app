import React from "react";
import { useSelector } from "react-redux";

import JournalEntry from "./JournalEntry";

const JournalEntries = () => {
  const { notes } = useSelector((state) => state.notes);

  return (
    <div className="flex flex-col gap-2">
      {notes.map((note) => (
        <JournalEntry key={note.id} {...note} />
      ))}
    </div>
  );
};

export default JournalEntries;
