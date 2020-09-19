import React, { Component } from "react";
import axios from "axios";
import { Table } from "reactstrap";

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://btm-rn.herokuapp.com/api/v1/users/")
      // .then(res => res.json())
      .then((res) => {
        this.setState({
          persons: res.data.results,
        });
      });
  }

  render() {
    let userData = this.state.persons.map((person, index) => {
      return (
        <tr key={index}>
          <td scope="row">{person._id}</td>
          <td>{person.name}</td>
          <td>{person.age ? person.age : "-"}</td>
        </tr>
      );
    });
    return (
      <Table>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </thead>
        <tbody>{userData}</tbody>
      </Table>
    );
  }
}
