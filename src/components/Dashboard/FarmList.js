import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  Paper,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Mock data - replace with actual API call
const mockFarms = {
  Roses: [
    {
      id: 1,
      name: 'Rose Valley Farm',
      location: 'California',
      price: '$2.50 per stem',
      available: '500 stems',
      description: 'Premium quality roses grown in optimal conditions.',
    },
    {
      id: 2,
      name: 'Sweet Rose Gardens',
      location: 'Oregon',
      price: '$2.00 per stem',
      available: '300 stems',
      description: 'Organic roses with exceptional fragrance.',
    },
  ],
  Tulips: [
    {
      id: 3,
      name: 'Tulip Haven',
      location: 'Washington',
      price: '$1.75 per stem',
      available: '1000 stems',
      description: 'Colorful tulips in various varieties.',
    },
  ],
};

function FarmList() {
  const { flowerType } = useParams();
  const navigate = useNavigate();
  const farms = mockFarms[flowerType] || [];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate('/')}
        sx={{ 
          mb: 3,
          color: 'primary.main',
          '&:hover': {
            backgroundColor: 'secondary.light',
          },
        }}
      >
        Back to Dashboard
      </Button>

      <Typography 
        variant="h4" 
        component="h1" 
        gutterBottom
        sx={{ 
          color: 'primary.main',
          fontWeight: 'bold',
          textAlign: 'center',
          mb: 4
        }}
      >
        🌸 {flowerType} Farms 🌸
      </Typography>

      {farms.length === 0 ? (
        <Paper 
          elevation={3} 
          sx={{ 
            p: 3, 
            textAlign: 'center',
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'secondary.main',
          }}
        >
          <Typography variant="h6" color="primary.main">
            No farms found for {flowerType}
          </Typography>
        </Paper>
      ) : (
        <Grid container spacing={3}>
          {farms.map((farm) => (
            <Grid item xs={12} md={6} key={farm.id}>
              <Card 
                sx={{ 
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'secondary.main',
                  '&:hover': {
                    boxShadow: 6,
                    borderColor: 'primary.main',
                  },
                }}
              >
                <CardContent>
                  <Typography 
                    variant="h5" 
                    component="h2" 
                    gutterBottom
                    sx={{ color: 'primary.main', fontWeight: 'bold' }}
                  >
                    {farm.name}
                  </Typography>
                  <Typography 
                    color="text.secondary" 
                    gutterBottom
                    sx={{ color: 'secondary.main' }}
                  >
                    Location: {farm.location}
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {farm.description}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="primary.main"
                    sx={{ fontWeight: 'bold' }}
                  >
                    Price: {farm.price}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="primary.main"
                    sx={{ fontWeight: 'bold' }}
                  >
                    Available: {farm.available}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button 
                    size="small" 
                    color="primary"
                    sx={{ 
                      '&:hover': {
                        backgroundColor: 'secondary.light',
                      },
                    }}
                  >
                    Contact Farm
                  </Button>
                  <Button 
                    size="small" 
                    color="primary"
                    sx={{ 
                      '&:hover': {
                        backgroundColor: 'secondary.light',
                      },
                    }}
                  >
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default FarmList; 