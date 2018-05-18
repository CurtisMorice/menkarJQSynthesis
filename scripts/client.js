console.log( 'js' );

$( document ).ready( readyNow );

class Movie{
    constructor( director, title, year ){
        this.director = director;
        this.title = title;
        this.year = year;
    } //end constructor
} // end Movie

let movies = [];

function readyNow(){
    console.log( 'JQ' );
    $( '#addButton' ).on( 'click', addMovie );
}

function addMovie(){
    console.log( 'in addMovie' );
    // get user input
    // make a new Movie from input
    let newMovie = new Movie( $( '#directorIn' ).val(), $( '#titleIn' ).val(), $( '#yearIn' ).val() );
    // push into my collection array
    movies.push( newMovie );
    console.log( movies );
    // update DOM
    displayMovies();
} // end addMovie

function displayMovies(){
    console.log( 'in displayMovies' );
    // target output element and save in a variable
    let el = $( '#moviesOut' );
    // empty the output element
    el.empty();
    // loop through array
    for( movie of movies ){
        // append each movie to DOM
        let outputString = '<li>';
            outputString += movie.title;
            outputString += ' ';
            outputString += movie.director;
            outputString += ' ';
            outputString += movie.year;
        outputString += '</li>';
        el.append( outputString );
    } // end for

} // end displayMovies