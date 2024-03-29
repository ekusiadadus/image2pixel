import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Button } from './Button'
import { vi } from 'vitest'

describe('Button', () => {
  it('render', async () => {
    const mockOnClick = vi.fn()

    const props = {
      onClick: mockOnClick,
      title: 'button title'
    }
    render(<Button {...props} />)

    const button = screen.getByRole('button')
    await userEvent.click(button)

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('button title')
    expect(mockOnClick).toBeCalled()
  })
})
