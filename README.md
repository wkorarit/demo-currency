# Currency Rate Dashboard

This project is a **Currency Rate Dashboard** built with **Vue 3**, **Tailwind CSS**, and **PrimeVue**. It allows users to view and compare exchange rates between various currencies with real-time data fetched from the **Frankfurter API**.

The dashboard displays exchange rates in an easy-to-read format with features such as **currency comparison**, **percentage change** for the week and month, and an interactive **line chart**.

---

## Features

- **Currency Selector**: Choose the base currency from a list of supported currencies.
- **Real-Time Data**: Fetches up-to-date currency rates from the Frankfurter API.
- **Currency Comparison**: Compare the selected currency with the THB (Thai Baht).
- **Percentage Change**: Shows percentage changes for the week and month.
- **Interactive Line Chart**: Visual representation of the currency rates over time.
- **Responsive Design**: Fully responsive, optimized for both mobile and desktop views.

---

## Technologies Used

- **Vue 3**: For the frontend application, leveraging the Composition API.
- **Tailwind CSS**: For utility-first CSS styling.
- **PrimeVue**: For UI components such as buttons, cards, and inputs.
- **Luxon**: For date and time manipulation.
- **Axios**: For making API calls to fetch real-time currency data.
- **Vite**: For fast development with hot module replacement (HMR).

---

## API Used

The currency data is fetched from the **[Frankfurter API](https://www.frankfurter.app/)**. It provides exchange rates for a wide range of currencies and supports historical data as well.

---

## Code Structure

### **Atoms**: Small, reusable components.
- **AtomLineChart.vue**: Displays the line chart for the currency rate.
- **AtomCurrencySelect.vue**: A select dropdown for choosing the currency.

### **Molecules**: Combined components that are made up of atoms.
- **MoleculePercentageBox.vue**: Displays the percentage change for the week and month.
- **MoleculeInputField.vue**: Input fields for currency values with the appropriate validation.

### **Organisms**: Larger components that combine molecules and atoms.
- **OrganismCurrencyInfo.vue**: Displays the currency information including the current rate, percentage change, and last update date.
- **OrganismCurrencyCalculator.vue**: Allows the user to input values and calculate currency conversion.

---

## Conclusion

This project demonstrates my skills in building modern, responsive, and functional web applications using **Vue.js** and other front-end technologies. It also shows my ability to work with APIs, manage state, and create interactive UI components.

Feel free to check out the project, and I would be happy to discuss further if you're interested in my work.

---