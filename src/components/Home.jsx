import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
    // let[error ,setError]=useState(null)
    let[songs,setSongs]=useState(null);
    useEffect(()=>{
        const url = 'https://spotify23.p.rapidapi.com/playlist/?id=37i9dQZF1DX4Wsb4d7NKfP';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2c52477029msha1fec01da61360dp1fe65fjsn57aed05482d6',
                'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
            }
        };
        
        fetch(url,options)
        .then((res)=>{return res.json()})
        .then((data)=>{
            let d = data.tracks.items.filter((t)=>{  return t.track!=null })
            setSongs(d);
             console.log(d);
           
            // console.log(data.name  );
            // console.log(data);
            // setSongs(data);
            
            

        })

    },[])
    return ( 
        <div className="songs">
                {/* {songs.map((song)=>{
                    return(
                        <div className="song">

                        </div>
                    )
                })} */}
        </div>
     );
}
 
export default Home;