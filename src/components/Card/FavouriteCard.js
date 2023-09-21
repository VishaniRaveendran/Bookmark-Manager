import React from 'react'
import { Card } from '@mui/material'

const FavouriteCard = ({ title, image, description }) => (
  <div className="card">
    <Card>
      <img src={image} alt={title} />
      <div className="card-body">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Card>

  </div>
)

export default FavouriteCard
