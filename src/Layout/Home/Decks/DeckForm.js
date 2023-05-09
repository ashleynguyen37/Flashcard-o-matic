import React from "react";
import { Link } from "react-router-dom";

function DeckForm ({ deckId, handleSubmit, formData, changeHandler }) {
    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            <div>
                <label htmlFor="name">Name</label>
            </div>

            <div>
                <input type="text" id="name" name="name" className="form-control" value={formData.name} onChange={(event) => changeHandler(event)} required />
            </div>

            <div>
                <label htmlFor="description">Description</label>
            </div>

            <div>
            <textarea id="description" className="form-control" name="description" value={formData.description} onChange={(event) => changeHandler(event)} required />
            </div>

            {deckId ? <Link to={`/decks/${deckId}`} className="btn btn-secondary">Cancel</Link> : <Link to={`/`} className="btn btn-secondary">Cancel</Link>}

            <button type="submit"  className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default DeckForm;