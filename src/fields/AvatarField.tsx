import Avatar from '@mui/material/Avatar'
import { SxProps, Theme } from '@mui/material/styles'
import { useFieldValue } from 'react-admin'

const getOptimizedSrc = (url: string, size: string) => `${url}?size=${size}x${size}`

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
    const imageSource = useFieldValue({ source, record })
    const altText = useFieldValue({ source: altSource ?? '', record, defaultValue: '' })

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
