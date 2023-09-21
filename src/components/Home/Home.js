import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Grid, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FavouriteCard from '../Card/FavouriteCard';
import SearchIcon from '@mui/icons-material/Search';
import './Home.css'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Notification from './../../assets/notification.svg'
import AvatarImage from './../../assets/avatar.jpeg'
import MusicIcon from './../../assets/music.svg'
import MovieIcon from './../../assets/movie.svg'
import CollectionCard from "../Card/CollectionCard";
import EducationIcon from "./../../assets/education.svg"
import DocumentIcon from "./../../assets/document.svg"
import FinancialIcon from "./../../assets/financial.svg"


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
                            <path d="M0.300308 1.26756H995.703" stroke="#30387D" strokeOpacity="0.12" strokeWidth="1.18264" />
                        </svg>
                    </div>
                    <Grid container spacing={15} sx={{ paddingTop: 4, paddingBottom: 4 }}>
                        <Grid item xs={6} sm={6} md={3}>
                            <FavouriteCard
                                text='Movies'
                                badge='7'
                                image={MovieIcon} />
                        </Grid>
                        <Grid item xs={6} sm={6} md={3}>
                            <FavouriteCard
                                text='Music'
                                badge='9'
                                image={MusicIcon}
                            />
                        </Grid>
                    </Grid>

                </div>
                <div className='recentCollection'>
                    <div className='headingText'>
                        Recent Collections
                        &nbsp;&nbsp;&nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="950" height="2" viewBox="0 0 996 2" fill="none">
                            <path d="M0.300308 1.26756H995.703" stroke="#30387D" strokeOpacity="0.12" strokeWidth="1.18264" />
                        </svg>
                    </div>
                    <Grid container spacing={2} sx={{ paddingTop: 4, paddingBottom: 4, display: 'flex', flexDirection: 'row' }}>
                        <Grid item xs={12} sm={6} md={3}>
                            <CollectionCard
                                text='Education'
                                badge='11'
                                image={EducationIcon} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <CollectionCard
                                text='Document'
                                badge='8'
                                image={DocumentIcon}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <CollectionCard
                                text='Financial'
                                badge='3'
                                image={FinancialIcon}
                            />
                        </Grid>
                    </Grid>
                </div>
                <div className='allCollection'>
                    <div className='headingText'>
                        All Collections
                        &nbsp;&nbsp;&nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="950" height="2" viewBox="0 0 996 2" fill="none">
                            <path d="M0.300308 1.26756H995.703" stroke="#30387D" strokeOpacity="0.12" strokeWidth="1.18264" />
                        </svg>
                    </div>
                    <Grid container spacing={2} sx={{ paddingTop: 4, paddingBottom: 4, flexDirection: 'row' }}>
                        <Grid item xs={12} sm={6} md={3}>
                            <CollectionCard
                                text='Education'
                                badge='11'
                                image={EducationIcon} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <CollectionCard
                                text='Document'
                                badge='8'
                                image={DocumentIcon}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <CollectionCard
                                text='Financial'
                                badge='3'
                                image={FinancialIcon}
                            />
                        </Grid>
                    </Grid>
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
                                        InputLabelProps={{
                                            fontFamily: 'Poppins',
                                        }}
                                        InputProps={{
                                            disableUnderline: true,

                                            color: '#30387d85',
                                            startAdornment: (
                                                <SearchIcon color="#30387d85" fontSize="medium" />
                                            ),
                                        }}
                                        sx={{
                                            input: {

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

                                <div className="addcollectionHeaderext">
                                    Add collection
                                </div>
                                <div className="form-group">
                                    <label className='labelText'>
                                        Collection Name
                                    </label>
                                    <input
                                        type="Collection name here"
                                        className="form-control"
                                        placeholder="Collection name here"
                                    />
                                </div>

                                <div className="form-group">

                                    <label className='labelText'>
                                        Select  Icon Color
                                    </label>
                                    {/* <Dropdown /> */}
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Pink"
                                    />
                                </div>
                                <button type="submit" className="loginButton">
                                    Add collection
                                    {/* + */}
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