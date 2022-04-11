import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Paper from '@mui/material/Paper';
import { FormControl,TextField } from '@mui/material';

export default function RecipeReviewCard() {
  const valueRef = React.useRef('');
  


  return (
    <Paper sx={{ p:5,
      width: 400,
      height: 500, }}>
      <form>
        <FormControl fullWidth>
        <TextField
          label="Document"
          multiline
          rows={4}
          inputRef={valueRef}
          placeholder="Paste Content Here....."
          variant="filled"
         
        />
        </FormControl>
      </form>
    </Paper>
  );
}

