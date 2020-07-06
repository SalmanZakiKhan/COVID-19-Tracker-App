import React from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {BeatLoader} from 'react-spinners';
import CountUp from 'react-countup';

function Cards({currentNumbers : {confirmed,recovered,deaths,lastUpdate}}) {

  if(!confirmed){
    return <BeatLoader loading size={100} color="maroon" />
  }
  
return (
 <div>
 <Grid container spacing={3} justify="center">
     <Grid item xs={12} md={3} component={Card} className="card confirmed">
        <CardContent>
          <Typography variant="h6" gutterbottom>Total number of cases</Typography>
          <Typography variant="h6"> 
             <CountUp start={0} end={confirmed.value} duration={2} separator={","}/>
          </Typography>
          <Typography>{new Date(lastUpdate).toLocaleString()}</Typography>
       </CardContent>
   </Grid>
   <Grid item xs={12} md={3} component={Card} className="card recovered">
        <CardContent>
          <Typography variant="h6" gutterbottom>Total number of recoveries</Typography>
          <Typography variant="h6" gutterbottom>
            <CountUp start={0} end={recovered.value} duration={2} separator={","}/>
          </Typography>
          <Typography>{new Date(lastUpdate).toLocaleString()}</Typography>
       </CardContent>
   </Grid>
   <Grid item xs={12} md={3} component={Card} className="card deaths">
        <CardContent>
          <Typography variant="h6" gutterbottom>Total number of deaths</Typography>
          <Typography variant="h6" gutterbottom>
            <CountUp start={0} end={deaths.value} duration={2} separator={","}/>
          </Typography>
          <Typography>{new Date(lastUpdate).toLocaleString()}</Typography>
       </CardContent>
   </Grid>
 </Grid>
</div>
);

    
}

export default Cards
