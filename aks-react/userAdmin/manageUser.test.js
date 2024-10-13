import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ManageUserRolePopup from './ManageUser';

describe('ManageUserRolePopup Component', () => {
    const mockOnClose = jest.fn();
    const mockOnSave = jest.fn();
    const user = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        maker: true,
        checker: false,
        HNI: true,
        admin: false,
        headOfLPM: false,
        userId: 'user-123'
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renders with correct initial state', () => {
        render(<ManageUserRolePopup isOpen={true} onClose={mockOnClose} user={user} onSave={mockOnSave} />);
        expect(screen.getByDisplayValue(/John Doe/i)).toBeInTheDocument();
        expect(screen.getByDisplayValue(/john.doe@example.com/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Maker/i)).toBeChecked();
        expect(screen.getByLabelText(/Checker/i)).not.toBeChecked();
        expect(screen.getByLabelText(/HNI/i)).toBeChecked();
        expect(screen.getByLabelText(/Admin/i)).not.toBeChecked();
        expect(screen.getByLabelText(/Head of LPM/i)).not.toBeChecked();
    });

    test('handles input changes correctly', () => {
        render(<ManageUserRolePopup isOpen={true} onClose={mockOnClose} user={user} onSave={mockOnSave} />);
        fireEvent.change(screen.getByPlaceholderText(/Name/i), { target: { value: 'Jane Doe' } });
        fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: 'jane.doe@example.com' } });
        
        expect(screen.getByDisplayValue(/Jane Doe/i)).toBeInTheDocument();
        expect(screen.getByDisplayValue(/jane.doe@example.com/i)).toBeInTheDocument();
    });

    // test('validates email format', async () => {
    //     render(<ManageUserRolePopup isOpen={true} onClose={mockOnClose} user={user} onSave={mockOnSave} />);
    //     fireEvent.change(screen.queryByText(/Email/i), { target: { value: 'invalid-email' } });
    //     expect(screen.getByPlaceholderText(/Email/i).value).toBe('invalid-email');
    //     const submitButton = screen.getByText(/Submit/i);
    //     expect(submitButton).toBeInTheDocument();

    //     // fireEvent.click(screen.getByText(/Submit/i));
    //     // expect(await screen.findByText(/Invalid email format/i)).toBeInTheDocument();
    // });

    test('submits the form with correct data', () => {
        render(<ManageUserRolePopup isOpen={true} onClose={mockOnClose} user={null} onSave={mockOnSave} />);
        
        fireEvent.change(screen.getByPlaceholderText(/Name/i), { target: { value: 'Jane Doe' } });
        fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: 'jane.doe@example.com' } });
        fireEvent.click(screen.getByLabelText(/Maker/i));
        fireEvent.click(screen.getByLabelText(/HNI/i));
        fireEvent.click(screen.getByText(/Submit/i));
        
        waitFor(() => {
            expect(mockOnSave).toHaveBeenCalledWith(expect.objectContaining({
                name: 'Jane Doe',
                email: 'jane.doe@example.com',
                roles: [{ role: 'Maker', enabled: true }],
                specialAccess: [{ category: 'HNI', enabled: true }]
            }));
        });
    });

    // test('calls onClose function when dialog is closed', () => {
    //     render(<ManageUserRolePopup isOpen={true} onClose={mockOnClose} user={user} onSave={mockOnSave} />);
    //     fireEvent.click(screen.getByText(/Cancel/i));
    //     expect(mockOnClose).toHaveBeenCalledTimes(1);
    // });
});
