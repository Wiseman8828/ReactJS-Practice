import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { Box, CircularProgress, Typography } from "@mui/material";
import { Button } from "../../components/Button/Button";
import { DataTableUsers } from "../../components/DataTable/DataTableUsers"; 
import { useUserManagementColumns } from './columns';
import { DeletePopUp } from '../../components/DeletePopUp/DeletePopUp';
import { deleteUser } from '../../api/deleteUser';
import { ManageUserRolePopup } from '../../components/ManageUserRolePopup/ManageUserRolePopup'
import { getAllUsers } from '../../api/gellAllUsers';

export const UserManagement = () => {
    const dispatch = useDispatch();
    const {
        users, allUsersNew, deletedUserData, createdUserData
    } = useSelector(({ covenants }) => covenants);
    const userId = users?.userDetails?.userId;
    const [usersData, setUsers] = useState([]);
    const [showDeletePopUp, setShowDeletePopUp] = useState(false);
    const [deleteInfo, setDeleteInfo] = useState({});
    const [remarks, setRemarks] = useState('');
    const [userName, setUserName] = useState('');
    const [editPopUp, setEditPopUp] = useState(false);
    const [editingUser, setEditingUser] = useState(null);
    const [newUserPopUp, setnewUserPopUp] = useState(false);


    const handleOpenEditPopup = (user = null) => {
        setEditingUser(user);
        setEditPopUp(true);
    };

    const handleNewUserPopUpOpen = () => {
        setnewUserPopUp(true);
    };

    const handleInputChange = (e) => {
        const inputText = e.target.value;
        setRemarks(inputText);
    }

    const openDeletePopUp = (rowData) => {
        setShowDeletePopUp(!showDeletePopUp);
        setDeleteInfo(rowData);
        setRemarks('');
        setUserName(rowData?.fullName)
    }

    const handleDelete = () => {
        const payload = {
            "userId": deleteInfo.userId,
            "adminRemarks": remarks
        }
        setRemarks('')
        deleteUser(dispatch, payload)
    }

    const updateCheckerKakerStatus = (users) => {
        return users.map(user => {
            if (user.isMakerChecker) {
                return { ...user, isChecker: true, IsMaker: true }
            }
            return user
        })
    }

    useEffect(() => {
        if (allUsersNew !== undefined && allUsersNew.length > 0) {
            setUsers(updateCheckerMakerStatus(allusers));
        }
    },
    [allUsersNew])

    useEffect(() => {
        getAllUsers(dispatch);
    },
    [dispatch])

    useEffect(() => {
        if (deletedUserData !== undefined && deletedUserData?.message == 'Success') {
            setShowDeletePopUp(!showDeletePopUp)
            deletedUserData.message = "Used";
            getAllUsers(dispatch);
        }
        return (() => {
            deletedUserData.length = 0;
        })

    }, 
    [deletedUserData])


    useEffect(() => {
        if (createdUserData !== undefined && createdUserData?.message === "Success") {
            createdUserData.message = "Used";
            getAllUsers(dispatch);
        }
        return (() => {
            createdUserData.data = {};
        })
    }, [createdUserData])

    const userColumns = useUserManagementColumns(handleOpenEditPopup, openDeletePopUp)

    return (
        <div style={{ position: 'relative', margin: '65px' }}> 
            <Typography>{'User Management'}</Typography> 
            { usersData.length === 0 &&
                <div style={{ top: '90%', position: 'absolute', left: '50%', alignItems: 'center', textAlign: 'center' }}>
                    <CircularProgress />
                    <Typography>Loading.... </Typography>
                </div>
            }

            <Box>
                {usersData.length > 0 && <DataTableUsers rows={usersData} columns={userColumns} field="emailld" />}
            </Box>

            <Box style= {{marginTop: '30px'}}>
                <Button variant="contained" text={'Add New User'} onClick={handleNewUserPopUpOpen} />
            </Box>  

            <Box>
                { showDeletePopUp && 
                    <DeletePopUp
                        remarksInput={remarks}
                        popUpUsedIn={'Users'}
                        handlePopUpClose={openDeletePopUp} 
                        handleDelete={handleDelete}
                        handleInputChange={handleInputChange}
                        userName={userName}
                    />
                }
            </Box>

            <Box>
                <ManageUserRolePopup 
                    isOpen-editPopUp
                    onClose={() => {
                        setEditPopUp(false)
                        setEditingUser(null)
                    }}
                    user={editingUser}
                    userId={userId}
                />
            </Box>

            <Box>
                <ManageUserRolePopup 
                    isOpen= {newUserPopUp}
                    onClose={() => {
                        setnewUserPopUp(false)
                    }}
                    userId={userId}
                />
            </Box>

        </div>
    )

}