import {Component} from 'react'
import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {isLoading: true, currencyList: []}

  componentDidMount() {
    this.getApiResponse()
  }

  getApiResponse = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const responseData = await response.json()
    const updatedList = responseData.map(eachItem => ({
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      usdValue: eachItem.usd_value,
    }))
    this.setState({currencyList: updatedList, isLoading: false})
  }

  render() {
    const {isLoading, currencyList} = this.state
    return (
      <div className="main-container">
        <CryptocurrenciesList
          currencyList={currencyList}
          isLoading={isLoading}
        />
      </div>
    )
  }
}

export default CryptocurrencyTracker
