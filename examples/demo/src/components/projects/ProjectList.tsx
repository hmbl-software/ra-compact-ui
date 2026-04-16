import { Datagrid, List, TextField, DateField, ReferenceField } from 'react-admin'

const ProjectList = () => (
    <List>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="progressStatus" />
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

export { ProjectList }
