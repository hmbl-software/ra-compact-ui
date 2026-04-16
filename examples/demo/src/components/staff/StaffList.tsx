import { Datagrid, List, TextField } from 'react-admin'

const StaffList = () => {
    return (
        <List>
            <Datagrid rowClick="show">
                <TextField source="full_name" />
            </Datagrid>
        </List>
    )
}

export { StaffList }
