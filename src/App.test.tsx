import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
    it("renders mood tracker title", () => {
        render(<App />);
        const linkElement = screen.getByText(/Mood Tracker/i);
        expect(linkElement).toBeInTheDocument();
    });
});
