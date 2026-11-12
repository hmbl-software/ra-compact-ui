import { render } from '@testing-library/react'
import { RecordContextProvider } from 'react-admin'
import { describe, expect, it } from 'vitest'
import { AvatarField } from './AvatarField'

const picture = 'https://example.com/picture.png'

const renderInRecord = (record: Record<string, unknown>, field: JSX.Element) =>
    render(<RecordContextProvider value={record}>{field}</RecordContextProvider>)

const getImage = (container: HTMLElement) => container.querySelector('img')

describe('AvatarField', () => {
    it('reads the default picture source and appends the size', () => {
        const { container } = renderInRecord({ id: 1, picture }, <AvatarField />)

        expect(getImage(container)?.getAttribute('src')).toBe(`${picture}?size=25x25`)
    })

    it('reads a custom source with a custom size', () => {
        const { container } = renderInRecord(
            { id: 1, photo: picture },
            <AvatarField source="photo" size="40" />
        )

        expect(getImage(container)?.getAttribute('src')).toBe(`${picture}?size=40x40`)
    })

    it('reads a deep source', () => {
        const { container } = renderInRecord(
            { id: 1, user: { picture } },
            <AvatarField source="user.picture" />
        )

        expect(getImage(container)?.getAttribute('src')).toBe(`${picture}?size=25x25`)
    })

    it('uses the fallback when the record has no picture', () => {
        const { container } = renderInRecord({ id: 1 }, <AvatarField fallback={picture} />)

        expect(getImage(container)?.getAttribute('src')).toBe(picture)
    })

    it('renders nothing without a picture or a fallback', () => {
        const { container } = renderInRecord({ id: 1 }, <AvatarField />)

        expect(container.innerHTML).toBe('')
    })

    it('reads the alt text from altSource', () => {
        const { container } = renderInRecord(
            { id: 1, picture, name: 'Ivan' },
            <AvatarField altSource="name" />
        )

        expect(getImage(container)?.getAttribute('alt')).toBe('Ivan')
    })

    it('reads a record passed as a prop', () => {
        const { container } = render(<AvatarField record={{ picture }} />)

        expect(getImage(container)?.getAttribute('src')).toBe(`${picture}?size=25x25`)
    })

    it('prefers the record prop over the record context', () => {
        const { container } = renderInRecord(
            { id: 1, picture: 'https://example.com/context.png' },
            <AvatarField record={{ picture }} />
        )

        expect(getImage(container)?.getAttribute('src')).toBe(`${picture}?size=25x25`)
    })
})
