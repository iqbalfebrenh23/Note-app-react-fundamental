import React from "react";
import { useParams } from "react-router-dom";
import NoteDetail from "../components/NoteDetail";
// import { useNavigate } from "react-router-dom";
import { getNote } from "../utils/index";
import PropTypes from"prop-types";


function DetailPageWrapper(){
    const {id} = useParams();
    return<DetailPage id={Number(id)}/>;
}

class DetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            note: getNote(props.id)
        }
    }
    render() {
        if (this.state.note === null) {
            return <p>Note is not found!</p>;
        }
    
        return (
            <section>
                <NoteDetail {...this.state.note} />
            </section>
        )
    }
}

// function DetailPageWrapper(){
//     const navigate = useNavigate();

//     const {id} = useParams();

//     function homeNavigate() {
//         navigate('/');
//     }

//     return <DetailPage id={id} navigate={homeNavigate}/>
// }



// class DetailPage extends React.Component {
//     constructor(props){
//         super(props);

//         this.state = {
//             note : getNote(props.id)
//         }

//         this.onDeleteClickHandler = this.onDeleteClickHandler.bind(this);
//     }

//     onDeleteClickHandler(id){
//         deleteNote(id);

//         const {navigate} = this.props;
//         navigate();
//     }



//     render(){
        

//         return (
//             <section>
//                 <NoteDetail {...this.state.note} onDelete={this.onDeleteClickHandler} />
//             </section>
//         )
//     }
// }

DetailPage.propTypes = {
    id: PropTypes.string.isRequired,
}

export default DetailPageWrapper;
