# ManageNest - Apartment Management System

## Overview

**ManageNest** is a web-based apartment management system designed to help property managers and landlords streamline their operations. The system allows users to manage tenant information, track rent payments, handle lease agreements, and process maintenance requests, all through a simple, user-friendly interface. The system is built to provide a comprehensive solution for managing rental properties efficiently, particularly in the **Rongai Residence** area.

## Features

1. **Tenant Manager**:  
   Manage tenant profiles, lease agreements, and contact information efficiently.
   
2. **RentPay Manual Tracking**:  
   Track rent payments and store payment history. Rent collection is manual, with details recorded in the system for easy reference.
   
3. **Unified Tenant Database**:  
   Maintain a single database that stores tenant profiles, lease agreements, and payment history for quick access.
   
4. **Lease & Payment Tracker**:  
   Easily track lease terms, rent due dates, and tenant payment history with timely notifications.

5. **Maintenance Request Management**:  
   Tenants can submit maintenance requests, which are tracked and managed by property managers to ensure timely resolutions.

## System Requirements

To run **ManageNest**, the following system requirements should be met:

- **Web Server**: Apache, Nginx, or any web server capable of running PHP applications.
- **Database**: MySQL, PostgreSQL, or any other relational database management system.
- **Backend**: PHP or any other server-side language/framework (e.g., Node.js, Python, Django).
- **Frontend**: HTML, CSS, JavaScript (React/Angular/Vue.js recommended).
- **Minimum PHP Version**: 7.4 or higher (if using PHP).

## Installation Guide

### Step 1: Clone the Repository

Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/your-username/managenest.git
```

### Step 2: Configure the Environment

1. Create a `.env` file in the project root to configure your database connection and other environment variables:
    ```
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=managenest
    DB_USERNAME=root
    DB_PASSWORD=yourpassword
    ```

2. Ensure the database credentials match your local development environment.

### Step 3: Set Up the Database

1. Create a new database:
    ```bash
    CREATE DATABASE managenest;
    ```

2. Run the database migrations:
    ```bash
    php artisan migrate
    ```

3. (Optional) Seed the database with sample data for testing purposes:
    ```bash
    php artisan db:seed
    ```

### Step 4: Install Dependencies

Install backend and frontend dependencies using the following commands:

- For the backend:
    ```bash
    composer install
    ```

- For the frontend (if applicable):
    ```bash
    npm install
    npm run dev
    ```

### Step 5: Start the Development Server

Start the application locally using the following command:

```bash
php artisan serve
```

Access the application at `http://localhost:8000` in your browser.

## Usage Instructions

1. **Login**:  
   Log in to the system using the provided credentials or create a new user (admin or property manager).

2. **Add a Tenant**:  
   Navigate to the "Tenant Manager" page to create a new tenant profile. Fill in the required information such as tenant name, contact details, lease start and end dates, and rent amount.

3. **Track Rent Payments**:  
   Navigate to the "RentPay Manual Tracking" page to manually record rent payments for each tenant. The system will track payment status and display any overdue rent.

4. **Manage Maintenance Requests**:  
   Tenants can submit maintenance requests, and property managers can track the status of these requests (e.g., pending, in-progress, completed).

5. **Monitor Lease Agreements**:  
   Use the "Lease & Payment Tracker" to monitor lease agreements, track renewals, and send reminders for expiring leases.

## System Architecture

The **ManageNest** system follows the traditional **MVC (Model-View-Controller)** architecture. Here’s an outline of the main components:

1. **Model**: Handles database interactions, such as storing tenant data, rent payments, and maintenance requests.
2. **View**: The frontend interface where users interact with the system. Built using HTML, CSS, and JavaScript (React/Angular/Vue.js recommended).
3. **Controller**: Manages the logic between user inputs and the model, ensuring that data is processed correctly.

## Database Structure

The system uses a relational database to store information. Key tables include:

1. **Tenants Table**: Stores tenant profile information.
2. **Payments Table**: Tracks rent payments and payment statuses.
3. **Lease Agreements Table**: Stores details about lease start/end dates and rent amounts.
4. **Maintenance Requests Table**: Logs maintenance issues submitted by tenants.
5. **Units Table**: Tracks each property unit's status and assigned tenant.

## Testing

1. Unit tests are provided to ensure functionality works as expected. You can run the tests using:

    ```bash
    php artisan test
    ```

2. Ensure that all tests pass before deploying to production.

## Contribution Guidelines

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Create a Pull Request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

