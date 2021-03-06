import { NavLink } from 'react-router-dom';

export default function Greeting(){
    const genus = <NavLink to='./Genus'>Genus</NavLink>
    const species = <NavLink to='./Species'>Species</NavLink>
    return (
        <div className='app-greeting'>
            <p>Welcome to the Fish Identification App. Our Goal is to give you the tools you need to self identify fish by {genus} and {species}.</p>
            <p>As well, we hope to provide a platform by which you can log and store your own personal record of species that you have encountered  (or maybe are simply looking for). where you may take notes, import photos, and (eventually) store location and weather data. </p>
            <p> You may also choose to share this data or keep it simply for your own personal growth and exploration.</p>
            <p>Happy Exploration.</p>
        </div>
    )
}