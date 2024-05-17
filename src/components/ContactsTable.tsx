import { useState } from 'react';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Typography, Box } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Contact from '../models/Contact';

interface Props {
    contacts: Contact[];
}

const ContactsTable = ({ contacts }: Props) => {
    const [order, setOrder] = useState<'asc' | 'desc'>('asc');
    const [orderBy, setOrderBy] = useState<keyof Contact>('id');

    const handleOnSort = (property: keyof Contact) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const sortedContacts = [...contacts].sort((a, b) => {
        if (a[orderBy] < b[orderBy])
            return order === 'asc' ? -1 : 1;
        if (a[orderBy] > b[orderBy])
            return order === 'asc' ? 1 : -1;
        
        return 0;
    });

    if (contacts.length === 0) {
        return (
            <Typography>
                There are no contacts to show. Click <a href='/contacts.csv' download='contacts.csv'>here</a> to download a sample.
            </Typography>
        );
    }

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        {['id', 'name', 'phone', 'email'].map((column) => (
                            <TableCell key={column} onClick={() => handleOnSort(column as keyof Contact)} style={{ cursor: 'pointer', width: '25%' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    {column.toUpperCase()}
                                    {orderBy === column ? (
                                        order === 'asc' ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />
                                    ) : undefined }
                                </Box>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>

                <TableBody>
                    {sortedContacts.map((contact, index) => (
                        <TableRow key={index}>
                            <TableCell>{contact.id}</TableCell>
                            <TableCell>{contact.name}</TableCell>
                            <TableCell>{contact.phone}</TableCell>
                            <TableCell>{contact.email}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ContactsTable;
