import Grid from '@mui/material/Grid';

import ModuleCard from '../ModuleCard';
import cardContent from '../../content';

const Today = () => {
    const contentCards = cardContent.map(content => {
        return (
          <ModuleCard 
            {...content}
          />
        )
    });
      
    return (
        <Grid container spacing={2}>
            {contentCards}
        </Grid>
    )
}

export default Today;