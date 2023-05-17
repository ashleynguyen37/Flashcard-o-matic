import React from "react";
import { Link } from "react-router-dom";

function CardForm({submitHandler, formData, changeHandler, deckId}) {
    console.log("CardForm");
    return (
        <form onSubmit={submitHandler}>

            <div>
                <label htmlFor="front">front</label>
            </div>

            <div>
                <textarea id="front" name="front" className="form-control" value={formData.front} onChange={changeHandler} required /> 
            </div>

            <div>
                <label htmlFor="back">back</label>
            </div>

            <div>
                <textarea id="back" name="back" className="form-control" value={formData.back} onChange={changeHandler} required />
            </div>

                <Link to={`/decks/${deckId}`} className="btn btn-secondary mr-2 mt-2">Cancel</Link>
                <button type="submit"  className="btn btn-primary mt-2">Submit</button>
            </form>
    )
}

export default CardForm