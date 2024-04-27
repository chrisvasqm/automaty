import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import { MuiTelInput } from 'mui-tel-input'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  firstName: z.string().min(1, 'First name must have at least 1 character'),
  lastName: z.string().min(1, 'Last name must have at least 1 character'),
  email: z.string().email('Invalid email')
})

type FormData = z.infer<typeof schema>

const StudentsPage = () => {
  const [phone, setPhone] = useState('');
  const handlePhoneChange = (newPhone: string) => setPhone(newPhone)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = (data: FormData) => {
    console.log(data);
  }

  return (
    <Box paddingTop={2}>
      <Typography fontSize={20} align='center'>Students Form</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack paddingTop={2} gap={2}>
          <TextField
            id='firstName'
            type='text'
            label='First Name'
            error={errors.firstName !== undefined}
            helperText={errors.firstName?.message}
            {...register('firstName')} />

          <TextField
            id='lastName'
            type='text'
            label='Last Name'
            error={errors.lastName !== undefined}
            helperText={errors.lastName?.message}
            {...register('lastName')} />

          <TextField
            id='email'
            type='email'
            label='Email'
            error={errors.email !== undefined}
            helperText={errors.email?.message}
            {...register('email')} />

          <FormControl id='radio-gender'>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              row
              defaultValue='female'
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
