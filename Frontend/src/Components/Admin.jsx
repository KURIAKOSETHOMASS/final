import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    // Fetch users data
    axios.get('/api/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });

    // Fetch orders data
    axios.get('/api/orders')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.error('Error fetching orders:', error);
      });
  }, []);

  const handleUserSelect = (userId) => {
    const selectedUserData = users.find(user => user.id === userId);
    setSelectedUser(selectedUserData);
  };

  return (
    <div>
      <h1>Admin Panel</h1>

      <div>
        <h2>Users</h2>
        <ul>
          {users.map(user => (
            <li key={user.id} onClick={() => handleUserSelect(user.id)}>
              {user.name}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Orders</h2>
        <ul>
          {orders.map(order => (
            <li key={order.id}>
              {order.orderDetails}
            </li>
          ))}
        </ul>
      </div>

      {selectedUser && (
        <div>
          <h2>User Details</h2>
          <p>Name: {selectedUser.name}</p>
          <p>Email: {selectedUser.email}</p>
          <p>Role: {selectedUser.role}</p>
          {/* Add more user details as needed */}
        </div>
      )}
    </div>
  );
};

export default Admin;
