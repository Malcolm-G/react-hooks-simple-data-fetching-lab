// create your App component here
import React,{useEffect,useState} from "react"

function App(){

    const[image,setImage] = useState("");
    const[isLoaded,setIsLoaded] = useState(false);

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp=>resp.json())
        .then(data=>{
            setImage(()=>data.message)
            setIsLoaded(()=>true)
        })
    },[])

    // console.log(image,isLoaded)

    if(!isLoaded) return <p>Loading...</p>;

    return(
        <div>
            <img src={image} alt="A Random Dog" ></img>
        </div>
    )
}

export default App;