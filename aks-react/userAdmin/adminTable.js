import React, { useState } from 'react';
import './adminTable.css';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import ManageUserRolePopup from './ManageUser';
import { Box, Button } from '@mui/material';


const AdminTable = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(Math.min(Math.max(pageNumber, 1), totalPages));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);


  const [editPopUp, setEditPopUp] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [newUserPopUp, setnewUserPopUp] = useState(false);


  const handleOpenEditPopup = (user = null) => {
    setEditingUser(user);
    setEditPopUp(true);
  };

  const handleEditOperation = (userData) => {
    console.log('Updating user:', userData);
  };

  const handleNewUserPopUpOpen = () => {
    setnewUserPopUp(true);
  };

  const handleSaveOperation = (userData) => {
    console.log('save operation' , userData)
  };

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email Address</th>
              <th>Maker</th>
              <th>Checker</th>
              <th>HNI</th>
              <th>Admin</th>
              <th>Head of LPM</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.maker ? <FaCheckCircle style={{ color: 'green' }} /> : <FaTimesCircle style={{ color: 'red' }} />}</td>
                <td>{user.checker ? <FaCheckCircle style={{ color: 'green' }} /> : <FaTimesCircle style={{ color: 'red' }} />}</td>
                <td>{user.HNI ? <FaCheckCircle style={{ color: 'green' }} /> : <FaTimesCircle style={{ color: 'red' }} />}</td>
                <td>{user.admin ? <FaCheckCircle style={{ color: 'green' }} /> : <FaTimesCircle style={{ color: 'red' }} />}</td>
                <td>{user.headOfLPM ? <FaCheckCircle style={{ color: 'green' }} /> : <FaTimesCircle style={{ color: 'red' }} />}</td>
                <td>
                  <button onClick={() => handleDelete(user)}>Delete</button>
                  <button onClick={() => handleOpenEditPopup(user)}>Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <button onClick={prevPage} disabled={currentPage === 1}>
            Previous
          </button>
          <button onClick={nextPage} disabled={currentPage === totalPages}>
            Next
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <div>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => goToPage(pageNumber)}
                  disabled={pageNumber === currentPage}
                >
                  {pageNumber}
                </button>
              )
            )}
          </div>
        </div>
      </div>

    <Button variant="contained" color="primary" onClick={handleNewUserPopUpOpen}>
      Click Me
    </Button>

    <Box>
      <ManageUserRolePopup isOpen={editPopUp} 
        onClose={() => setEditPopUp(false)}
        user={editingUser} 
      />
    </Box>

    <Box>
      <ManageUserRolePopup isOpen={newUserPopUp} 
        onClose={() => setnewUserPopUp(false)} 
      />
    </Box>
    </>
  );
};

export default AdminTable;
