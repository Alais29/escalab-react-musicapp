import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import lyrics from './../../assets/images/lyrics.png';
import back from './../../assets/images/back.png';

const ButtonPrimary = ({type, to}) => (
  <Link className="ButtonPrimary" to={to}>
    <Button variant="contained" color="primary">
      <img alt={type === 'lyrics' ? 'lyrics' : 'back'} src={type === 'lyrics' ? lyrics : back} />
      {type === 'lyrics' ? 'Lyrics' : 'Go Back'}
    </Button>
  </Link>
)

ButtonPrimary.displayName = 'ButtonPrimary';

export default ButtonPrimary;