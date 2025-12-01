import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Pin, Palette } from 'lucide-react';

export interface NoteData {
    id: string;
    title: string;
    content: string;
    isPinned?: boolean;
    color?: string;
}

interface NoteProps extends NoteData {
    onUpdate: (id: string, data: Partial<NoteData>) => void;
    onDelete: (id: string) => void;
}

const COLORS = [
    'transparent',
    '#2d2d35', // Default dark
    '#5c2b29', // Red
    '#614a19', // Yellow/Orange
    '#1e3a5f', // Blue
    '#2b593f', // Green
    '#4c2a5c', // Purple
    '#5c2b4f', // Pink
];

export const Note: React.FC<NoteProps> = ({
    id,
    title,
    content,
    isPinned,
    color,
    onUpdate,
    onDelete,
}) => {
    const [showColorPicker, setShowColorPicker] = useState(false);

    return (
        <motion.div
            className="note"
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
                opacity: 1,
                scale: 1,
                backgroundColor: color || 'var(--note-bg)'
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            style={{
                borderColor: isPinned ? 'var(--accent-color)' : 'var(--note-border)',
                borderWidth: isPinned ? '2px' : '1px',
            }}
        >
            <div className="note-header">
                <input
                    className="note-title"
                    value={title}
                    placeholder="Title"
                    onChange={(e) => onUpdate(id, { title: e.target.value })}
                />
                <div className="note-actions">
                    <button
                        className="icon-btn"
                        onClick={() => onUpdate(id, { isPinned: !isPinned })}
                        style={{ color: isPinned ? 'var(--accent-color)' : undefined }}
                        aria-label="Pin note"
                    >
                        <Pin size={16} fill={isPinned ? 'currentColor' : 'none'} />
                    </button>
                    <button
                        className="icon-btn"
                        onClick={() => onDelete(id)}
                        aria-label="Delete note"
                    >
                        <X size={16} />
                    </button>
                </div>
            </div>
            <textarea
                className="note-content"
                value={content}
                placeholder="Take a note..."
                onChange={(e) => onUpdate(id, { content: e.target.value })}
            />

            <div className="note-footer">
                <div className="color-picker-wrapper" onMouseLeave={() => setShowColorPicker(false)}>
                    <button
                        className="icon-btn"
                        onClick={() => setShowColorPicker(!showColorPicker)}
                        aria-label="Change color"
                    >
                        <Palette size={16} />
                    </button>
                    {showColorPicker && (
                        <div className="color-picker-popup">
                            {COLORS.map((c) => (
                                <button
                                    key={c}
                                    className="color-circle"
                                    style={{ backgroundColor: c === 'transparent' ? 'var(--note-bg)' : c }}
                                    onClick={() => {
                                        onUpdate(id, { color: c });
                                        setShowColorPicker(false);
                                    }}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};
