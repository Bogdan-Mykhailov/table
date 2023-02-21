# Table
Table is a web application that allows users to view and manipulate data in a table format. It is built with React, Redux Toolkit, and TypeScript.

## Installation

To install Table, follow these steps:

1. Clone the repository to your local machine
2. Navigate to the project directory in your terminal
3. Run `yarn` to install dependencies
4. Run `yarn start` to start the development server

To use Table, open the application in your browser at [http://localhost:3000](http://localhost:3000).

Table comes with a default table that includes four columns: name, username, phone, and company. These columns are displayed by default when the user first opens the application. 

<img width="1501" alt="Screenshot 2023-02-21 at 15 56 54" src="https://user-images.githubusercontent.com/91826635/220370000-17ba15fd-278d-4aee-9ed8-bb83eee46e2c.png">

Users can customize the columns that are displayed in the table by opening the "Select Columns" modal window and selecting or deselecting columns.

<img width="651" alt="Screenshot 2023-02-21 at 16 00 44" src="https://user-images.githubusercontent.com/91826635/220370231-5189e429-715c-4635-adef-34463deaf7e9.png">

The modal window displays a list of available columns that can be added to the table. The list of available columns is searchable using an input field at the top of the modal. As the user types in the search field, the list of available columns is filtered to only show columns that match the search query.

<img width="1337" alt="Screenshot 2023-02-21 at 16 22 14" src="https://user-images.githubusercontent.com/91826635/220370965-c945274d-0d8f-421f-9300-5a40a8769fd6.png">

The modal window is implemented using React and Redux Toolkit. The state of the modal window (list of available and selected columns) is managed using Redux Toolkit.

Modal window includes an input that allows users to search for available columns. When the user types in the input field, the table is automatically filtered to only display columns that is available.

<img width="1306" alt="Screenshot 2023-02-21 at 16 29 27" src="https://user-images.githubusercontent.com/91826635/220372672-2417e877-6c28-4047-b60e-b0626a0f2b75.png">

## Contributing

If you would like to contribute to Table, please follow these steps:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Implement your changes
4. Write tests for your changes (if applicable)
5. Run `yarn test` to ensure that all tests pass
6. Submit a pull request to the `main` branch

## Tech Stack

Table is built with a modern tech stack that includes the following technologies:

- React
- Redux Toolkit
- TypeScript
- CSS Modules
- Webpack

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
