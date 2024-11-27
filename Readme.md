# After downloading the project

1. Execute the "npm install" command for installing all the dependencies used for this project

# Install Pgadmin 4 - For installation find below documentation link

- https://www.how2shout.com/how-to/2-ways-to-install-pgadmin-4-on-windows-11-or-10.html

# Install postgresql on the local machine - follow instructions for installation

1. Go to the postgresql official website and download the app for suitable OS version
2. Select Installation Directory: Choose where PostgreSQL will be installed, or leave it as the default
3. Select Components: Keep the default components (PostgreSQL Server, pgAdmin, Command Line Tools, Stack Builder).
4. Set Password: Enter a secure password for the PostgreSQL superuser (postgres).
5. Port Number: Use the default port (5432) unless you need a different one.

# verify installation

1. Use the command prompt to check if PostgreSQL is installed and running using this command "psql --version"

# Connect to PostgreSQL

1. Open pgAdmin or a terminal with PostgreSQL's psql CLI.
2. Log in using the superuser postgres and the password you set during installation.

# Create a new database using pgadmin

1. Open pgAdmin and log in.
2. Right-click on Databases in the left-hand menu and select Create > Database.
3. Fill in:
        - Database Name: Enter a name for your database.
        - Owner: Leave it as postgres or select another user if applicable.
4. Click Save to create the database.

# Take down a note from pgAdmin while creation

1. Note password
2. User Name
3. Database Name
4. Port 
   
   - We need to add the values of these variables in .env file.

# Before running the project add .env file inside config folder and the variable inside the .env file should look like this

DB_HOST=""
DB_USERNAME=""
DB_PASSWORD=""
DB_NAME=""
DB_DIALECT=""
DB_PORT=
      

      This link contains the structure and format for .env file - https://drive.google.com/file/d/1wJusBWHq78pdOSoa7Cn6EeFP7h9AIMIC/view?usp=sharing

# How to run  the project

1. Execute "npm run dev" command for running the project 

# How to perform unit test using jest

1. Execute the command "npm test" 