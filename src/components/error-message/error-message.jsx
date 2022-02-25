import React from 'react';

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const ErrorMessage = () => {

  if (!navigator.onLine) {
    return (
      <Stack sx={{ width: '40%', margin: 'auto' }} spacing={2}>
        <Alert severity="error">Проверьте соединение с интернетом</Alert>
      </Stack>
    )
  }
  return (
    <Stack sx={{ width: '40%', margin: '0 auto', paddingTop: '200px' }} spacing={2}>
      <Alert severity="error">Что-то пошло не так</Alert>
    </Stack>
  );
};

export default ErrorMessage;
