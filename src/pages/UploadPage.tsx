import { Box, Button, Stack } from '@mui/material';
import { useState } from 'react';
import { useCSVReader } from 'react-papaparse';
import ContactsTable from '../components/ContactsTable';
import Contact from '../models/Contact';

const UploadPage = () => {
  const [contacts, setContacts] = useState<Contact[]>([])
  const { CSVReader } = useCSVReader();

  const handleUpload = (results: any) => {
    const removedHeaders = results.data
      .slice(1);
    const data = removedHeaders.map((row: any) =>
    ({
      id: row[0],
      name: row[1],
      phone: row[2],
      email: row[3]
    }));

    setContacts(data);
  }

  return (
    <Box minWidth={'700px'} marginTop={2}>
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

      <ContactsTable contacts={contacts} />
    </Box>
  )
}

export default UploadPage