import React from 'react';
import { Stack, CircularProgress } from '@mui/material';

const Loader = () => (
  <Stack direction="row" justifyContent="center" alignItems="center" width="100%">
    <CircularProgress />
  </Stack>
);

export default Loader;

