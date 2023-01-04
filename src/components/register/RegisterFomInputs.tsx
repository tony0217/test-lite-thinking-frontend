import React, { useContext, useState } from 'react';

import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import { styled } from '@mui/material/styles';
import Alert, { AlertProps } from '@mui/material/Alert';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import { Company, SuccessResponse } from '@core/interfaces/company.interface';
import CompanyApiContext from '@core/contexts/CompanyApiContext';
import useToggleSnackBar from '@core/hooks/useToggleSnackBar';
import SnackBarMessages from '@components/shared/SnackBarMessages';

const AlertError = styled(Alert)<AlertProps>(({ theme }) => ({
  width: 350,
  backgroundColor: 'transparent',
}));

function RegisterFomInputs() {
  const { create } = useContext(CompanyApiContext);
  const { control, formState: { errors }, handleSubmit } = useForm<Company>();
  const [snackbarMessage, setSnackbarMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [severity, setSeverity] = useState<AlertProps['severity']>('error')
  const { open, handleClickOpen, handleClose } = useToggleSnackBar(false)


  const onSubmit: SubmitHandler<Company> = async (params) => {

    try {
      setLoading(true)
      const response: SuccessResponse | null = await create(params);

      if (response?.status === 'success') {
        handleClickOpen()
        setSeverity('success');
        setSnackbarMessage(response?.message);
        setLoading(false)
        window.location.reload()
      }

    } catch (error: any) {
      if (error.response) {
        handleClickOpen()
        setSeverity('error');
        setSnackbarMessage(error.response.data.message);
        setLoading(false)
      }
      window.console.error(error.message);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ m: 4 }}>
      <SnackBarMessages
        open={open}
        handleClose={handleClose}
        snackbarMessage={snackbarMessage}
        severity={severity}
      />

      <Controller
        name="nit"
        control={control}
        defaultValue=""
        render={({ field }) =>
          <TextField
            {...field}
            variant="standard"
            fullWidth
            name="nit"
            id="nit"
            placeholder='NIT*'
          />
        }
        rules={{
          required: true,
          pattern: /^\d{10}-\d{1}$/
        }}
      />
      {
        errors.nit?.type === 'required' &&
        <AlertError severity="error">Nit is required</AlertError> ||
        errors.nit?.type === 'pattern' &&
        <AlertError severity="error">Nit is not valid example: xxxxxxxxx-x</AlertError>
      }

      <Controller
        name="name"
        control={control}
        defaultValue=""
        render={({ field }) =>
          <TextField
            {...field}
            variant="standard"
            margin="normal"
            fullWidth
            id="name"
            placeholder="Company Name*"
            name="name"
            autoFocus
          />
        }
        rules={{
          required: true,
        }}
      />

      {
        errors.name?.type === 'required' &&
        <AlertError severity="error">name is required</AlertError>
      }

      <Controller
        name="address"
        control={control}
        defaultValue=""
        render={({ field }) =>
          <TextField
            {...field}
            variant="standard"
            margin="normal"
            fullWidth
            id="address"
            placeholder="Company Address*"
            name="address"
          />
        }
        rules={{
          required: true,
        }}
      />

      {
        errors.address?.type === 'required' &&
        <AlertError severity="error">address is required</AlertError>
      }

      <Controller
        name="mobilephone"
        control={control}
        defaultValue=""
        render={({ field }) =>
          <TextField
            {...field}
            variant="standard"
            margin="normal"
            fullWidth
            name="mobilephone"
            id="mobilephone"
            placeholder="mobilephone*"
          />
        }
        rules={{
          minLength: 10,
          required: true,
        }}
      />
      {
        errors.mobilephone?.type === 'required' &&
        <AlertError severity="error">phone is required</AlertError> ||
        errors.mobilephone?.type === 'minLength' &&
        <AlertError severity="error">phone is not valid</AlertError>
      }

      <LoadingButton
        loading={loading}
        variant="contained"
        type="submit"
        fullWidth
        sx={{ mt: 3, mb: 2 }}
      >
        Register
      </LoadingButton>
    </Box>
  )
}

export default RegisterFomInputs;