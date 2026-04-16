import Avatar from '@mui/material/Avatar'
import { SxProps, Theme } from '@mui/material/styles'
import { useRecordContext } from 'react-admin'

const getOptimizedSrc = (url: string, size: string) => `${url}?size=${size}x${size}`

interface AvatarFieldProps {
    source?: string
    altSource?: string
    size?: string
    fallback?: string
    sx?: SxProps<Theme>
}

export const AvatarField = ({
    source = 'picture',
    altSource,
    size = '25',
    fallback,
    sx,
}: AvatarFieldProps) => {
    const record = useRecordContext()

    return record ? (
        <Avatar
            src={(record[source] && getOptimizedSrc(record[source] as string, size)) || fallback}
            sx={{
                width: `${size}px`,
                height: `${size}px`,
                ...sx,
            }}
            alt={altSource ? (record[altSource] as string) : undefined}
        />
    ) : null
}
