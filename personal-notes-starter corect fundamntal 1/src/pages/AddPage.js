import React from "react";
import { addNote } from "../utils/index";
import NoteInput from "../components/NoteInput";

function AddPage() {
    function onAddNoteHandler(note) {
        addNote(note)
    }

    return(
        <section>
            <h2>Tambah Catatan</h2>
            <NoteInput addNote={onAddNoteHandler} />
        </section>
    )
}

export default AddPage;