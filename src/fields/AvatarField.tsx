import Avatar from '@mui/material/Avatar'
import { SxProps, Theme } from '@mui/material/styles'
import { useRecordContext } from 'react-admin'

const getOptimizedSrc = (url: string, size: string) => `${url}?size=${size}x${size}`

// Reads a dotted path such as "user.picture". Used instead of react-admin's useFieldValue,
// which only exists in react-admin 5, so the field also works on react-admin 4.
const getByPath = (record: Record<string, unknown> | undefined, path: string) =>
    path
        .split('.')
        .reduce<unknown>(
            (value, key) => (value as Record<string, unknown> | undefined)?.[key],
            record
        )

interface AvatarFieldProps {
    source?: string
    altSource?: string
    size?: string
    fallback?: string
    sx?: SxProps<Theme>
    record?: Record<string, unknown>
}

export const AvatarField = ({
    source = 'picture',
    altSource,
    size = '25',
    fallback,
    sx,
    record,
}: AvatarFieldProps) => {
    const currentRecord = useRecordContext<Record<string, unknown>>({ record })
    const imageSource = getByPath(currentRecord, source) as string | undefined
    const altText = altSource ? (getByPath(currentRecord, altSource) as string) ?? '' : ''

    if (!imageSource && !fallback) return null

    return (
        <Avatar
            src={(imageSource && getOptimizedSrc(imageSource, size)) || fallback}
            sx={{
                width: `${size}px`,
                height: `${size}px`,
                ...sx,
            }}
            alt={altText}
        />
    )
}
