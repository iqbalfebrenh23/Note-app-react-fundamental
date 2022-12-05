import React from "react";
import PropTypes from "prop-types";
import {showFormattedDate} from '../utils/date'

function NoteItemBody({ body , createdAt}){
    return(
        <div className="note-item__body">
            {/* <h3 className="note-item__title">{title}</h3> */}
            <p className="note-item__description">{body}</p>
            <p className="note-item__date">{showFormattedDate(createdAt)}</p>
        </div>
    )
}

NoteItemBody.propTypes ={
    // title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
};

export default NoteItemBody;