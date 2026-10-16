let notes = [];
let editingNoteId = null;

function loadNotes() {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
}

function saveNote(event) {
    event.preventDefault();

    const titleInput = document.getElementById('noteTitle').value.trim();
    const contentInput = document.getElementById('noteContent').value.trim();

    if (editingNoteId) {
        // Update existing note
        const noteIndex = notes.findIndex(note => note.id === editingNoteId);
        if (noteIndex !== -1) {
            notes[noteIndex] = {
                id: editingNoteId,
                title: titleInput,
                content: contentInput
            };
        }
    }
    else {
        // Add new note
        notes.unshift({
            id: generateId(),
            title: titleInput,
            content: contentInput,
        });
    }


    saveNotes();
    renderNotes();
    closeNoteDialog();
}    

function generateId() {
        return Date.now().toString()
} 

function saveNotes() {
    localStorage.setItem('notes', JSON.stringify(notes));
}

function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.getElementById('themeToggleBtn').textContent = isDark ? '☀️' : '🌙';
}

function applyStoredTheme() {
    if(localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
        document.getElementById('themeToggleBtn').textContent = '☀️';
    }
}

function deleteNote(noteId) {
    notes = notes.filter(note => note.id !== noteId);
    saveNotes();
    renderNotes();
}

function renderNotes() {
    const notesContainer = document.getElementById('notesContainer');
    if(notes.length === 0) {
        // show some fallback elements
        notesContainer.innerHTML = `
            <div class="empty-state">
                <h2>No Notes Yet</h2>
                <p>Click the "Add Note" button to create your first note.</p>
                <button class="add-note-button" onclick="openNoteDialog()">+ Add Note</button>
            </div>
        `
        return;
    }

    notesContainer.innerHTML = notes.map(note => `
        <div class="note-card">
            <h3 class="note-title">${note.title}</h3>
            <p class="note-content">${note.content}</p>
            <div class="note-actions">
                <button class="edit-btn" onclick="openNoteDialog('${note.id}')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
                    </svg>
                </button>
                <button class="delete-btn" onclick="deleteNote('${note.id}')">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm5.366 14.95a1 1 0 0 1-1.414 1.414L12 13.414l-3.952 3.95a1 1 0 0 1-1.414-1.414L10.586 12 6.634 8.048a1 1 0 0 1 1.414-1.414L12 10.586l3.952-3.952a1 1 0 0 1 1.414 1.414L13.414 12l3.952 3.95z"/>
                    </svg>
                </button>
            </div>
        </div>
    `).join('');
}

function openNoteDialog(noteId = null) {
    const dialog = document.getElementById('noteDialog');
    const titleInput = document.getElementById('noteTitle');
    const contentInput = document.getElementById('noteContent');

    if (noteId) {
        const note = notes.find(n => n.id === noteId);
        editingNoteId = noteId;
        document.getElementById('dialogTitle').textContent = 'Edit Note';
        titleInput.value = note.title;
        contentInput.value = note.content;
    } else { 
        editingNoteId = null;
        document.getElementById('dialogTitle').textContent = 'Add New Note';
        titleInput.value = '';
        contentInput.value = '';
    }

    dialog.showModal();
    titleInput.focus();
}

function closeNoteDialog() {
    const dialog = document.getElementById('noteDialog');
    dialog.close();
}

document.addEventListener('DOMContentLoaded', () => {
    applyStoredTheme();
    notes = loadNotes();
    renderNotes();

    document.getElementById('noteForm').addEventListener('submit', saveNote);
    document.getElementById('themeToggleBtn').addEventListener('click', toggleTheme);

    document.getElementById('noteDialog').addEventListener('click', function (event) {
        if (event.target === this) {
            closeNoteDialog();
        }
    });
}); 