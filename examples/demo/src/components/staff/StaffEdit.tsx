import { Edit, TextInput, ArrayInput, SimpleFormIterator, Form } from 'react-admin'
import { Grid } from '@mui/material'

const firstRowCols = 3

const StaffEdit = () => (
    <Edit>
        <Form>
            <Grid container>
                <Grid item sm={firstRowCols}>
                    <TextInput source="full_name" />
                </Grid>
                <Grid item sm={firstRowCols}>
                    <TextInput source="email" />
                </Grid>
                <Grid item sm={firstRowCols}>
                    <TextInput source="description" />
                </Grid>
                <Grid item sm={firstRowCols}>
                    <TextInput source="avatar_url" />
                </Grid>
            </Grid>
            <ArrayInput source="skills">
                <SimpleFormIterator>
                    <TextInput source="name" />
                </SimpleFormIterator>
            </ArrayInput>
        </Form>
    </Edit>
)

export { StaffEdit }
