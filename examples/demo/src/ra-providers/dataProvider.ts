import fakeRestProvider from 'ra-data-fakerest'
import data from './db.json'

const dataProvider = fakeRestProvider(data)

export { dataProvider }
