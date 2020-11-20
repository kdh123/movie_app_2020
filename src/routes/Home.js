import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Movie from "../components/Movie";


class Home extends React.Component{

    state = {
        isLoading : true,
        movies : []
    };

    /* componentDidMount(){
        setTimeout(() => {
            this.setState({isLoading : false});
        }, 6000);
    } */

    getMovies = async () => {
        /* const movies = await axios.get("https://yts.mx/api/v2/list_movies.json")
        console.log(movies.data.data.movies); */
        //this.setState({isLoading : false, movies : movies.data.data.movies});

        const {
            data : {
                data : {movies}
            }
        } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
        console.log(movies);
        this.setState({movies, isLoading : false})
        
    }

    componentDidMount(){
        this.getMovies();

        /* let rooms = {"a" :["sdf"]};
        rooms["a"].push("aaa"); */

        let rooms ={};
        rooms["a"] = ["aaa", "bbb"]

        const otherUser = rooms["a"].find(id => id !== "aaa");
    
        console.log(rooms)
        console.log(otherUser);

        if(otherUser){
            console.log("true")
        } else{
            console.log("false")
        }
    }
    
    render(){
      const {isLoading, movies} = this.state;
    return (<section className="container">
        {isLoading ? (<div className="loader">
            <span className="loader__text">Loading....</span>
        </div>
        ) : 
        (
        <div className="movies">
        {movies.map(movie => (
        <Movie 
        key={movie.id} 
        id={movie.id} 
        year={movie.year} 
        title={movie.title} 
        summary={movie.summary} 
        poster={movie.medium_cover_image}
        genres={movie.genres}
        />
    ))}
    </div>
    )}
    </section>);
    
    }
}

export default Home;