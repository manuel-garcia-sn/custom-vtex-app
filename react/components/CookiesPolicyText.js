import React from 'react'
import withSettings from './withSettings'


class CookiesPolicyText extends React.Component {
    constructor(props) {
        super(props)

        //console.log(props.data)
    }

    render() {
        return <div>
            <p>Query data:</p>
            {<code>{JSON.stringify(this.props.data.testSettings)}</code>}
            <button onClick={() => this.props.data.refetch() }>
                Reload
            </button>
        </div>
    }
}


export default withSettings(CookiesPolicyText)