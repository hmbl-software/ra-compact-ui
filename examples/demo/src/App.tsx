import { Admin, Resource } from 'react-admin'
import { ProjectList, ProjectShow, StaffShow, StaffList, StaffEdit } from './components'
import { dataProvider } from './ra-providers'

function App() {
    return (
        <Admin dataProvider={dataProvider}>
            <Resource name="projects" list={ProjectList} show={ProjectShow} />
            <Resource name="clients" />
            <Resource
                name="staff"
                list={StaffList}
                show={StaffShow}
                edit={StaffEdit}
                create={StaffEdit}
            />
        </Admin>
    )
}

export { App }
