import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Grid, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FavouriteCard from '../Card/FavouriteCard';
import SearchIcon from '@mui/icons-material/Search';
import './Home.css'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Notification from './../../assets/notification.svg'
import AvatarImage from './../../assets/avatar.jpeg'

function Home() {


    const drawerWidth = 240;

    return (
        <div className='homebackground'>

            <div className='homeContainer'>
                <div className='homeHeader'>Home</div>
                <Button variant="contained" endIcon={<AddIcon />} sx={{
                    fontFamily: 'Poppins',
                    fontSize: 14,
                    marginTop: 2,
                    marginBottom: 4,
                    display: 'flex',
                    borderRadius: 2,
                    width: 180,
                    height: 50,
                    background: '#6A82FF',
                    textTransform: "none",
                    fontWeight: 400,
                }}>
                    Create Folder
                </Button>
                <div className='favorite'>
                    <div className='headingText'>
                        My favorite
                        &nbsp;&nbsp;&nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="950" height="2" viewBox="0 0 996 2" fill="none">
                            <path d="M0.300308 1.26756H995.703" stroke="#30387D" stroke-opacity="0.12" stroke-width="1.18264" />
                        </svg>
                    </div>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={3}>
                            <FavouriteCard
                                title='My first folder'
                                image='https://images.unsplash.com/photo-1634179127416-4b5b8b5b5b0b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80'
                                description='This is my first folder' />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <FavouriteCard
                                title='My first folder'
                                image='https://images.unsplash.com/photo-1634179127416-4b5b8b5b5b0b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80'
                                description='This is my first folder' />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <FavouriteCard
                                title='My first folder'
                                image='https://images.unsplash.com/photo-1634179127416-4b5b8b5b5b0b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80'
                                description='This is my first folder' />
                        </Grid>
                    </Grid>

                </div>
                <div className='recentCollection'>
                    <div className='headingText'>
                        Recent Collections
                        &nbsp;&nbsp;&nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="950" height="2" viewBox="0 0 996 2" fill="none">
                            <path d="M0.300308 1.26756H995.703" stroke="#30387D" stroke-opacity="0.12" stroke-width="1.18264" />
                        </svg>
                    </div>
                </div>
                <div className='allCollection'>
                    <div className='headingText'>
                        All Collections
                        &nbsp;&nbsp;&nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="950" height="2" viewBox="0 0 996 2" fill="none">
                            <path d="M0.300308 1.26756H995.703" stroke="#30387D" stroke-opacity="0.12" stroke-width="1.18264" />
                        </svg>
                    </div>
                </div>

            </div>
            <div>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                    }}
                    variant="permanent"
                    anchor="right"
                >
                    <Stack className="sidebarContainer" spacing={1} direction="column">
                        <div className="searchbarContainer">
                            <Stack spacing={2} direction="row">
                                <div className="search-bar">
                                    <TextField
                                        placeholder="Search"
                                        variant="standard"
                                        size="large"
                                        // onChange={handleSearch}
                                        InputLabelProps={{
                                            fontFamily: 'Poppins',
                                        }}
                                        InputProps={{
                                            disableUnderline: true,
                                            paddingLeft: 4,
                                            color: '#30387d85',
                                            startAdornment: (
                                                <SearchIcon color="#30387d85" fontSize="medium" />
                                            ),
                                        }}
                                        sx={{
                                            input: {
                                                paddingLeft: 1,
                                                color: '#30387d85',
                                                "&::placeholder": {
                                                    fontFamily: 'poppins',
                                                    opacity: 1,
                                                    fontStyle: 'italic',
                                                },
                                            },
                                            borderRadius: 2,
                                            backgroundColor: '#FFFFFF',
                                            boxShadow: 2,
                                        }} />

                                </div>
                                <div className="Notification">
                                    <Avatar src={Notification} sx={{ color: '#ffffff', boxShadow: 2 }} />
                                </div>
                                <div className="Avatar">
                                    <Avatar src={AvatarImage} sx={{ border: 3, color: "#ffffff", boxShadow: 2 }} />
                                </div>
                            </Stack>

                        </div>
                        <div className="collectionContainer">
                            <form className='addCollectionForm'>

                                <div className="addcollectionHeaderext">Add collection</div>




                                <div className="form-group">
                                    <label className='labelText'>
                                        Collection Name
                                    </label>
                                    <input
                                        type="Collection name here"
                                        className="form-control"
                                        placeholder="Email address here"
                                    />
                                </div>

                                <div className="form-group">
                                    <label className='labelText'>
                                        Select  Icon Color
                                    </label>

                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Pink"
                                    />
                                </div>
                                <button type="submit" className="loginButton">
                                    Login
                                </button>
                            </form>


                        </div>
                    </Stack>

                </Drawer>

            </div>
            <div>


            </div>


        </div>
    );
}

export default Home;