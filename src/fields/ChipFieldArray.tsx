import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Theme } from '@mui/material/styles'
import { useRecordContext } from 'react-admin'

interface ChipFieldArrayProps {
    source: string
}

export const ChipFieldArray = ({ source }: ChipFieldArrayProps) => {
    const isSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
    const record = useRecordContext()

    return (
        <Box
            component="ul"
            sx={{
                margin: '0px',
                padding: '0px',
                display: 'inline',
                listStyle: 'none',
            }}
        >
            {record &&
                record[source] &&
                (record[source] as string[]).map((item) => (
                    <Chip key={item} label={item} sx={{ height: isSmall ? '18px' : undefined }} />
                ))}
        </Box>
    )
}
