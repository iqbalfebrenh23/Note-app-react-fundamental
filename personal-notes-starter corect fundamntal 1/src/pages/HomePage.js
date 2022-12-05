import React from "react";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { deleteNote, getAllNotes } from "../utils/index";
import PropTypes from "prop-types";

function HomePageWrapper(){
    const [searchParams, setSearchParams] = useSearchParams();

    const id = searchParams.get('id');

    function changeSearchParams(id) {
        setSearchParams({id});
    }

    return <HomePage defaultKeyword={id} keywordChange={changeSearchParams}/>
}



class HomePage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            notes: getAllNotes(),
            id: props.defaultKeyword || '',
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    onDeleteHandler(id){
        deleteNote(id);

        this.setState(() => {
            return{
                notes: getAllNotes(),
            }
        });
    }

    onKeywordChangeHandler(id){
        this.setState(()=>{
            return {
                id,
            }
        })

        this.props.keywordChange(id);
    }

    render(){

        const notes = this.state.notes.filter((note) => {
            return note.title.toLowerCase().includes(
                this.state.id.toLowerCase()
            );
        });

        return (
            <section>
                <SearchBar id={this.state.id} keywordChange={this.onKeywordChangeHandler} />
                <h2>Daftar Note</h2>
                <NoteList notes={notes} onDelete={this.onDeleteHandler} />
            </section>
        )
    }
}

HomePage.propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange : PropTypes.func,
    
}

export default HomePageWrapper;