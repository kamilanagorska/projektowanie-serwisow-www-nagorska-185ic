import React, {Component} from "react";
import List from './List'
import Dialog from './Dialog'
import Swi from './Switch'

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfUsers: [
                { id: 0, name: "Lucy", gender: "Female", country: "USA", age: 18 },
                { id: 1, name: "Jack", gender: "Male",country: "Germany", age: 23 },
                { id: 2, name: "Robert", gender: "Male", country: "UK", age: 21 },
                { id: 3, name: "Steve", gender: "Male", country: "Finland", age: 20 },
                { id: 4, name: "Kamila", gender: "Female", country: "Poland", age: 21 },
                { id: 5, name: "Yugyeom", gender: "Male", country: "South Korea", age: 23 },
                { id: 6, name: "Bob", gender: "Other", country: "USA", age: 29 },
                { id: 7, name: "Ali", gender: "Male", country: "Turkey", age: 27},
                { id: 8, name: "Burak", gender: "Male", country: "Turkey", age: 30 },
                { id: 9, name: "Clemens", gender: "Male", country: "Australia", age: 35 },
                { id: 10, name: "Li", gender: "Other", country: "China", age: 33 },
                { id: 11, name: "Chihiro", gender: "Other", country: "Japan", age: 29 },
                { id: 12, name: "Mateusz", gender: "Male", country: "Poland", age: 25 },
                { id: 13, name: "Gerard", gender: "Male", country: "USA", age: 34 },
            ]
        };
    }
    render(){
        const ourUsers = this.state.listOfUsers.map(th => {
            return <List key={th.id} name={th.name} gender={th.gender} age={th.age} country={th.country} />
        })
        return(
            <div className="card" style={{width: '70%', margin: 'auto', marginTop: '50px', marginBottom: '50px'}}>
                <div className="card-header" style={{fontFamily: 'Amita', fontSize: '30px'}}>
                    Users
                </div>
                <div className="card-body">
                    <Swi />
                    {ourUsers}
                    <p style={{marginTop: '20px'}}>Wanna get notification every time when your friend is online?</p>
                    <Dialog />
                </div>
            </div>
        )
    }
}

export default Users;