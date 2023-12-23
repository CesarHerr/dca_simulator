<h1>Buda DCA Simulator</h1>

<a name="readme-top"></a>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📗 Table of Contents](#-table-of-contents)
- [📖 Buda dca Simulator](#Buda-DCA-Simulator)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [🚀 Live Demo ](#-live-demo-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Usage](#usage)
    - [Run tests](#run-tests)
    - [Deployment](#deployment)
  - [👥 Author ](#-author-)
  - [🔭 Future Features ](#-future-features-)
  - [Walkthrough ](#walkthrough-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [📝 License ](#-license-)

<!-- PROJECT DESCRIPTION -->

# 📖 Buda DCA Simulator<a name="about-project"></a>

The Buda-DCA-Simulator is a Web application for checking the Dollar-Cost Averaging (in this case CLP), this is a time-tested investment strategy where an investor divides up the total amount to be invested across periodic purchases of a target asset to reduce the impact of volatility on the overall purchase


## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
<summary>React-vite</summary>
  <ul>
    <li><a href="https://vitejs.dev/">React</a></li>
  </ul>
</details>

<details>
  <summary>Redux-toolkit</summary>
  <ul>
    <li><a href="https://redux-toolkit.js.org/">Redux-toolkit</a></li>
  </ul>
</details>

<details>
<summary>Tailwind</summary>
  <ul>
    <li><a href="Tailwind">Tailwind</a></li>
  </ul>
</details>

<details>
<summary>Vitest</summary>
  <ul>
    <li><a href="https://vitest.dev/">Vitest</a></li>
  </ul>
</details>

<details>
<summary>React testing library</summary>
  <ul>
    <li><a href="https://testing-library.com/">React testing library</a></li>
  </ul>
</details>






### Key Features <a name="key-features"></a>

- **Created using React**
- **Manage states with redux**
- **Gitflow**
- **Used Chartjs to see data fluctuation**
- **Get data from Buda API**
- **Created a Docker container**
- **Deployed on GitHub pages**

<!-- LIVE DEMO -->





## 🚀 Live Demo <a name="live-demo"></a>

### ⚠️   Important ⚠️

- If you are unable to see the data in the app, it might be due to a CORS (Cross-Origin Resource Sharing) problem. You will need to install a plugin on your browser. For Chrome, use this [extension](https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf)

> You can see the live demo of this project: [click here](https://cesarherr.github.io/dca_simulator/)



<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

- A web browser
- A code editor
- A terminal

### Setup

Clone this repository to your desired folder:

```sh
  git clone https://github.com/CesarHerr/dca_simulator.git
```

### Install

Install this project with:

```sh
  cd dca_simulator
  npm install
```

### Usage

To run the project, execute the following command:

```sh
  npm run dev
```

### Run tests

To run tests, run the following command:


```sh
  npm test
```


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->


👤 César Herrera

- GitHub: [@cesarherr](https://github.com/Cesarherr)
- Twitter: [@cesarherr2](https://twitter.com/cesarherr2)
- LinkedIn: [cesarherr](https://www.linkedin.com/in/cesarherr/)

## 🔭 Future Features <a name="future-features"></a>

- Add More tests
- Upgrade styles
- Accessibility improvements
- Dark mode


# Walkthrough <a name="walkthrough"></a>

The project was developed follow the following requirements:

```sh

 Requerimientos



1. Necesitamos calcular la ganancia mes a mes para un usuario que compre el primero de cada mes a las 12:00 UTC, los últimos 12 meses (desde la fecha en que se ingresa a la página)

  - Aquí al momento de ingresar a la página se carga el cálculo de los últimos 12 meses, Tomando los primeros de cada mes a las 12:00PC UTC,  con una inversión de $100,000 CLP, estos datos son lo primero que ve el usuario.


2. El usuario debe ser capaz de indicar el monto en CLP que invertirá cada mes

  - Input creado para ingresar Monto y fecha, la fecha a cargar sigue siendo los días 1 de cada mes a las    12:00PM UTC, solo puede indicar mes y año. 


3. Debe existir una forma gráfica de ver la evolución de la inversión (en CLP)

  - Creado gráfico con Chartjs library. 


4. Debe existir una tabla o estructura similar donde se muestre la variación en CLP y % de la inversión.

  - Tabla completa creada con datos obtenidos de la API de Buda.com, se actualiza cada vez que se ingresan nuevos datos. 


```



```sh
# Deseables

1. Que la tarea funcione en un ambiente contenerizado (Docker o similar)

  - Proyecto contenerizado en Docker.


2. Que sea posible indicar la fecha de inicio y término de la simulación.

  - Usuario puede ingresar fecha de inicio y término, pero se mantiene el concepto de cálculo para el día 1 de cada mes a las 12:00 UTC.


3. Que el diseño funcione tanto en móvil como desktop.

  - Diseño responsivo creado.


4.Que podamos ver tu proyecto funcionando.

  - Proyecto desplegado github pages.

```

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/CesarHerr/dca_simulator/issues).



<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project, give it a ⭐️!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank Buda.com for giving me the opportunity to take on this challenge and for taking the time to evaluate it 🌟

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
