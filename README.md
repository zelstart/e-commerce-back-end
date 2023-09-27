# E-Commerce Back End

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table Of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Credits](#credits)
- [License](#license)

## Description
This E-Commerce Back End is a straightforward backend solution designed for managing categories, products, and tags in an e-commerce system. Utilizing tools like Insomnia, users can add, update, and delete items within the database.

## Installation
To set up the E-Commerce Back End on your local machine, follow these steps:
1. Clone the repository to your local device.
2. Open the `.env.example` file, input your database username and password, and then rename the file to `.env`.
3. Launch your terminal and execute the following commands:
   - `npm install`
   - ```
        mysql -u root -p
        *enter your password*
        source db/schema.sql;
        ```
   - `npm run seeds`
   - `npm start`

### Dependencies
This project relies on the following dependencies:
- Node.js
- mysql2
- Sequelize

Ensure you have these dependencies installed before proceeding with the installation steps.

## Usage
[Seed Demo](https://watch.screencastify.com/v/8dIRDS5I4FjWXe3GScte)  
[Insomnia Demo](https://watch.screencastify.com/v/2YOCEZYPz2CErNdHQLCq)  
If the video links are inaccessible, you can also locate them in the `assets/demo_videos` directory.  

The backend functionality can be accessed through a tool like Insomnia, allowing you to create, modify, and remove various categories, products, and tags.

## Credits
The initial codebase was sourced from this [Starter Code](https://github.com/coding-boot-camp/fantastic-umbrella).

## License
MIT
