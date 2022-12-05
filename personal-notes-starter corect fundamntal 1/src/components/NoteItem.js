import React from "react";
import PropTypes from "prop-types";
import NoteItemBody from "./NoteItemBody";
import DeleteButton from "./DeleteButton";
import { Link } from "react-router-dom";


function NoteItem({title , body , createdAt , id , onDelete}) {
    return (
        <div className="note-item">
            <h2>
            <Link to={`/notes/${id}`}>{title} </Link>
            </h2>
            <NoteItemBody title={title} body={body} createdAt={createdAt}/>
            <DeleteButton id={id} onDelete={onDelete}/>
        </div>
    )
}

NoteItem.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default NoteItem;