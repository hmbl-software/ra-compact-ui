import Box from '@mui/material/Box'
import { useRecordContext } from 'react-admin'
import { AvatarField } from './AvatarField'

interface FullNameFieldProps {
    size?: string
}

export const FullNameField = ({ size }: FullNameFieldProps) => {
    const record = useRecordContext()

    return record ? (
        <Box sx={{ display: 'flex', flexWrap: 'nowrap', alignItems: 'center' }}>
            <AvatarField
                sx={{
                    marginRight: (theme) => theme.spacing(1),
                    marginTop: (theme) => `-${theme.spacing(0.5)}`,
                    marginBottom: (theme) => `-${theme.spacing(0.5)}`,
                }}
                size={size}
            />
            {`${record.firstName} ${record.lastName}`}
        </Box>
    ) : null
}
