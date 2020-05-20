import React, {Fragment} from 'react';
import Message from './../Common/Message';
import ButtonPrimary from './../Common/ButtonPrimary';

const NotFound = () => (
  <Fragment>
    <Message text="404: URL Not Found" />
    <ButtonPrimary type="back" to='/' />
  </Fragment>
)

NotFound.displayName = 'NotFound'

export default NotFound;