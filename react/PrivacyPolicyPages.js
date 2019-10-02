import { Tabs, Tab } from 'vtex.styleguide'
import { Container } from 'vtex.store-components'

import './styles.css'
import TermsAndConditionsText from "./components/TermsAndConditionsText";
import CookiesPolicyText from "./components/CookiesPolicyText";
import PrivacyPolicyText from "./components/PrivacyPolicyText";
import BannerCookies from './components/BannerCookies';

class PrivacyPolicyPages extends React.Component {
    constructor() {
        super()
        this.state = {
            currentTab: 1,
        }
        this.handleTabChange = this.handleTabChange.bind(this)
    }

    handleTabChange(tabIndex) {
        this.setState({
            currentTab: tabIndex,
        })
    }

    render() {
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
                </div><BannerCookies></BannerCookies>
            </Container>

            
        )
    }
}

export default PrivacyPolicyPages