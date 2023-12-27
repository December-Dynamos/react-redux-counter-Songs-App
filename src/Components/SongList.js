import React from "react"; 
import songsData from "../data/songData"; 
import {selectedSong} from "../redux/actions/songActions";
import {useDispatch} from "react-redux";



const SongList = () => {

    const dispatch = useDispatch()


    return(
        <div>
             <h1> Song Library</h1> 
             {
                songsData.map(song => (
                    <p key={song.id} onClick={()=> dispatch(selectedSong(song))}>
                        {song.name}
                    </p>
                ))
             }
        </div>
    )
}

export default SongList;