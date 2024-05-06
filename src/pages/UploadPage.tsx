import { Box, Button, Stack } from '@mui/material';
import { useState } from 'react';
import Contact from '../models/Contact';
import ContactsTable from '../components/ContactsTable';

const data: Contact[] = [
  { id: 1, name: 'John', phone: '+1 (809) 555-555', email: 'john@gmail.com' },
  { id: 2, name: 'Jose', phone: '+1 (809) 555-555', email: 'jose@gmail.com' },
  { id: 3, name: 'Julian', phone: '+1 (809) 555-555', email: 'julian@gmail.com' },
]

const UploadPage = () => {
  const [contacts, setContact] = useState<Contact[]>([])

  return (
    <Box minWidth={'700px'} marginTop={2}>
      <Stack direction={'row'} gap={1} marginBottom={1}>
        <Button
          variant='contained'
          disabled={contacts.length > 0}
          onClick={() => setContact(data)}>
          Upload
        </Button>

        <Button
          variant='contained'
          disabled={contacts.length === 0}
          onClick={() => setContact([])}
        >
          Clear
        </Button>
      </Stack>

      <ContactsTable contacts={contacts} />
    </Box>
  )
}

export default UploadPage