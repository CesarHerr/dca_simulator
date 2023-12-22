import { useDispatch } from 'react-redux'
import fetchTrades from '/src/redux/trades/budaApi'
import { setDcaData } from '/src/redux/trades/tradeSlice'

const useFetchTradesForDateRange = () => {
  const dispatch = useDispatch()

  const fetchTradesForDateRange = async (startDate, endDate, inversion) => {
    let sumInversion = 0
    let amount = 0
    const dates = []
    const currentDate = new Date(startDate)
    currentDate.setDate(1)

    while (currentDate.getTime() <= endDate) {
      try {
        const response = await dispatch(fetchTrades(currentDate.getTime()))

        if (response?.payload?.trades?.entries) {
          const tradesEntries = response.payload.trades.entries
          sumInversion += Number(inversion)
          amount += Number(inversion) / Number(tradesEntries[0][2])
          dates.push({
            date: new Date(currentDate.getTime()).toLocaleString('es-ES', {
              month: 'long',
              year: 'numeric'
            }),
            timestamp: tradesEntries[0][0],
            sumInversion: Number(sumInversion),
            price: Number(tradesEntries[0][2]),
            inversion,
            portfolio: Number(amount) * Number(tradesEntries[0][2]),
            change: Number(amount) * Number(tradesEntries[0][2]) - Number(sumInversion),
            percentage: ((Number(amount) * Number(tradesEntries[0][2]) - Number(sumInversion)) / Number(sumInversion)) * 100
          })
        }
      } catch (error) {
        console.error('Error fetching trades for date:', currentDate, error)
      }

      currentDate.setMonth(currentDate.getMonth() + 1)
    }

    dispatch(setDcaData(dates))
  }

  return { fetchTradesForDateRange }
}

export default useFetchTradesForDateRange
