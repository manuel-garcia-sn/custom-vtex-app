import PropTypes from 'prop-types'
import { intlShape, injectIntl } from 'react-intl'

const MyAppLink = ({ render, intl }) => {
  return render([
    {
      name: 'Privacy Policy',
      path: '/privacy-policy',
    },
  ])
}

MyAppLink.propTypes = {
  render: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
}

export default injectIntl(MyAppLink)