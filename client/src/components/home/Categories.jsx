import React from 'react'
import {Button} from '@material-ui/core';
import {makeStyles,TableBody,TableCell,Table,TableRow,TableHead} from '@material-ui/core';
import { categoriess } from '../../constant/data';
import {Link} from 'react-router-dom';
const usestyle=makeStyles({
    create:{
   background:'black',
   color:'#ffffff',
   margin:20,
   borderRadius: 10
    },
    table:{
        border:'1px solid rgba(224,224,224,1)'
    },
    link:{
        textDecoration: 'none',
        color:'inherit'
    }
})
function Categories() {
    const classes=usestyle();
    return (
        <>
        <Link to='/create' className={classes.link}>
        <Button variant="contained" className={classes.create}>Create Blog</Button>
        </Link>
        <Table  className={classes.table}>
            <TableHead>
                <TableRow>
                    <TableCell>
                        <Link to={'/'} className={classes.link}>
                        All Categories
                        </Link>
                        </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    categoriess.map(category => (
                        <TableRow>
                            <TableCell>
                                <Link to={`/?category=${category}`} className={classes.link}>
                                 {category}
                                </Link>
                                 </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
        </>
    )
}

export default Categories;
