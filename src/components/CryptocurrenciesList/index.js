import Loader from 'react-loader-spinner'

import CryptocureencyItem from '../CryptocurrencyItem'

import './index.css'

const CryptocurrenciesList = props => {
  const {currencyList, isLoading} = props

  return isLoading ? (
    <div data-testid="loader" className="loader-cont">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  ) : (
    <div className="currency-list">
      <div className="logo-cont">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="crypto-img"
        />
      </div>
      <ul className="currencies-cont">
        <li className="heading-cont">
          <h1 className="heading1">Coin Type</h1>
          <div className="cont">
            <h1 className="heading1">USD</h1>
            <h1 className="heading1">EURO</h1>
          </div>
        </li>
        {currencyList.map(each => (
          <CryptocureencyItem listItem={each} key={each.id} />
        ))}
      </ul>
    </div>
  )
}
export default CryptocurrenciesList
