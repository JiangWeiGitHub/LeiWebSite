# Simplest Web Site with react & redux & material ui

[Reference Link: **Redux**](http://redux.js.org/docs/basics/UsageWithReact.html)<p>
[Reference Link: **React**](https://facebook.github.io/react/docs/thinking-in-react.html)<p>
[Reference Link: **Forms in React Redux**](http://x-team.com/2016/02/tutorial-forms-in-react-and-redux/)<p>
[Reference Link: **Improve Reactjs Motion**](https://www.nicolasmerouze.com/improve-reactjs-apps-motion-design/)<p>

[Code Editor: **Sublime**](http://www.sublimetext.com/3)<p>
[Code Editor: **Visual Studio Code**](https://code.visualstudio.com/Download)<p>

### How to use

  + Create `PostgreSQL` database before running project

    - install
    
      `sudo apt install postgresql`

    - switch user
    
      `sudo su postgres`

      PS: At first, only user `postgres` can be used

    - add new user `jack`
    
      `createuser -P jack -d`

    - switch user to last one
    
      `exit`

    - create a new database `jack` under user `jack`
    
      `createdb jack -U jack`

      PS: If you see `psql: FATAL:  Peer authentication failed ...`, edit `/etc/postgresql/9.?/main/pg_hba.conf`, change `peer` to `trust`, then `systemctl restart postgresql`

    - enter into this new database `jack` under user `jack`
    
      `psql jack -U jack`

    - add a new table to this new database

    ```
      CREATE TABLE weather (
          city            varchar(80),
          temp_lo         int,           -- low temperature
          temp_hi         int,           -- high temperature
          prcp            real,          -- precipitation
          date            date
      );
    ```

    - add contents to this table

    ```
      INSERT INTO weather VALUES ('San Francisco', 46, 50, 0.25, '1994-11-27');

      INSERT INTO weather (city, temp_lo, temp_hi, prcp, date)
          VALUES ('New York', 43, 57, 0.0, '1994-11-29');

      INSERT INTO weather (date, city, temp_hi, temp_lo)
          VALUES ('1994-11-29', 'Hayward', 54, 37);
    ```

    - check the table
    
      `SELECT * FROM weather;`

    - quit from this database
    
      `\q`

  + Install project's dependencies
  
    `npm install --registry https://registry.npm.taobao.org`

  + Run project
  
    `npm start`

  + Open browser to see the webpage just like: `192.168.5.110:4000`

  + Test `PostgreSQL` just like: `192.168.5.110:4000/test`

