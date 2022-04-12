import * as React from 'react';
import { FormControl,TextField,Stack,MenuItem,Select,InputLabel,Button,Paper,styled,Typography } from '@mui/material';
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#932439',
  "&:hover":{
    backgroundColor: '#781d2e'
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& label.Mui-focused': {
    color: '#932439',
  },
  '& .MuiFilledInput-underline:after': {
    borderBottomColor: '#932439',
  },
 
  '& .MuiFilledInput-root': {
    backgroundColor: '#f5f5f5' ,
    transition: theme.transitions.create([
      'background-color',
    ]),
    '&:hover': {
      backgroundColor: 'transparent' ,
    },
    '&.Mui-focused fieldset': {
      borderColor: '#932439',
    },
  },
}));
const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(255,255,255, .9)'
}));

const StyledInputLabel = styled(InputLabel)(({ theme })=>({
// '& .MuiInputLabel-filled-root':{
  
  '&.Mui-focused': {
    color: '#932439',
  },
  
// }
}));
const StyledSelect = styled(Select)(({ theme }) => ({
  backgroundColor: '#f5f5f5' ,
  '&:hover': {
    backgroundColor: 'transparent' ,
  },
  ':after': {
    borderBottomColor: '#932439',
  },
}));
export default function RecipeReviewCard() {
  const valueRef = React.useRef('');
  const [similarityMeasure, setsimilarityMeasure] = React.useState('');

  const handleChange = (event) => {
    setsimilarityMeasure(event.target.value);
  };


  return (
    <StyledPaper sx={{ p:5,
      width: 400,
      height: 430, }}>
      <form>
      <Stack
      direction="column"
      justifyContent="center"
      alignItems="stretch" 
      spacing={3}>
        <Typography variant="h5" component="h5">
           Key Phrase Detection
        </Typography>
      <FormControl>
        <StyledTextField
          label="Document"
          multiline
          rows={4}
          inputRef={valueRef}
          placeholder="Paste Content Here....."
          variant="filled"
         
        />
        </FormControl>
        <FormControl >
        <StyledTextField  variant="filled" label="Keyword Length" defaultValue={1} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
        </FormControl>

        <FormControl >
        <StyledInputLabel variant="filled" id="similarity-select-label">Similarity Measures</StyledInputLabel>
        <StyledSelect
          labelId="similarity-select-labell"
          id="similarity-select"
          value={similarityMeasure}
          label="Similarity Measure"
          onChange={handleChange}
          variant="filled"
        >
          <MenuItem value='cs'>Cosine Similarity</MenuItem>
          <MenuItem value='mss'>Max Sum Similarity</MenuItem>
          <MenuItem value='mmr'>Maximal Marginal Relevance</MenuItem>
        </StyledSelect>
      </FormControl>
      <StyledButton variant="contained" >Submit</StyledButton>
      </Stack>
      
      </form>
    </StyledPaper>
  );
}

