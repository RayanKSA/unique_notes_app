import React from 'react';
import { Note, type NoteData } from './Note';
import { motion, AnimatePresence } from 'framer-motion';

interface NoteGridProps {
    notes: NoteData[];
    onUpdate: (id: string, data: Partial<NoteData>) => void;
    onDelete: (id: string) => void;
}

export const NoteGrid: React.FC<NoteGridProps> = ({ notes, onUpdate, onDelete }) => {
    const pinnedNotes = notes.filter((n) => n.isPinned);
    const otherNotes = notes.filter((n) => !n.isPinned);

    return (
        <div className="note-grid-container">
            <AnimatePresence>
                {pinnedNotes.length > 0 && (
                    <motion.div
                        className="note-grid-section"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <div className="section-title">Pinned</div>
                        <div className="note-grid">
                            {pinnedNotes.map((note) => (
                                <div className="note-wrapper" key={note.id}>
                                    <Note
                                        {...note}
                                        onUpdate={onUpdate}
                                        onDelete={onDelete}
                                    />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="note-grid-section">
                {pinnedNotes.length > 0 && <div className="section-title">Others</div>}
                <motion.div className="note-grid" layout>
                    <AnimatePresence>
                        {otherNotes.map((note) => (
                            <div className="note-wrapper" key={note.id}>
                                <Note
                                    {...note}
                                    onUpdate={onUpdate}
                                    onDelete={onDelete}
                                />
                            </div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};
