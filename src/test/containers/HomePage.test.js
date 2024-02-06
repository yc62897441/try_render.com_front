import '@babel/register'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../store'
import HomePage from '../../containers/HomePage'

test('renders HomePage', () => {
    render(
        <Provider store={store}>
            <HomePage />
        </Provider>
    )
    const homepageTitle = screen.getByTestId('homepageTitle')
    expect(homepageTitle.innerHTML).toBe('HomePage')
})
