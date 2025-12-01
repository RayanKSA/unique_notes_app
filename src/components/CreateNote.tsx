import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CreateNoteProps {
    onCreate: (title: string, content: string) => void;
}

export const CreateNote: React.FC<CreateNoteProps> = ({ onCreate }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const containerRef = useRef<HTMLDivElement>(null);

    // Close when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                if (title || content) {
                    onCreate(title, content);
                    setTitle('');
                    setContent('');
                }
                setIsExpanded(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isExpanded, title, content, onCreate]);

    return (
        <div className="create-note-container" ref={containerRef}>
            <motion.div
                className="create-note-card"
                animate={{ height: 'auto' }}
                transition={{ duration: 0.2 }}
            >
                <AnimatePresence>
                    {isExpanded && (
                        <motion.input
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="create-note-title"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    )}
                </AnimatePresence>

                <textarea
                    className="create-note-content"
                    placeholder="Take a note..."
                    value={content}
                    onClick={() => setIsExpanded(true)}
                    onChange={(e) => setContent(e.target.value)}
                    rows={isExpanded ? 3 : 1}
                />

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            className="create-note-actions"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <button
                                className="close-btn"
                                onClick={() => {
                                    if (title || content) {
                                        onCreate(title, content);
                                        setTitle('');
                                        setContent('');
                                    }
                                    setIsExpanded(false);
                                }}
                            >
                                Close
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};
