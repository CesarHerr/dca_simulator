import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import DataTable from './DataTable';
import FormData from './FormData';
import { FaGithub, FaLinkedinIn, FaAddressBook } from "react-icons/fa";
import useFetchTradesForDateRange from './custom/useFetchTradesForDateRange';

import LineChart from './LineChart';
import Loader from './Loader';

function Simulator() {
  const { fetchTradesForDateRange } = useFetchTradesForDateRange();
  const { isLoading, startDate, endDate, inversion } = useSelector(
    (state) => state.trades
  );

  //eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchTradesForDateRange(startDate, endDate, inversion)
  }, [])

  return (
    <main>
      <h1 className="text-3xl text-center py-10 md:5xl font-extrabold">
        {' '}
        DCA Simulator
      </h1>
      <div className='flex flex-col'>
        <section className="flex flex-col md:flex-row">
          <FormData />
          {isLoading ? '' : <LineChart />}
        </section>
        {isLoading ? <Loader /> : <DataTable />}
      </div>
      <footer className='md:fixed bottom-0 m-3'>
      <div className='flex justify-center gap-5 w-full text-xl mb-2'>
          <a href='https://github.com/CesarHerr' className='hover:scale-125 hover:cursor-pointer transition-all'><FaGithub /></a>
          <a href='https://www.linkedin.com/in/cesarherr/' className='hover:scale-125 hover:cursor-pointer transition-all'><FaLinkedinIn /></a>
          <a href='https://cesarherr.github.io/portfolio/' className='hover:scale-125 hover:cursor-pointer transition-all'><FaAddressBook /></a>         
          </div>
        <div className='flex flex-col items-center justify-center gap-2 md:flex-row md:justify-between md:items-center md:gap-0'>
          <p className='text-center text-gray-500 text-xs'>
            &copy; 2023 DCA Simulator César Herrera González
          </p>         
        </div>      
      </footer>
    </main>
  );
}

export default Simulator;
