import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TradingViewWidget from 'react-tradingview-widget'

// bsc data?
// https://bsc-dataseed1.defibit.io/

const getData = () => {
  const query = `
  query{
    
      ethereum(network: bsc) {
        dexTrades(options: {asc: ["date.date"]}, date: {since: "2021-05-01"}, baseCurrency: {is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"}) {
          numberOfTrades: count
          tradeAmount(in: USD)
          date {
            date
          }
          exchange {
            fullName
            fullNameWithId
            name
          }
        }
      }
    
    
}
`
  const url = 'https://graphql.bitquery.io/'
  const opts = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': 'BQYug1u2azt1EzuPggXfnhdhzFObRW0g',
    },
    body: JSON.stringify({
      query,
    }),
  }
  fetch(url, opts)
    .then((res) => res.json())
    .then(console.log)
    .catch(console.error)
}

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {/* using https://www.tradingview.com/widget/advanced-chart/*/}

        <TradingViewWidget symbol="KRAKEN:ADAUSD" />

        <button onClick={getData}> click me</button>
      </main>
    </div>
  )
}
