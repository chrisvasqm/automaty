import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import { matchIsValidTel, MuiTelInput } from 'mui-tel-input'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  firstName: z.string().min(1, 'First Name must have at least 1 character'),
  lastName: z.string().min(1, 'Last Name must have at least 1 character'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(15).max(15)
})

type FormData = z.infer<typeof schema>

const genders = [
  { id: 'gender-male', value: 'male', label: 'Male' },
  { id: 'gender-female', value: 'female', label: 'Female' },
  { id: 'gender-other', value: 'other', label: 'Other' }
]

const StudentsPage = () => {
  const maximumDate = dayjs().subtract(18, 'year');
  const [selectedGender, setSelectedGender] = useState(genders[0].value);
  const [selectedBirthDate, setSelectedBirthDate] = useState(maximumDate.toDate().toLocaleDateString());
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { phone: '' },
  })

  const onSubmit = (data: FormData) => {
    const newData = {
      ...data,
      gender: selectedGender,
      birthDate: selectedBirthDate
    }
    console.log(newData)
    setOpen(true)
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
              defaultValue={genders[0].value}
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={(event => setSelectedGender(event.target.value))}>
              {genders.map(gender =>
                <FormControlLabel
                  key={gender.id}
                  id={gender.id}
                  value={gender.value}
                  label={gender.label}
                  control={<Radio />} />
              )}
            </RadioGroup>
          </FormControl>

          <Controller
            name='phone'
            control={control}
            rules={{ validate: (value) => matchIsValidTel(value, { onlyCountries: ['DO'] }) }}
            render={({ field: { ref: fieldRef, value, ...fieldProps }, fieldState }) => (
              <MuiTelInput
                {...fieldProps}
                disableDropdown
                value={value ?? ''}
                inputRef={fieldRef}
                defaultCountry='DO'
                onlyCountries={['DO']}
                helperText={fieldState.invalid ? 'Phone is invalid' : ''}
                error={fieldState.invalid} />
            )} />

          <DatePicker
            label='Date of birth'
            defaultValue={maximumDate}
            maxDate={maximumDate}
            onChange={date => setSelectedBirthDate(date?.toDate().toLocaleDateString()!)} />

          <Button
            id='register'
            type='submit'
            variant='contained'>
            Register
          </Button>
        </Stack>
      </form>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Thanks for applying
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            We will review your application and contact you in the following days.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} autoFocus>Close</Button>
        </DialogActions>
      </Dialog>
    </Box >
  )
}

export default StudentsPage
