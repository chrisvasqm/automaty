import { Box, Button, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { useCSVReader } from 'react-papaparse';
import { z } from 'zod';
import ContactsTable from '../components/ContactsTable';
import Contact from '../models/Contact';

const schema = z.array(
  z.object({
    id: z.string(),
    name: z
      .string({ required_error: 'Name is required' })
      .min(1, 'Name must be at least 1 character long'),
    phone: z
      .string({ required_error: 'Phone is required' })
      .min(5, 'Phone must be greater than 5 characters long')
      .max(20, 'Phone must be less than 20 characters long'),
    email: z
      .string({ required_error: 'Email is required' })
      .email()
  })
)

const UploadPage = () => {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [errors, setErrors] = useState<string[]>([]);

  const { CSVReader } = useCSVReader()

  const handleUpload = (results: { data: Contact[] }) => {
    // Remove all the headers (e.g. id, name, phone, email)
    const rawData = results.data.slice(1)

    // Extract the data from each row in the CSV
    const contacts: Contact[] = rawData.map((row: any) => (
      {
        id: row[0],
        name: row[1].trim(),
        phone: row[2].trim(),
        email: row[3].trim()
      }
    ));

    const validation = schema.safeParse(contacts);
    if (!validation.success) {
      const { errors } = validation.error;

      setErrors(errors.map(error => `Error: ${error.message.toLowerCase()}. Please check your CSV`));
      return;
    }

    setErrors([]);
    setContacts(contacts)
  }

  return (
    <Box minWidth={'700px'} marginTop={2}>
      <Stack gap={2}>
        <Typography variant='h4'>Contacts</Typography>

        <Typography>
          Upload some random contacts information from .csv file and it will render on
          a beautiful table on this page with controls to sort by ID, Name, Phone or Email,
          in ascending or descending order.
        </Typography>

        {/* When there's at least one validation error, render the errors. Otherwise, render the Contacts */}
        {
          errors.length > 0 ?
            errors.map((error, index) => <Typography key={index} color={'red'}>{error}</Typography>) :
            <ContactsTable contacts={contacts} />
        }

        <Stack direction={'row'} gap={1} marginBottom={1}>
          <CSVReader
            onUploadAccepted={handleUpload}
          >
            {({
              getRootProps
            }: any) => (
              <Button
                variant='contained'
                disabled={contacts.length > 0}
                {...getRootProps()}>
                Upload
              </Button>
            )}
          </CSVReader>

          <Button
            variant='contained'
            disabled={contacts.length === 0}
            onClick={() => setContacts([])}
          >
            Clear
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}

export default UploadPage