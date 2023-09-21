import React from 'react';
import './card.css'
import CardHeader from '@mui/material/CardHeader'
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton'
import { Card } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { pink } from '@mui/material/colors';
import CardContent from '@mui/material/CardContent';


const FavoriteCard = ({ image, badge, text }) => {
  return (
    <Card variant="solid" sx={{ borderRadius: 4, maxWidth: 250, minWidth: 280, minHeight: 20 }}>
      <CardHeader
        action={
          <IconButton aria-label="" >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="6" viewBox="0 0 22 6" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M2.8325 0.660313C1.52619 0.660313 0.467224 1.71928 0.467224 3.02558C0.467224 4.33189 1.52619 5.39086 2.8325 5.39086C4.1388 5.39086 5.19777 4.33189 5.19777 3.02558C5.19777 1.71928 4.1388 0.660313 2.8325 0.660313ZM8.74567 3.02558C8.74567 1.71928 9.80464 0.660313 11.1109 0.660313C12.4172 0.660313 13.4762 1.71928 13.4762 3.02558C13.4762 4.33189 12.4172 5.39086 11.1109 5.39086C9.80464 5.39086 8.74567 4.33189 8.74567 3.02558ZM17.0241 3.02558C17.0241 1.71928 18.0831 0.660313 19.3894 0.660313C20.6957 0.660313 21.7547 1.71928 21.7547 3.02558C21.7547 4.33189 20.6957 5.39086 19.3894 5.39086C18.0831 5.39086 17.0241 4.33189 17.0241 3.02558Z" fill="#30387D" fill-opacity="0.12" />
            </svg>
          </IconButton>
        }
      />
      <CardContent orientation="horizontal" sx={{ display: 'flex', alignItems: 'center', padding: 0, paddingLeft: 2 }}>
        <Badge badgeContent={badge} color="primary" overlap="circular">
          <Avatar sx={{ bgcolor: pink[500], width: 55, height: 55 }}>
            <img className='ImageIcon' src={image} alt="bookmark" style={{ width: 70, height: 70 }} />
          </Avatar>

        </Badge>

        <div className="typeName">{text}</div>
      </CardContent>
      <div className='favourite'>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="23" viewBox="0 0 26 23" fill="none">
          <path d="M23.5651 2.65304C22.9611 2.04871 22.2439 1.56932 21.4546 1.24225C20.6652 0.915179 19.8191 0.746834 18.9647 0.746834C18.1103 0.746834 17.2642 0.915179 16.4748 1.24225C15.6855 1.56932 14.9683 2.04871 14.3642 2.65304L13.1107 3.90663L11.8571 2.65304C10.6369 1.43292 8.98211 0.747466 7.2566 0.747466C5.5311 0.747466 3.87627 1.43292 2.65615 2.65304C1.43603 3.87315 0.75058 5.52798 0.75058 7.25349C0.75058 8.97899 1.43603 10.6338 2.65615 11.8539L3.90974 13.1075L13.1107 22.3084L22.3116 13.1075L23.5651 11.8539C24.1695 11.2499 24.6489 10.5327 24.9759 9.74336C25.303 8.954 25.4714 8.10793 25.4714 7.25349C25.4714 6.39905 25.303 5.55298 24.9759 4.76362C24.6489 3.97426 24.1695 3.25707 23.5651 2.65304Z" fill="#6A82FF" fill-opacity="0.18" />
        </svg>
      </div>
    </Card>
  );
};

export default FavoriteCard;
