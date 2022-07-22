// Source: scrimba

import React from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import Split from "react-split"
import {nanoid} from "nanoid"
import "./style.css"

export default function App() {

  const [notes, setNotes] = React.useState(
      () => JSON.parse(localStorage.getItem("notes")) || []
  )

  const [currentNoteId, setCurrentNoteId] = React.useState(
      (notes[0] && notes[0].id) || ""
  )

  React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here"
    }
    setNotes(prevNotes => [newNote, ...prevNotes])
    setCurrentNoteId(newNote.id)
  }

  function updateNote(text) {

    let updatedNotes = [];

    // First, push current note into the updatedNotes list.
    // That way, recently-modified notes will always be on
    // the top of the list.

    notes.map(note => {
      note.id === currentNoteId &&
        updatedNotes.push({ ...note, body: text });
    });

    // After current note is already the first one in the notes list,
    // push all the remaining ones into the updatesNotes list
    // in the order they were before

    notes.map(note => {
      note.id !== currentNoteId &&
        updatedNotes.push(note);
    });

    setNotes(updatedNotes);
  }

  /**
   * Challenge: complete and implement the deleteNote function
   *
   * Hints:
   * 1. What array method can be used to return a new
   *    array that has filtered out an item based
   *    on a condition?
   * 2. Notice the parameters being based to the function
   *    and think about how both of those parameters
   *    can be passed in during the onClick event handler
   */

  function deleteNote(event, noteId) {
    event.stopPropagation();
    setNotes(notes.filter(note => note.id !== noteId));
  }

  function findCurrentNote() {
    return notes.find(note => {
      return note.id === currentNoteId
    }) || notes[0]
  }

  return (
      <main>
        {
          notes.length > 0
              ?
              <Split
                  sizes={[30, 70]}
                  direction="horizontal"
                  className="split"
              >
                <Sidebar
                    notes={notes}
                    currentNote={findCurrentNote()}
                    setCurrentNoteId={setCurrentNoteId}
                    newNote={createNewNote}
                    deleteNote={deleteNote}
                />
                {
                    currentNoteId &&
                    notes.length > 0 &&
                    <Editor
                        currentNote={findCurrentNote()}
                        updateNote={updateNote}
                    />
                }
              </Split>
              :
              <div className="no-notes">
                <h1>You have no notes</h1>
                <button
                    className="first-note"
                    onClick={createNewNote}
                >
                  Create one now
                </button>
              </div>

        }
      </main>
  )
}
