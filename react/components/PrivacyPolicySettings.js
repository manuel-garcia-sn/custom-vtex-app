import { ContentWrapper } from 'vtex.my-account-commons'
import { Checkbox } from 'vtex.styleguide';

export const headerConfig = () => {
    return { namespace: 'vtex-account__support', titleId: 'Support' }
}

class PrivacyPolicySettings extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cookiesAccepted: false,
            termsAndConditionsAccepted: false
        }
    }

    onChange(param = null) {
        this.setState(param)
    }

    render() {
        const { cookiesAccepted, termsAndConditionsAccepted } = this.state

        return (
            <ContentWrapper {...headerConfig()}>
                {() => (
                    <div>
                        <h3>Cookies Policy</h3>
                        <Checkbox
                            checked={cookiesAccepted}
                            onChange={e => this.onChange({ cookiesAccepted: !cookiesAccepted })}
                        />

                        <h3>Terms & Conditions</h3>
                        <Checkbox
                            checked={termsAndConditionsAccepted}
                            onChange={e => this.onChange({ termsAndConditionsAccepted: !termsAndConditionsAccepted })}
                        />
                    </div>
                )}
            </ContentWrapper>
        )
    }
}

export default PrivacyPolicySettings
