import React, {Component} from 'react'

const ListBody = () => {
    return (
        <ul>
            <li>Man United</li>
            <li>Arsenal</li>
            <li>Man City</li>   
        </ul>
    )
}

class List extends Component {
    render() {
        return(
            <ListBody />
        )
    }
}

export default List
