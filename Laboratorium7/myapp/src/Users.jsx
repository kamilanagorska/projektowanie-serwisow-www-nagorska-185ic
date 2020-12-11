import React, {Component} from "react";

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfUsers: [
                { id: 0, name: "Lucy", country: "USA", age: 18 },
                { id: 1, name: "Lucy", country: "USA", age: 18 },
                { id: 2, name: "Lucy", country: "USA", age: 18 },
                { id: 3, name: "Lucy", country: "USA", age: 18 },
                { id: 4, name: "Lucy", country: "USA", age: 18 },
                { id: 5, name: "Lucy", country: "USA", age: 18 },
                { id: 6, name: "Lucy", country: "USA", age: 18 },
                { id: 7, name: "Lucy", country: "USA", age: 18 },
                { id: 8, name: "Lucy", country: "USA", age: 18 },
                { id: 9, name: "Lucy", country: "USA", age: 18 },
                { id: 10, name: "Lucy", country: "USA", age: 18 },
                { id: 11, name: "Lucy", country: "USA", age: 18 },
                { id: 12, name: "Lucy", country: "USA", age: 18 },
                { id: 13, name: "Lucy", country: "USA", age: 18 },
            ]
        };
    }
    render(){
        const myThings = this.state.things.map(th => {
            return <List key={th.id} amount={th.amount} text={th.text} />
        })
        return()
);
export default Users;