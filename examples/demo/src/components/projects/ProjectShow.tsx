import {
    Show,
    SimpleShowLayout,
    ReferenceField,
    TextField,
    ChipField,
    DateField,
    ArrayField,
    Datagrid,
    SingleFieldList,
} from 'react-admin'
import Box from '@mui/material/Box'
import { UserChipField } from './UserChipField'

const ProjectShow = () => {
    return (
        <Show>
            <SimpleShowLayout>
                <Box display="flex">
                    <Box
                        display="flex"
                        flexWrap="wrap"
                        flexGrow={4}
                        sx={{
                            paddingRight: '50px',
                            borderRight: 'solid thin',
                            marginRight: '50px',
                        }}
                    >
                        <Box flex="0 0 100%" display="flex" justifyContent="space-between">
                            <ReferenceField
                                label="Client Name"
                                source="client_id"
                                reference="clients"
                                link="show"
                            >
                                <TextField source="name" />
                            </ReferenceField>
                            <ChipField source="progressStatus" label="Progress Status" />
                            <TextField source="priority" />
                        </Box>
                        <Box flex="0 0 100%" display="flex" justifyContent="space-between">
                            <DateField source="startDate" />
                            <TextField source="timeElapsed" />
                            <DateField source="deadline" />
                        </Box>
                    </Box>
                    <Box display="inline-flex" flexDirection="column" flexGrow={1}>
                        <ReferenceField
                            label="Project Manager"
                            source="manager_id"
                            reference="staff"
                            link="show"
                        >
                            <UserChipField source="full_name" />
                        </ReferenceField>
                        <ReferenceField
                            label="Product Owner"
                            source="product_owner_id"
                            reference="staff"
                            link="show"
                        >
                            <UserChipField source="full_name" />
                        </ReferenceField>
                        <ReferenceField
                            label="Marketing Specialist"
                            source="marketing_specialist_id"
                            reference="staff"
                            link="show"
                        >
                            <UserChipField source="full_name" />
                        </ReferenceField>
                    </Box>
                </Box>
                <Box flex="0 0 100%" display="flex" mt="20px">
                    <ArrayField source="stages">
                        <Datagrid>
                            <DateField source="date" />
                            <TextField source="description" />
                            <ArrayField source="members">
                                <SingleFieldList linkType={false}>
                                    <ReferenceField
                                        label="Marketing Specialist"
                                        source="staff_id"
                                        reference="staff"
                                        link="show"
                                    >
                                        <UserChipField source="full_name" />
                                    </ReferenceField>
                                </SingleFieldList>
                            </ArrayField>
                        </Datagrid>
                    </ArrayField>
                </Box>
            </SimpleShowLayout>
        </Show>
    )
}

export { ProjectShow }
