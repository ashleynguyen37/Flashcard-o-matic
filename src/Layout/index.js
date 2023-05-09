import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import CreateDeck from "./Home/CreateDeck/CreateDeck";
import Deck from "./Home/Decks/Deck";
import AddCard from "./Home/Decks/AddCard/AddCard";
import EditCard from "./Home/Decks/EditCard/EditCard";
import EditDeck from "./Home/Decks/EditDeck/EditDeck";
import Study from "./Home/Study";


function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          
          <Route path="/decks/new">
            <CreateDeck />
          </Route>

          <Route exact path="/decks/:deckId">
            <Deck />
          </Route>

          <Route path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>

          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          
          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>

          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
