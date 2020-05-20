import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const ProgressBar = () => (
  <div className="progressBar">
    <CircularProgress size={100} />
  </div>
)

ProgressBar.displayName = "ProgressBar";

export default ProgressBar;
