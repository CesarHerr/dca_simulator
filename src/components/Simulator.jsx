import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import DataTable from './DataTable';
import FormData from './FormData';
import Footer from './Footer';
import useFetchTradesForDateRange from './custom/useFetchTradesForDateRange';

import LineChart from './LineChart';
import Loader from './Loader';

function Simulator() {
  const { fetchTradesForDateRange } = useFetchTradesForDateRange();
  const { isLoading, startDate, endDate, inversion } = useSelector(
    (state) => state.trades
  );

  useEffect(() => {
    fetchTradesForDateRange(startDate, endDate, inversion);
  }, []);

  return (
    <main>
      <h1 className="text-3xl text-center py-10 md:5xl font-extrabold">
        {' '}
        DCA Simulator
      </h1>
      <div className="flex flex-col">
        <section className="flex flex-col md:flex-row">
          <FormData />
          {isLoading ? '' : <LineChart />}
        </section>
        {isLoading ? <Loader /> : <DataTable />}
      </div>
      <Footer />
    </main>
  );
}

export default Simulator;
