import axios from 'axios'

export async function getCurrencyData(start, end, currency = 'USD') {
  if (!start || !end) {
    throw new Error('Missing required start or end date')
  }

  const url = `https://api.frankfurter.dev/v1/${start}..${end}?base=${currency}&symbols=THB`

  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.error('Error fetching currency data:', error)
    throw error
  }
}
