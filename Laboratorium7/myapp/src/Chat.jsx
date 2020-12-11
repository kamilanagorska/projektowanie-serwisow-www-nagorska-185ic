import React from "react";
import Form from './Form'
import Radio from './Radio'
import Selector from './Selector'
import Range from './Range'
import Accept from './Accept'

const Chat = () => (
<div className="card" style={{width: '70%', margin: 'auto', marginTop: '50px', marginBottom: '50px'}}>
    <div className="card-header" style={{fontFamily: 'Amita', fontSize: '30px'}}>
        Chat options
    </div>
  <div className="card-body">
    <p>Please, fulfill these information to chat with other people.</p>
    <Form />
    <Radio />
    <p>Who do you want to chat with?</p>
    <Selector />
    <Range />
    <Accept />
    <button type="button" class="btn btn-outline-secondary btn-lg" style={{marginLeft: '5px'}}>Start chatting</button>
  </div>
</div>
);
export default Chat;