import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { styled } from '@mui/material/styles';
import Alert, { AlertProps } from '@mui/material/Alert';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import { Company, SuccessResponse } from '@core/interfaces/company.interface';
import CompanyApiContext from '@core/contexts/CompanyApiContext';
import useToggleSnackBar from '@core/hooks/useToggleSnackBar';
import SnackBarMessages from '@components/shared/SnackBarMessages';

function RegisterFomInputsDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { update, getByOne } = useContext(CompanyApiContext);
  const [snackbarMessage, setSnackbarMessage] = useState('')
  const [companyId, setCompanyId] = useState<string>(id as any)
  const [company, setCompany] = useState<Company>({} as Company)
  const [formInput, setFormInput] = useState<Company>({} as Company);

  const [loading, setLoading] = useState(false)
  const [severity, setSeverity] = useState<AlertProps['severity']>('error')
  const { open, handleClickOpen, handleClose } = useToggleSnackBar(false)

  useEffect(() => {
    if (id !== undefined) {
      setCompanyId(String(id));
    }
    getByOne(companyId).then((res) => {
      setCompany(res as unknown as Company)
      setFormInput({
        _id: id as any,
        address: res.address,
        mobilephone: res.mobilephone,
        name: res.name,
        nit: res.nit,
      })
    })
  }, [])

  function handleChangeInput(event: any) {
    setFormInput({ ...formInput, [event.target.name]: event.target.value });
  }

  const onSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true)
      const response: SuccessResponse | null = await update(String(companyId), formInput);

      if (response?.status === 'success') {
        handleClickOpen()
        setSeverity('success');
        setSnackbarMessage(response?.message);
        setLoading(false)
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
    <Box component="form" sx={{ my: 15 }}>
      <SnackBarMessages
        open={open}
        handleClose={handleClose}
        snackbarMessage={snackbarMessage}
        severity={severity}
      />

      <TextField
        variant="standard"
        fullWidth
        name="nit"
        id="nit"
        placeholder='NIT*'
        value={company.nit}
        disabled
      />

      <TextField
        variant="standard"
        margin="normal"
        fullWidth
        id="name"
        placeholder="Company Name"
        name="name"
        autoFocus
        onChange={(e) => handleChangeInput(e)}
        value={formInput.name}
        helperText={!formInput.name && 'name is required'}
        required
      />

      <TextField
        variant="standard"
        margin="normal"
        fullWidth
        id="address"
        placeholder="address*"
        name="address"
        onChange={(e) => handleChangeInput(e)}
        value={formInput.address}
        helperText={!formInput.address && 'address is required'}
        required
      />

      <TextField
        variant="standard"
        margin="normal"
        fullWidth
        name="mobilephone"
        id="mobilephone"
        placeholder="mobilephone*"
        onChange={(e) => handleChangeInput(e)}
        value={formInput.mobilephone}
        helperText={
          !formInput.mobilephone && 'mobilephone is required' ||
           formInput.mobilephone.length < 10 && 'mobilephone is not valid'
        }
        required
      />

      <LoadingButton
        loading={loading}
        variant="contained"
        type="submit"
        fullWidth
        onClick={(e) => onSubmit(e)}
        sx={{ mt: 3, mb: 2 }}
      >
        Update Company
      </LoadingButton>
    </Box>
  )
}

export default RegisterFomInputsDetail;