import React, { useEffect, useState } from 'react';
import axios from 'axios';

// importaciones de materia 
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';


// iconos import SearchIcon from '@mui/icons-material/Search';
import SearchIcon from '@mui/icons-material/Search';
import { Grid, IconButton } from '@mui/material';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha("#495057", 0.15),
    '&:hover': {
        backgroundColor: alpha("#495057", 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(1)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const Tabla = () => {
    const [rows, setRows] = useState([]);


    useEffect(() => {
        const consulta = async () => {
            const respuesta = await axios.get(`https://data.mongodb-api.com/app/application-0-eqevm/endpoint/get_orders`);
            setRows(respuesta.data)
            console.log(respuesta.data);
        }
        consulta()

    }, [])
    return (
        <div style={{ margin: "4rem 10%" }}>
            <Grid container style={{ justifyContent: "right" }} >
                <Grid item style={{ margin: "0px 0rem 1rem 0px" }}>
                    <Search>
                        <StyledInputBase
                            placeholder="Buscar..."
                            inputProps={{ 'aria-label': 'search' }}
                        />
                        <IconButton edge="start" sx={{ color: "green", ":hover": { backgroundColor: "#B7EFC5" } }}>
                            <SearchIcon />
                        </IconButton>
                    </Search>
                </Grid>
            </Grid>
            <TableContainer component={Paper} style={{ borderRadius: "10px", border: "1px solid #413F42", boxShadow: "2px 2px 5px 1px #7F8487" }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead >
                        <TableRow>
                            <TableCell align="center" colSpan={3} style={{ padding: "1.2rem 0rem", fontSize: "1.3rem", borderBottom: "1.5px solid black" }}>
                                ORDENES
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align='center'>Responsable</TableCell>
                            <TableCell align="center">Fecha</TableCell>
                            <TableCell align="center">Estado</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align='center' >{row.responsable}</TableCell>
                                <TableCell align="center">{row.fecha}</TableCell>
                                <TableCell align="center">{row.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Tabla