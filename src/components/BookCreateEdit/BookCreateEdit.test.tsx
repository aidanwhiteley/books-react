// BookCreateEdit.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookCreateEdit from './BookCreateEdit';
import { MemoryRouter } from 'react-router-dom';
import { getGoogleBooks, GoogleBookSearchResult, stringAsRating, ViewAbility } from '../../apis/HttpDataApis';

jest.mock('../../apis/HttpDataApis', () => ({
    getGoogleBooks: jest.fn().mockResolvedValue({
        totalItems: 2,
        items: [
            {
                id: '1',
                volumeInfo: {
                    title: 'Mock Book 1',
                    authors: ['Author 1'],
                    description: 'Description 1',
                    imageLinks: {
                        thumbnail: 'http://example.com/image1.jpg'
                    }
                }
            },
            {
                id: '2',
                volumeInfo: {
                    title: 'Mock Book 2',
                    authors: ['Author 2'],
                    description: 'Description 2',
                    imageLinks: {
                        thumbnail: 'http://example.com/image2.jpg'
                    }
                }
            }
        ]
    })
}));

describe('BookCreateEdit Component', () => {
    const viewability: ViewAbility = 'NO_PAGES';
    
    const defaultProps = {
        book: {
            title: '',
            author: '',
            genre: '',
            rating: stringAsRating('good'),
            summary: '',
            comments: []
        },
        genres: [{ genre: 'Fiction', countOfBooks: 5 }],
        ratings: ['Great'],
        errorMessages: [],
        googleBooks: {
            totalItems: 2,
            items: [
              { id: "1", volumeInfo: { title: "Book 1", authors: ["Author 1"], description: "Description 1", subtitle: '', 
                imageLinks: {smallThumbnail: '', thumbnail: '', small: '', medium: '', large: '', extraLarge: ''}, previewLink: '' }, selfLink: '', 
                accessInfo: {viewability: viewability, embeddable: true, publicDomain: false},  },
              { id: "2", volumeInfo: { title: "Book 2", authors: ["Author 2"], description: "Description 2", subtitle: '', 
                imageLinks: {smallThumbnail: '', thumbnail: '', small: '', medium: '', large: '', extraLarge: ''}, previewLink: ''}, selfLink: '', 
                accessInfo: {viewability: viewability, embeddable: true, publicDomain: false} },
            ],
          },
        bookId: ''
    };

    beforeEach(() => {
        render(
            <MemoryRouter>
                <BookCreateEdit {...defaultProps} />
            </MemoryRouter>
        );
    });

    test('renders component heading for creating a new review', () => {
        expect(screen.getByText(/Enter your review of a book you have read/i)).toBeInTheDocument();
    });

    test('displays error messages when provided', () => {
        render(
            <MemoryRouter>
                <BookCreateEdit {...{ ...defaultProps, errorMessages: ['Error occurred'] }} />
            </MemoryRouter>
        );

        expect(screen.getByRole('alert')).toHaveTextContent('Error occurred');
    });

    test('calls getGoogleBooks on author blur', async () => {
        const authorInput = screen.getByLabelText(/Author/i) as HTMLInputElement;
        fireEvent.blur(authorInput, { target: { value: 'Some Author' } });
        
        // Ensure that the mock API was called and results are displayed
        expect(await screen.findByText(/Mock Book 1/i)).toBeInTheDocument();
        expect(await screen.findByText(/Mock Book 2/i)).toBeInTheDocument();
    });

    test('navigates back when cancel button is clicked', () => {
        const cancelButton = screen.getByText(/Cancel/i);
        fireEvent.click(cancelButton);
        // Implement your navigation verification here (e.g., checking if navigate(-1) was called)
    });

    test('shows the next book when clicking next', async () => {
        const authorInput = screen.getByLabelText(/Author/i) as HTMLInputElement;
        fireEvent.blur(authorInput, { target: { value: 'Some Author' } });

        const nextButton = screen.getByText(/Next/i);
        fireEvent.click(nextButton);

        // Check if the second book's title is displayed
        expect(await screen.findByText(/Mock Book 2/i)).toBeInTheDocument();
    });
});
