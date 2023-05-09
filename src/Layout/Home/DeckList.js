import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";

function DeckList({ decks = [], deleteHandler}) {

  const abortController = new AbortController();
  const signal = abortController.signal;
  console.log(decks)

    const listing = decks.map((deck) => { return (
    <div key={deck.id} className="card">
     <div className="card-header">{deck.name}</div>
     <div className="card-body">
      <p>{`${deck.cards.length} cards`}</p>
      <p>{deck.description}</p> 
        <div className="row" style={{display: "flex", justifyContent: "left", margin: "8px"}}>
          <Link to={`/decks/${deck.id}`} className="btn btn-secondary mr-2">View</Link>
          <Link to={`/decks/${deck.id}/study`} className="btn btn-primary mr-2">study</Link>
          <button type="button" onClick={() => deleteHandler(deck.id, signal)} className="btn btn-danger ml-auto">Delete</button> 
        </div>
    </div>
    </div>
    )
    })

    return <div>{listing}</div>
}

export default DeckList