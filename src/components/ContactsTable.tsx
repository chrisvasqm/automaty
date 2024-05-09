import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@mui/material'
import Contact from '../models/Contact'

interface Props {
    contacts: Contact[]
}

const ContactsTable = ({ contacts }: Props) => {
    if (contacts.length === 0)
        return <Typography>There are no contacts to show. Click <a href='/contacts.csv' download='contacts.csv'>here</a> to download a sample.</Typography>

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Email</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {contacts.map((contact, index) =>
                        <TableRow key={index}>
                            <TableCell>{contact.id}</TableCell>
                            <TableCell>{contact.name}</TableCell>
                            <TableCell>{contact.phone}</TableCell>
                            <TableCell>{contact.email}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ContactsTable