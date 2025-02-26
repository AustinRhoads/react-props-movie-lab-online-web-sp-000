import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
 
      
      //  <MovieCard title = {m.title} IMDBRating = {m.IMDBRating} genres = {m.genres}  poster = {m.poster} />
     return movieData.map( m => <MovieCard title = {m.title} IMDBRating = {m.IMDBRating} genres = {m.genres}  poster = {m.poster} key = {m.title}/> )
     

    
    // map over your movieData array and return an array of the correct JSX
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
