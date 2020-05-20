import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import track from "./../../assets/images/track.png";
import album from "./../../assets/images/album.png";
import ButtonPrimary from "./../Common/ButtonPrimary";

const Track = ({ commontrack_id, track_name, album_name, artist_name }) => (
  <Grid item xs={ 12 } sm={ 6 }>
      <Paper className="defaultPaper">
          <h3>{ artist_name }</h3>
          <ul>
              <li>
                  <img alt="track" src={ track } />
                  <strong>Track: </strong>
                  <span>{ track_name }</span>
              </li>
              <li>
                  <img alt="album" src={ album } />
                  <strong>Album: </strong>
                  <span>{ album_name }</span>
              </li>
              <li>
                  <ButtonPrimary type="lyrics" to={ `/lyrics/track/${ commontrack_id }` } />
              </li>
          </ul>
      </Paper>
  </Grid>
);

Track.displayName = 'Track';

export default Track;
