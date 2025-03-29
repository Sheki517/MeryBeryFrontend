import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  TextField,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Paper,
  InputAdornment,
  Button,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const allFlowerTypes = [
  'Roses',
  'Tulips',
  'Sunflowers',
  'Daisies',
  'Orchids',
  'Lilies',
  'Carnations',
  'Hydrangeas',
  'Peonies',
  'Irises',
  'Daffodils',
  'Chrysanthemums',
  'Gerberas',
  'Snapdragons',
  'Zinnias',
  'Marigolds',
  'Pansies',
  'Dahlias',
  'Gladiolus',
  'Freesias',
  'Ranunculus',
  'Anemones',
  'Delphiniums',
  'Sweet Peas',
  'Asters',
  'Cosmos',
  'Calendula',
  'Lavender',
  'Baby\'s Breath',
  'Statice',
  'Alstroemeria',
  'Bouvardia',
  'Calla Lilies',
  'Lisianthus',
  'Protea',
  'Birds of Paradise',
  'Gardenias',
  'Jasmine',
  'Magnolias',
  'Camellias'
];

// Initial 10 common flower types
const commonFlowerTypes = allFlowerTypes.slice(0, 10);

function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllFlowers, setShowAllFlowers] = useState(false);
  const navigate = useNavigate();

  const handleFlowerClick = (flowerType) => {
    navigate(`/farms/${flowerType}`);
  };

  const handleBrowseAll = () => {
    setShowAllFlowers(true);
  };

  const handleBackToCommon = () => {
    setShowAllFlowers(false);
  };

  const currentFlowerList = showAllFlowers ? allFlowerTypes : commonFlowerTypes;
  const filteredFlowers = currentFlowerList.filter(flower =>
    flower.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
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
        🌸 Flower Marketplace 🌸
      </Typography>
      
      <Paper 
        elevation={3} 
        sx={{ 
          p: 2, 
          mb: 3,
          borderRadius: 2,
          border: '1px solid',
          borderColor: 'secondary.main',
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search by flower variety..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="primary" />
              </InputAdornment>
            ),
          }}
        />
      </Paper>

      <Box sx={{ display: 'flex', gap: 3, flexDirection: 'row-reverse' }}>
        <Paper 
          elevation={3} 
          sx={{ 
            width: 300, 
            p: 2,
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'secondary.main',
            maxHeight: '70vh',
            overflow: 'auto'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            {showAllFlowers && (
              <Button
                startIcon={<ArrowBackIcon />}
                onClick={handleBackToCommon}
                sx={{ 
                  color: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'secondary.light',
                  },
                }}
              >
                Back to Common
              </Button>
            )}
            <Typography 
              variant="h6" 
              sx={{ 
                color: 'primary.main',
                fontWeight: 'bold',
                textAlign: 'center',
                flex: 1
              }}
            >
              {showAllFlowers ? 'All Flower Types' : 'Common Flowers'}
            </Typography>
          </Box>
          <List>
            {filteredFlowers.map((flower) => (
              <ListItem key={flower} disablePadding>
                <ListItemButton 
                  onClick={() => handleFlowerClick(flower)}
                  sx={{
                    '&:hover': {
                      backgroundColor: 'secondary.light',
                    },
                    borderRadius: 1,
                    mb: 0.5,
                  }}
                >
                  <ListItemText 
                    primary={flower}
                    primaryTypographyProps={{
                      sx: { color: 'primary.main' }
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Paper>

        <Box sx={{ flex: 1 }}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 3,
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'secondary.main',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2
            }}
          >
            <Typography 
              variant="h6" 
              gutterBottom 
              sx={{ 
                color: 'primary.main',
                fontWeight: 'bold'
              }}
            >
              Welcome to Mery Bery Flower Marketplace
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {showAllFlowers 
                ? 'Browse through our complete collection of flowers.'
                : 'Select a flower type from the list to view available farms and their offerings.'}
            </Typography>
            {!showAllFlowers && (
              <>
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&h=600&fit=crop"
                  alt="Colorful spring flowers in bloom"
                  sx={{
                    width: '100%',
                    maxWidth: 400,
                    height: 'auto',
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'secondary.main',
                    boxShadow: 1,
                    mb: 3,
                    opacity: 0.9,
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.01)',
                      opacity: 1,
                      boxShadow: 2,
                    },
                  }}
                />
                <Button 
                  variant="contained" 
                  color="primary"
                  onClick={handleBrowseAll}
                  sx={{ 
                    mt: 2,
                    py: 1.5,
                    px: 4,
                    fontSize: '1.1rem'
                  }}
                >
                  Browse All Flowers
                </Button>
              </>
            )}
          </Paper>
        </Box>
      </Box>
    </Container>
  );
}

export default Dashboard; 