import { Tabs, Tab } from 'vtex.styleguide'
import { Container } from 'vtex.store-components'
import PropTypes from 'prop-types'

import './styles.css'
import TermsAndConditionsText from "./components/TermsAndConditionsText";
import CookiesPolicyText from "./components/CookiesPolicyText";
import PrivacyPolicyText from "./components/PrivacyPolicyText";

class PrivacyPolicyPages extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            currentTab: 1,
        }
        this.handleTabChange = this.handleTabChange.bind(this)
    }

    static contextTypes = {
        getSettings: PropTypes.func
    }

    handleTabChange(tabIndex) {
        this.setState({
            currentTab: tabIndex,
        })
    }

    render() {
        //console.log(this.context);
        //console.log(this.context.getSettings('vtex.my-account'))
        //console.log(this.context.getSettings('sngular.privacy-policy'))
        //console.log(this.context.getSettings('vtex.store'))

        return (
            <Container className="sngular-simple-application-0-x-my-component">
                <div>
                    <Tabs>
                        <Tab
                            label="Privacy Policy"
                            active={this.state.currentTab === 1}
                            onClick={() => this.handleTabChange(1)}>
                            <PrivacyPolicyText/>
                        </Tab>
                        <Tab
                            label="Cookies Policy"
                            active={this.state.currentTab === 2}
                            onClick={() => this.handleTabChange(2)}>
                            <CookiesPolicyText/>
                        </Tab>
                        <Tab
                            label="Terms & Conditions"
                            active={this.state.currentTab === 3}
                            onClick={() => this.handleTabChange(3)}>
                            <TermsAndConditionsText/>
                        </Tab>
                    </Tabs>
                </div>
            </Container>
        )
    }
}

export default PrivacyPolicyPages