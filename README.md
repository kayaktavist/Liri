Liri is a demonstration Node JS application that allows users to search for media information from multiple sources. Users can search for songs, movies, or concerts from a terminal window. 

## Synax for utilizing Liri:
node liri.js <'search-command'> <'artist/band name here'>

## Liri accepts the following search commands:
   * `concert-this` - Search an artist's name to see concerts through the Bands in Town API
   
   ![Alt Text](./images/concert_this.png)

   
   
   * `spotify-this-song` - Search a song name to recieve artist and album info pertaining to that song
  
   ![Alt Text](./images/spotify_song.png)

   If no song name accompanies the search command, there is a default

   ![Alt Text](./images/spotify_default.png)
   

   Code:
   ![Alt Text](./images/spotify_case.png)
   ![Alt Text](./images/song_function.png)
   

   * `movie-this` - Search a movie name to recieve info on that title
    ![Alt Text](./images/movie.png)
    There is also a default if no movie title is entered
    ![Alt Text](./images/movie_default.png)

    Code  

    ![Alt Text](./images/movie_case.png)
   
   
   

   * `do-what-it-says` - The spotify search function will be called based on the song name stored in the random.txt file  

    ![Alt Text](./images/dwis_.png)

    Code:
    ![Alt Text](./images/dwis_case.png)


Information on searched media is then displayed in the terminal window.

The application utilizes axios to interact with the Bands in Town api and the OMDB api to retrieve concert and movie data. When searching for songs, the application utilizes the node spotify api module to request song data. 

