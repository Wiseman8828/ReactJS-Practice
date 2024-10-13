import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, FormControlLabel, Checkbox, Button, Typography, Box, Input, FormHelperText } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

const ManageUserRolePopup = ({ isOpen, onClose, user, onSave }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [roles, setRoles] = useState({
        Maker: false,
        Checker: false
    });
    const [specialAccess, setSpecialAccess] = useState({
        HNI: false,
        admin: false,
        HeadOfLPM: false
    });

    const heyy = () => {
        console.log('working')
        return true
    }

    const resetForm = () => {
        setName('');
        setEmail('');
        setRoles({
            Maker: false,
            Checker: false
        });
        setSpecialAccess({
            HNI: false,
            admin: false,
            HeadOfLPM: false
        });
    }

    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
            setRoles({
                Maker: user.maker,
                Checker: user.checker
            });
            setSpecialAccess({
                HNI: user.HNI,
                admin: user.admin,
                HeadOfLPM: user.headOfLPM
            });
        }
    }, [user]);

    const handleRoleChange = (e) => {
        const { name, checked } = e.target;
        setRoles(prevRoles => ({
            Maker: name === 'Maker' ? checked : prevRoles.Maker,
            Checker: name === 'Checker' ? checked : prevRoles.Checker
        }));
    };

    const handleSpecialAccessChange = (e) => {
        const { name, checked } = e.target;
        setSpecialAccess(prevAccess => ({ ...prevAccess, [name]: checked }));
    };

    const validateEmail = (email) => {
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(String(email).toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setEmailError('Invalid email format');
            return;
        } else {
            setEmailError('');
        }
        const userData = {
            name,
            email,
            roles: Object.keys(roles).filter(role => roles[role]).map(role => ({ 'role': role, 'enabled': roles[role] })),
            specialAccess: Object.keys(specialAccess).filter(access => specialAccess[access]).map(access => ({ 'category': access, 'enabled': specialAccess[access] }))
        };
        if (user) {
            userData['userId'] = user.userId;  // Use user ID from user prop
        } else {
            userData['createdBy'] = uuidv4();
        }
        
        handleClose();
    };

    const handleClose = (event, reason) => {
        if (reason === 'backdropClick' || reason === 'escapeKeyDown') {
            return
        }
        resetForm();
        onClose();
    };

    const handleNameChange = (e) => {
        if (e.target.value.length <= 50) {
            setName(e.target.value);
            setNameError('');
        } else {
            setNameError('Maximum char limit allowed is 50');
        }
    };

    const handleEmailChange = (e) => {
        if (e.target.value.length <= 50) {
            setEmail(e.target.value);
            setEmailError('');
        } else {
            setEmailError('Maximum char limit allowed is 50');
        }
    };

    return (
        <Dialog open={isOpen} onClose={handleClose} fullWidth maxWidth="sm">
            <DialogTitle>{user ? 'Manage User Role' : 'Add New User'}</DialogTitle>
            <form onSubmit={handleSubmit}>
                <DialogContent>
                    <Box marginBottom={2}>
                        <div style={{ display: 'flex' }}>
                            <div style={{ margin: '0 70px 0 0' }}>
                                Name
                                <Input
                                    placeholder="Name"
                                    value={name}
                                    onChange={handleNameChange}
                                    fullWidth
                                    required
                                />
                                {nameError && (
                                    <FormHelperText error>{nameError}</FormHelperText>
                                )}
                            </div>
                            <div>
                                Email
                                <Input
                                    placeholder="Email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    fullWidth
                                    required
                                />
                                {emailError && (
                                    <FormHelperText error>{emailError}</FormHelperText>
                                )}
                            </div>
                        </div>
                    </Box>

                    <Box marginBottom={2}>
                        <Typography variant="h6">Select Roles</Typography>
                        <hr />
                        <div>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={roles.Maker}
                                        onChange={handleRoleChange}
                                        name="Maker"
                                    />
                                }
                                label="Maker"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={roles.Checker}
                                        onChange={handleRoleChange}
                                        name="Checker"
                                    />
                                }
                                label="Checker"
                            />
                        </div>
                    </Box>
                    <Box marginBottom={2}>
                        <Typography variant="h6">Special Access</Typography>
                        <hr />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={specialAccess.HNI}
                                    onChange={handleSpecialAccessChange}
                                    name="HNI"
                                />
                            }
                            label="HNI"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={specialAccess.admin}
                                    onChange={handleSpecialAccessChange}
                                    name="admin"
                                />
                            }
                            label="Admin"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={specialAccess.HeadOfLPM}
                                    onChange={handleSpecialAccessChange}
                                    name="HeadOfLPM"
                                />
                            }
                            label="Head of LPM"
                        />
                    </Box>
                </DialogContent>
                <DialogActions style={{ justifyContent: 'center' }}>
                    <Button variant="contained" type="submit" color="primary" style={{ borderRadius: "10px 0px" }} >
                        {user ? 'Save' : 'Submit'}
                    </Button>
                    <Button variant="contained" onClick={handleClose} style={{ borderRadius: "10px 0px", background: 'white', color: 'black' }}>
                        Cancel
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default ManageUserRolePopup;
