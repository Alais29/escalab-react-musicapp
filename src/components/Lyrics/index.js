import React, {Fragment, useContext} from 'react';
import {LyricsContext} from './../../contexts/LyricsContext';
import ProgressBar from './../Common/ProgressBar';
import Message from './../Common/Message';
import ButtonPrimary from './../Common/ButtonPrimary';
import Details from './Details';
import { findByLabelText } from '@testing-library/react';

const Lyrics = () => {
  const {doneFetchTrack, doneFetchLyrics, track, lyrics} = useContext(LyricsContext);
  
  return ( 
    <Fragment>
      {
        doneFetchTrack && doneFetchLyrics ?
          (!Array.isArray(track) && !Array.isArray(lyrics) ?
            <Details track={track} lyrics={lyrics} />
            :
            <Message text="No Results" />
          )
        :
          <ProgressBar />
      }
      <div style={{display: 'flex', justifyContent: "center"}}>
        <ButtonPrimary type="back" to="/" />
      </div>
    </Fragment>
  );
}

Lyrics.displayName = 'Lyrics';

export default Lyrics;
