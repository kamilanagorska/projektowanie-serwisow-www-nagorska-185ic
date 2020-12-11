import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
function MyCard() {
  return (
    <Card style={{backgroundColor: '#f0f2f2', width: '70%', margin: 'auto', marginTop: '50px'}}>
      <CardContent>
        <Typography variant="h4" component="h2" style={{fontFamily: 'Amita'}}>
            Welcome to our website!
        </Typography>
        <Typography color="textSecondary">
          We are so happy that you decided to visit our website. We hope that you will spend here good time and you will find some great friends.
        </Typography>
        <Typography variant="body2" component="p">
          Remember to be nice to others!
        </Typography>
      </CardContent>
    </Card>
  );
}
export default MyCard;