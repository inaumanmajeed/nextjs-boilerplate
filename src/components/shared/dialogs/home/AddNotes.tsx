'use client';

import React from 'react';
import DialogLayout from '../DialogLayout';
import { Button } from '../../Button';
import { theme } from '@/lib/theme';
import { useAddNotes } from './useAddNotes';
import TickIcon from '@/assets/images/shared/tick.svg';
import Image from 'next/image';

interface AddNotesProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  id?: string;
}

// Dummy notes data for import functionality
const DUMMY_NOTES = [
  {
    id: '1',
    title: 'Note 1',
    description: "Please describe what's happening...",
    media:
      'https://images.unsplash.com/photo-1719035589532-8e827a7fa775?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '2',
    title: 'Note 2',
    description: "Please describe what's happening...",
    media: null,
  },
  {
    id: '3',
    title: 'Note 3',
    description: "Please describe what's happening...",
    media: null,
  },
  {
    id: '4',
    title: 'Note 4',
    description: "Please describe what's happening...",
    media: null,
  },
];

const AddNotes = ({ isOpen, onOpenChange, id }: AddNotesProps) => {
  const { actions, selectedNotes, handleNoteSelection } = useAddNotes();

  return (
    <DialogLayout
      open={isOpen}
      onOpenChange={onOpenChange}
      title="Add Note"
      actions={actions}
      noPadding
    >
      <div className="flex flex-col">
        {DUMMY_NOTES.map((note) => {
          const isSelected = selectedNotes.includes(note.id);
          const isLastNote = DUMMY_NOTES.indexOf(note) === DUMMY_NOTES.length - 1;
          return (
            <div
              key={note.id}
              onClick={() => handleNoteSelection(note.id)}
              className="flex cursor-pointer items-start gap-3 border-b p-3 transition-colors"
              style={{
                borderColor: theme.colors.defaultBorder,
                borderBottom: isLastNote ? 'none' : 'undefined',
                backgroundColor: isSelected ? '#F9FAFB' : theme.colors.background.default,
              }}
            >
              {note.media && (
                <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg">
                  <Image
                    src={note.media}
                    alt={note.title}
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
              <div className="min-w-0 flex-1">
                <h4 className="mb-0.5 text-xs" style={{ color: theme.colors.text.secondary }}>
                  {note.title}
                </h4>
                <p className="text-sm font-medium">{note.description}</p>
              </div>
              {isSelected && (
                <div className="my-auto shrink-0">
                  <Image src={TickIcon} alt="Selected" width={20} height={20} />
                </div>
              )}
            </div>
          );
        })}
        <div className="" style={{ borderColor: theme.colors.defaultBorder }}>
          <Button variant="underline" onClick={() => console.log('add')}>
            + Add New Note
          </Button>
        </div>
      </div>
    </DialogLayout>
  );
};

export default AddNotes;
