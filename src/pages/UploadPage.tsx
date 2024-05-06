import { Box, Button } from '@mui/material';
import { useState } from 'react';
import Contact from '../models/Contact';
import ContactsTable from '../components/ContactsTable';

const UploadPage = () => {
  const data: Contact[] = [
    { id: 1, name: 'John', phone: '+1 (809) 555-555', email: 'john@gmail.com' },
    { id: 2, name: 'Jose', phone: '+1 (809) 555-555', email: 'jose@gmail.com' },
    { id: 3, name: 'Julian', phone: '+1 (809) 555-555', email: 'julian@gmail.com' },
  ]
  const [contacts, setContact] = useState<Contact[]>([])

  return (
    <Box minWidth={'700px'}>
      <Button variant='contained' onClick={() => setContact(data)}>Upload</Button>

      <ContactsTable contacts={contacts} />
    </Box>
  )
}

export default UploadPage