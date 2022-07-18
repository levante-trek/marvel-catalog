import {
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

export interface ContractFormProps {
  className?: string;
  name: string;
  heroeDescription: string;
  image: string;
}

const contractTypeOptions = [
  {
    value: 'Temporal',
  },
  {
    value: 'Unlimited',
  },
  {
    value: 'Job',
  },
];

export const ContractForm: React.FunctionComponent<ContractFormProps> = ({
  className,
  name,
  heroeDescription,
  image,
}) => {
  const [type, setType] = useState('');
  const [contractDescription, setContractDescription] = useState('');

  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setContractDescription(event.target.value);
  };

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    //add POST to db.json here
  };

  //console.log(description);
  return (
    <Box component='form' autoComplete='off' mt={3} onSubmit={handleSubmit}>
      <FormControl sx={{ mb: 3 }} fullWidth variant='standard'>
        <TextField id='contract-name' label='Nombre del contrato' />
      </FormControl>
      <FormControl sx={{ mb: 2 }} fullWidth>
        <TextField
          id='contract-type'
          label='Tipo de contrato'
          select
          value={type}
          onChange={handleTypeChange}
          SelectProps={{
            native: true,
          }}
          helperText='Selecciona el tipo de contrato'
        >
          {contractTypeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.value}
            </option>
          ))}
        </TextField>
      </FormControl>
      <FormControl sx={{ mb: 2 }} fullWidth>
        <TextField
          id='contract-description'
          label='Descripción del contrato'
          multiline
          helperText='Describa el trabajo a realizar.'
          value={contractDescription}
          onChange={handleDescriptionChange}
          rows={6}
        />
      </FormControl>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Typography align='left'>Heroe: {name}</Typography>
          <img src={image} alt='' width='100%' />
        </Grid>
        <Grid item xs={5}>
          <Typography variant='body1'>{heroeDescription}</Typography>
        </Grid>

        <Grid
          item
          xs={4}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'right',
          }}
        >
          <Button variant='contained' type='submit'>
            Contratar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
