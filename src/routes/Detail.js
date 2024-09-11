import {useParams} from "react-router-dom" ;
import {useEffect} from "react";

function Detail(){

    const {id} = useParams();

    const fetchMovieInfo = async()=>{
        const data = await(await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`));
        const json = await data.json();
        console.log(json);
    }

    useEffect(()=>{
        fetchMovieInfo();
    },[]);

    return <h1></h1>;
 }

 export default Detail;