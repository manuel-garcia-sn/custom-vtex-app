import settings from '../graphql/appSettings.graphql'
import { graphql } from 'react-apollo'

export interface Settings {
  testField: string
}

//console.log(settings);

const withSettings = graphql<{}, Settings>(settings)

//console.log(withSettings);

export default withSettings