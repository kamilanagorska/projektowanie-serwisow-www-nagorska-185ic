import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';


const CheckboxList = props => (
  <List style={{width: '99%', margin: 'auto', backgroundColor: '#edf0f0', marginBottom: '10px'}}>
    <ListItem key={props.id} role={undefined}>
      <ListItemText id={props.id} primary={`${props.name}, ${props.age}, ${props.gender}, ${props.country} `}/>
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="comments">
            <CommentIcon />
          </IconButton>
        </ListItemSecondaryAction>
    </ListItem>
  </List>

)
export default CheckboxList;

