/**
 * Page with main website functionlaity
 * @packageDocumentation
 */
import React from 'react';
import { Box } from '@material-ui/core';

import InputForm from 'Components/InputForm';

/** Component for the main page */
export default () => {
  return (
    <Box display="flex" height="100vh" width="100vw">
      <Box height="100%" width="50vw">
        <InputForm />
      </Box>
      <Box height="100%" width="50vw" />
    </Box>
  );
};
