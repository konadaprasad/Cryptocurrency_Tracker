import './index.css'

const CryptocurrencyItem = props => {
  const {listItem} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = listItem

  return (
    <li className="list-item">
      <div className="crypt-cont">
        <img src={currencyLogo} alt={currencyName} className="crypt-img" />
        <p className="p1">{currencyName}</p>
      </div>
      <div className="cont">
        <p className="p1">{usdValue}</p>
        <p className="p1">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
