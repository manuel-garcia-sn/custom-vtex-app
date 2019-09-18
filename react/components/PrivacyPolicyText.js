import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import { compose } from 'recompose'


import GET_SETTINGS from '../graphql2/getSettings.gql'
//import SET_SETTINGS from '../graphql2/setSettings.gql'

class PrivacyPolicyText extends React.Component {
    // TODO: fetch text from admin config

    handleGetSettings = () => {
        console.log("trigger")
        const {
            getSettings
        } = this.props

        console.log(getSettings)

        getSettings()
            .then(() => {
                console.log("get settings executed")
            })
            .catch(() => {
                console.log("get settings error")
            }).finally( () => {
                console.log("finally")
            }

        )
    }



    render() {
        return <div>
            <h1>Privacy</h1>
            <button onClick={this.handleGetSettings}>
                GetSettings
            </button>

        </div>
    }
}

PrivacyPolicyText.propTypes = {
    getSettings: PropTypes.func.isRequired,
    setSettings: PropTypes.func.isRequired,
}

const enhance = compose(
    graphql(GET_SETTINGS, { name: 'getSettings' })
)
export default enhance(PrivacyPolicyText)