import React from 'react'
import { Datagrid, List, TextField, DateField, ReferenceField } from 'react-admin'
import { CompactChipField } from 'ra-compact-ui'

const reviewChipFieldOptions = {
    Done: { color: 'primary' },
    Waiting: {
        color: '#ffc107ff',
    },
    Revision: {
        color: 'rgb(244, 67, 54)',
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
