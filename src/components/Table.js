import React, { Component } from "react";

const Head = () => {
  return (
    <thead>
      <tr>
        <th>Nom</th>
        <th>Job</th>
        <th>Email</th>
      </tr>
    </thead>
  );
};

const Body = ({ users }) => {
  return (
    <tbody>
      {users.map((user, index) => (
        <tr key={index}>
          <td>{user.name}</td>
          <td>{user.job}</td>
          <td>{user.email}</td>
        </tr>
      ))}
    </tbody>
  );
};

class Table extends Component {
  render() {
    return (
      <table border="1">
        <Head />
        <Body users={this.props.users} />
      </table>
    );
  }
}

export default Table;
