import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
       <Box display={'flex'}  flexDirection={'column'} alignItems={'center'}>
        <Button LinkComponent={Link} to="/books" variant='contained' sx={{marginTop:15, backgroundColor:'orangered'}}>
          <Typography variant='h3'>View All Books</Typography>
        </Button>
       </Box>
    </div>
  )
}
