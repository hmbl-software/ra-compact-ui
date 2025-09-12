import React from 'react'
import { Datagrid, List, TextField, DateField, ReferenceField } from 'react-admin'
import { CompactChipField } from 'ra-compact-ui'
import { color } from '@mui/system'

const reviewChipFieldOptions = {
    Done: {
        // color: 'primary', //from MUI palette
        color: 'rgb(0, 255, 45)', //custom color - breaks mui theme if color is not from palette
    },
}

const ProjectList = (props) => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="name" />
            {/* <TextField source="progressStatus" /> */}
            <CompactChipField source="progressStatus" options={reviewChipFieldOptions} />
            <TextField source="priority" />
            <DateField source="startDate" />
            <TextField source="timeElapsed" />
            <DateField source="deadline" />
            <ReferenceField source="client_id" reference="clients">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField source="manager_id" reference="staff">
                <TextField source="full_name" />
            </ReferenceField>
            <ReferenceField source="product_owner_id" reference="staff">
                <TextField source="full_name" />
            </ReferenceField>
            <ReferenceField source="marketing_specialist_id" reference="staff">
                <TextField source="full_name" />
            </ReferenceField>
        </Datagrid>
    </List>
)

export default ProjectList
