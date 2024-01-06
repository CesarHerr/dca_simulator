import { FaGithub, FaLinkedinIn, FaAddressBook } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="md:fixed bottom-0 m-3">
      <div className="flex justify-center gap-5 w-full text-xl mb-2">
        <a
          href="https://github.com/CesarHerr"
          className="hover:scale-125 hover:cursor-pointer transition-all"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/cesarherr/"
          className="hover:scale-125 hover:cursor-pointer transition-all"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://cesarherr.github.io/portfolio/"
          className="hover:scale-125 hover:cursor-pointer transition-all"
        >
          <FaAddressBook />
        </a>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:justify-between md:items-center md:gap-0">
        <p className="text-center text-gray-500 text-xs">
          &copy; 2023 DCA Simulator César Herrera González
        </p>
      </div>
    </footer>
  );
}

export default Footer;
