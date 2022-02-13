import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/images/svg/logo-v.svg';
import axios from 'axios';

export default function Navbar () {

  const baseURL = "https://run.mocky.io/v3/3cab6663-7cd8-4365-b8a6-4a1d89305f6a";

  const [artists, setArtists] = useState(null);
  const [error, setError] = useState(null);

      useEffect(() => {
        axios.get(`${baseURL}`).then((response) => {
          setArtists(response.data);
        }).catch(error => {
          setError(error);
        });
      }, [baseURL]);

   

  if (error) return `Error: ${error.message}`;
  
// console.log(artists.all_artists[1].artist_name.toLowerCase().replace(' ', '-'))   /artist slug


  return (

  <header className="header">
    <div className="page">
      <Link to ="/" className="logo">
        <img src= {logo} alt="Viberate" /> Viberate
      </Link>
      <nav className="navigation-primary">

        <ul className="menu-sys">
          <li>
            <button className="btn btn-menu search">Search</button>
          </li>
          <li>
            <button className="btn btn-menu more">More</button>
          </li>
        </ul>
        <ul className="menu">

          {artists && artists.all_artists.map((artist, i) => 
            <li key = {artist.artist_uuid}>
              <Link to = {`artist/${artist.artist_uuid}`}>
                  {artist.artist_name}
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  </header>
)
};

