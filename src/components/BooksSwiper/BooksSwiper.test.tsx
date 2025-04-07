
import { expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import BookSwiper from './BooksSwiper'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

it('Click the Great Books link', async () => {
    render(<BookSwiper rating={''} booksQueryResult={{
        content: [],
        page: {
            size: 0,
            number: 0,
            totalElements: 0,
            totalPages: 0
        }
    }} />, { wrapper: BrowserRouter })

    expect(screen.getByText(/Great books/)).toBeInTheDocument()

    const user = userEvent.setup()
    const greatButton = vi.spyOn(user, 'click')
    const greatButtonLink = screen.getByText(/Great books/i)

    await user.click(greatButtonLink)
    expect(greatButton).toHaveBeenCalledTimes(1)
})
