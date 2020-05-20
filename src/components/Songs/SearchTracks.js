import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const SearchTracks = ({ validateQTrack }) => (
    <Paper className="paper defaultPaper">
        <TextField
            id="q_track"
            label="Track"
            margin="normal"
            variant="outlined"
            onKeyPress={ e => validateQTrack(e) }
        />
        <IconButton onClick={ e => validateQTrack(e) }>
            <SearchIcon />
        </IconButton>
    </Paper>
);

SearchTracks.displayName = 'SearchTracks';

export default SearchTracks;