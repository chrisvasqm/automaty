import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import { MuiTelInput } from 'mui-tel-input'
import { useState } from 'react'

const StudentsPage = () => {
  const [phone, setPhone] = useState('');

  const handlePhoneChange = (newPhone: string) => setPhone(newPhone)

  return (
    <Box paddingTop={2}>
      <Typography fontSize={20} align='center'>Students Form</Typography>
      <form>
        <Stack paddingTop={2} gap={2}>
          <TextField
            id='firstName'
            type='text'
            label='First Name' />

          <TextField
            id='lastName'
            type='text'
            label='Last Name' />

          <TextField
            id='email'
            type='email'
            label='Email' />

          <FormControl id='radio-gender'>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group">
              <FormControlLabel id='gender-female' value="female" control={<Radio />} label="Female" />
              <FormControlLabel id='gender-male' value="male" control={<Radio />} label="Male" />
              <FormControlLabel id='gender-other' value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>

          <MuiTelInput
            id='phone'
            label='Phone'
            value={phone}
            onChange={handlePhoneChange}
            defaultCountry='DO' />

          <DatePicker
            label='Date of birth'
            maxDate={dayjs().subtract(18, 'year')} />

          <Button
            id='register'
            type='submit'
            variant='contained'>
            Register
          </Button>
        </Stack>
      </form>
    </Box>

  )
}

export default StudentsPage
