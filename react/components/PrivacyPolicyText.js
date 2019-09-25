import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import { compose } from 'recompose'


import GET_SETTINGS from '../graphql2/getSettings.gql'
import MUT_GET_SETTINGS from '../graphql2/mutGetSettings.gql'
//import SET_SETTINGS from '../graphql2/setSettings.gql'

class PrivacyPolicyText extends React.Component {
    // TODO: fetch text from admin config

    state = {
        mutTestSettings: {}
    }

    handleGetSettings = () => {
        console.log("trigger")
        const {
            getSettings2
        } = this.props

        console.log(getSettings2)

        getSettings2()
            .then((result) => {
                this.setState({
                    mutTestSettings: result.data.mutTestSettings
                })
                console.log("get settings executed")
            })
            .catch(() => {
                console.log("get settings error")
            }).finally( () => {
                console.log("finally")
            }

        )
    }

    testFunction () {
        console.log("testFunc")
    }

    render() {
        return <div>
            <h1>Privacy</h1>
            {<code>{JSON.stringify(this.state.mutTestSettings)}</code>}

            <button onClick={this.handleGetSettings}>
                GetSettings
            </button>

        </div>
    }
}

PrivacyPolicyText.propTypes = {
    getSettings: PropTypes.func.isRequired,
    setSettings: PropTypes.func.isRequired
}

const enhance = compose(
    graphql(GET_SETTINGS, { name: 'getSettings' }),
    graphql(MUT_GET_SETTINGS, { name: 'getSettings2' }),
)
export default enhance(PrivacyPolicyText)