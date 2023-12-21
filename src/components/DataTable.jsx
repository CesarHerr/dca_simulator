import { useSelector } from 'react-redux'

function DataTable () {
  const { dcaData } = useSelector(
    (state) => state.trades
  )

  // sum of inversions
  let sumInversion = 0

  return (
    <section className='md:ml-[18rem]'>
      <h2 className='text-4xl text-center pt-5'>Tabla Variación Inversión</h2>
      <div className='max-w-screen-xl mx-auto px-4 md:px-8 py-10'>
        <div className='mt-12 shadow-sm border rounded-lg overflow-x-auto'>
          <table className='w-full table-auto text-sm text-left'>
            <thead className='bg-gray-50 text-gray-600 font-medium border-b'>
              <tr className='divide-x'>
                <th className='py-3 px-6'>#</th>
                <th className='py-3 px-6'>Fecha</th>
                <th className='py-3 px-6'>Precio CLP</th>
                <th className='py-3 px-6'>Inversión</th>
                <th className='py-3 px-6'>Valor Portafolio</th>
                <th className='py-3 px-6'>Cambio</th>
                <th className='py-3 px-6'>Cambio %</th>
              </tr>
            </thead>
            <tbody className='text-gray-600 divide-y'>
              {dcaData.map((item, idx) => {
                sumInversion += Number(item.inversion)
                return (
                  <tr key={idx} className='divide-x'>
                    <td className='px-6 py-4 whitespace-nowrap flex items-center gap-x-6'>
                      <span>{idx + 1}</span>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>{item.date}</td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      $ {new Intl.NumberFormat().format(item.price.toFixed(2))}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      $ {Intl.NumberFormat().format(sumInversion.toFixed(2))}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      $ {Intl.NumberFormat().format(item.portfolio.toFixed(2))}
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-nowrap ${
                        item.change >= 0 ? 'text-green-700' : 'text-red-700'
                      }`}
                    >
                      $ {Intl.NumberFormat().format(item.change.toFixed(2))}
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-nowrap ${
                        item.percentage >= 0 ? 'text-green-700' : 'text-red-700'
                      } `}
                    >
                      {item.percentage.toFixed(2)} %
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default DataTable
