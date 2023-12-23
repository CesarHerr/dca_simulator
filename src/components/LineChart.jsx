import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function LineChart() {
  const { dcaData, inversion, startDate, endDate } = useSelector(
    (state) => state.trades
  );
  const today = new Date();

  const sumInversion = dcaData.map((trade) => trade.sumInversion);
  const labels = dcaData.map((trade) => trade.date);
  const portfolio = dcaData.map((trade) => trade.portfolio);

  // months between start date and today
  const months =
    startDate && endDate
      ? Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24 * 30))
      : 0;
  const start = new Date(startDate);
  const end = new Date(endDate);

  // options for chart
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Comparación de Inversión y Portafolio',
      },
    },
  };

  // data for chart
  const data = {
    labels,
    datasets: [
      {
        label: 'Valor Portafolio',
        data: portfolio,
        tension: 0.4,
        fill: true,
        pointRadius: 5,
        borderColor: 'rgb(127, 189, 27 )',
        backgroundColor: 'rgba(163, 246, 43, 0.4)',
      },
      {
        label: 'Inversión',
        data: sumInversion,
        fill: true,
        pointRadius: 3,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.2)',
      },
    ],
  };

  return (
    <section className="md:ml-[18rem] w-full h-screen">
      <div className="">
        <p className="text-lg text-pretty text-gray-600 my-5 w-10/12 mx-auto">
          Rendimiento histórico del DCA al invertir en Buda.com mensualmente con
          $ {Intl.NumberFormat().format(inversion)} CLP durante {} {months}{' '}
          meses, desde {start.getMonth() + 1}/{start.getFullYear()} hasta{' '}
          {today.getMonth() === end.getMonth() &&
          today.getFullYear() === end.getFullYear()
            ? 'hoy'
            : `${end.getMonth() + 1}/${end.getFullYear()}`}
          .
        </p>
        <div className="flex gap-10 justify-center w-full mt-10">
          <div className="text-center border p-4 rounded">
            <p>Inversión</p>
            <p className="text-gray-800 text-xl font-bold sm:text-2xl text-center">
              {' '}
              ${Intl.NumberFormat().format(inversion * dcaData.length)}
            </p>
          </div>
          <div className="text-center border p-4 rounded">
            <p>Portafolio</p>
            <p className="text-gray-800 text-xl font-bold sm:text-2xl text-center">
              {portfolio.length > 0
                ? `$${Intl.NumberFormat().format(
                    portfolio[portfolio.length - 1].toFixed(2)
                  )}`
                : 'N/A'}
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto my-10 w-full sm:w-10/12 h-[30rem] flex justify-center ">
        <Line options={options} data={data} />
      </div>
    </section>
  );
}

export default LineChart;
