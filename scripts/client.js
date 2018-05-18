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
    $( '#addModeButton' ).on( 'click', addModeGo );
    $( '#showModeButton' ).on( 'click', showModeGo );
    addModeGo();
}

function addModeGo(){
    $( '#input' ).fadeIn();
    $( '#output' ).hide();
} // end addModeGo

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
        let outputString = '<div class="col-3">';
            outputString += '<div class="card-header">' + movie.title + '</div>';
            outputString += '<div class="card-body">' + movie.director + '</div>';
            outputString += '<div class="card-footer">' + movie.year + '</div>';
        outputString += '</div>';
        el.append( outputString );
    } // end for

} // end displayMovies

function showModeGo(){
    $( '#input' ).hide();
    $( '#output' ).fadeIn();
} // end addModeGo