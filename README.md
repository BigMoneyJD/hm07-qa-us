# Sprint 7 project

## Overview
This project contains integration for the Product Management API, focusing on different endpoints such as GET, POST, PUT, and DELETE.

## Project Structure
- **tests/**: Contains all the test files.
- **config.js**: Configuration file to manage API URLs, headers, etc.

## Getting Started

### Prerequisites
- Node.js
- npm or yarn

### Installation
1. **Clone the repository:**
   bash
   git clone git@github.com:BigMoneyJD/hm07-qa-us.git
2. **Navigate to the project directory:**
   bash
   cd hm07-qa-us
3. **Install the dependencies:**
   bash
   npm install
   
   or if you are using yarn:
   bash
   yarn install
### Configuration
1. **Set the test URL:**
   - Open `config.js`.
   - Set the `apiUrl` to your test URL.
   javascript
   module.exports = {
     apiUrl:"https://cnt-ebbf7862-6f37-4f7d-99e7-5cba3c850e8d.containerhub.tripleten-services.com" ,
     // other configurations
   }
### Running the Test Suite
1. Run the following command to run the test suite:
   bash
   npm test
   
   or if you are using yarn:
   bash
   yarn test
## Additional Information
- **API Documentation**: Refer to the API documentation for detailed information.
- **Contact**: For any queries, contact me at duranjeff@yahoo.com
