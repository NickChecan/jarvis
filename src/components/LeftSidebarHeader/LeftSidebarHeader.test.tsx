import React from 'react';
import { SidebarContext } from '../../context/SidebarContext';
import LeftSidebarHeader from './LeftSidebarHeader';
import {fireEvent, render, screen } from '@testing-library/react';

describe('Test the LeftSidebarHeader component', () => {

    it('should close the sidebar when the close button is clicked', () => {
        // Arrange
        const setOpen = jest.fn();
        const mockContextValue = { open: true, setOpen };

        // Act
        render(
            <SidebarContext.Provider value={mockContextValue}>
                <LeftSidebarHeader />
            </SidebarContext.Provider>
        );

        const closeButton = screen.getByRole('button');
        fireEvent.click(closeButton);

        // Assert
        expect(setOpen).toHaveBeenCalledWith(false);
    });

});