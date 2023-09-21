import { Avatar, Badge, Card, CardContent, CardHeader, IconButton } from '@mui/material'
import React from 'react'
import { pink } from '@mui/material/colors';
import './card.css'

const CollectionCard = ({ text, image, badge }) => {
    return (
        <Card variant="solid" sx={{ borderRadius: 4, maxWidth: 250, minWidth: 200, minHeight: 20, alignItems: 'center', }}>
            <CardHeader
                action={
                    <IconButton aria-label="" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="6" viewBox="0 0 22 6" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.8325 0.660313C1.52619 0.660313 0.467224 1.71928 0.467224 3.02558C0.467224 4.33189 1.52619 5.39086 2.8325 5.39086C4.1388 5.39086 5.19777 4.33189 5.19777 3.02558C5.19777 1.71928 4.1388 0.660313 2.8325 0.660313ZM8.74567 3.02558C8.74567 1.71928 9.80464 0.660313 11.1109 0.660313C12.4172 0.660313 13.4762 1.71928 13.4762 3.02558C13.4762 4.33189 12.4172 5.39086 11.1109 5.39086C9.80464 5.39086 8.74567 4.33189 8.74567 3.02558ZM17.0241 3.02558C17.0241 1.71928 18.0831 0.660313 19.3894 0.660313C20.6957 0.660313 21.7547 1.71928 21.7547 3.02558C21.7547 4.33189 20.6957 5.39086 19.3894 5.39086C18.0831 5.39086 17.0241 4.33189 17.0241 3.02558Z" fill="#30387D" fill-opacity="0.12" />
                        </svg>
                    </IconButton>
                }
            />
            <CardContent sx={{ alignItems: 'center', padding: 0, paddingLeft: 2 }}>
                <Badge badgeContent={badge} color="primary" overlap="circular">
                    <Avatar sx={{ bgcolor: pink[500], width: 55, height: 55 }}>
                        <img className='ImageIcon' src={image} alt="bookmark" style={{ width: 70, height: 70 }} />
                    </Avatar>

                </Badge>
                <div className="typeText">
                    <div className="typeNameText">{text}</div>
                </div>

            </CardContent>

        </Card>
    )
}

export default CollectionCard
