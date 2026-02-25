import { useState, useCallback, useMemo } from 'react';

export const useAddNotes = () => {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const [selectedNotes, setSelectedNotes] = useState<string[]>([]);

  const handleNoteSelection = useCallback((noteId: string) => {
    setSelectedNotes((prev) =>
      prev.includes(noteId) ? prev.filter((id) => id !== noteId) : [...prev, noteId]
    );
  }, []);

  const onSubmit = useCallback(() => {
    const payload = {
      noteTitle,
      noteContent,
      selectedNotes,
    };
    // Example: just log the payload — replace with API call in real app
    // eslint-disable-next-line no-console
    console.log('AddNotes payload (example):', payload);
    return payload;
  }, [noteTitle, noteContent, selectedNotes]);

  const actions = useMemo(() => {
    return [
      { label: 'Import Notes', onClick: () => console.log('Importing notes') },
      { label: 'Add Note', onClick: onSubmit },
    ];
  }, [onSubmit, selectedNotes]);

  return {
    noteTitle,
    setNoteTitle,
    noteContent,
    setNoteContent,
    selectedNotes,
    handleNoteSelection,
    onSubmit,
    actions,
  };
};
