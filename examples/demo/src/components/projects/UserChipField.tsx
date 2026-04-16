import { Avatar } from '@mui/material'
import { ChipField, useRecordContext } from 'react-admin'

interface UserChipFieldProps {
    source?: string
    compact?: boolean
}

const UserChipField = ({ source = 'fullName', compact }: UserChipFieldProps) => {
    const record = useRecordContext()

    return (
        <ChipField
            avatar={
                <Avatar
                    src={record?.avatar_url as string}
                    sx={{
                        ...(compact
                            ? {
                                  marginLeft: '0px !important',
                              }
                            : undefined),
                    }}
                />
            }
            source={source}
        />
    )
}

export { UserChipField }
