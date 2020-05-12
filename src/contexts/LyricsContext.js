import React, {createContext, useState, useEffect} from 'react';
import {trackLyricsGet, trackGet} from './../constants';

//con apicontext, lo primero es crear un contexto:
export const LyricsContext = createContext();

//se crea un proveedor, desde alli se pasan X propiedades a los otros componentes pasando la prop children
const LyricsContextProvider = ({children}) => {
  const commontrack_id = window.location.pathname.split('/')[3];
  const [doneFetchTrack, setDoneFetchTrack] = useState(false);
  const [doneFetchLyrics, setDoneFetchLyrics] = useState(false);
  const [tracks, setTracks] = useState([]);
  const [lyrics, setLyrics] = useState([]);

  useEffect(() => getTracks(commontrack_id), [commontrack_id]);
  useEffect(() => getLyrics(commontrack_id), [commontrack_id]);

  const getTracks = commontrack_id => {
    fetch(trackGet(commontrack_id))
      .then(res => res.json())
      .then(data => {
        const {body} = data.message;
        setDoneFetchLyrics(true);
      })
  }
}
