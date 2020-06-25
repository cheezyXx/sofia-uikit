import { render } from 'react-dom'

describe('Button component', () => {

  afterEach(cleanup)

  test('test handle click', done => {
    const handleClick = () => {
      done()
    }

    const { getByText } = render(
      <SButton handleClick = { handleClick } > Submit < /SButton>
    )

    const node = getByText('Submit')
    fireEvent.click(node)
  })

  test('small button true', () => {
    const { container } = render(
      <SButton small = { true } > Submit < /SButton>
    )

    expect(container.firstChild.classList.contains('button--small')).toBe(true)
  })

  test('small button false', () => {
    const { container } = render(
      <SButton>Submit < /SButton>
    )

    expect(container.firstChild.classList.contains('button--small')).toBe(false)
  })

  test('is not rounded be default', () => {
    const { container } = render(
      <SButton>Submit < /SButton>
    )

    expect(container.firstChild.classList.contains('button--rounded')).toBe(false)
  })

  test('round class', () => {
    const { container } = render(
      <SButton rounded = { true } > Submit < /SButton>
    )

    expect(container.firstChild.classList.contains('button--rounded')).toBe(true)
  })

  test('cplors', () => {
    const colors = [
      'dark',
      'light',
      'red',
      'orange'
    ]

    for (const color of colors) {
      const component = render(
        <SButton color = { color } > Submit < /SButton>
      )

      const container = component.container

      expect(container.firstChild.classList.contains(`button--${color}`)).toBe(true)
    }
  })
})
