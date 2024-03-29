# 0x0D. SQL - Introduction

## General
+ What’s a database
+ What’s a relational database
+ What does SQL stand for
+ What’s MySQL
+ How to create a database in MySQL
+ What does `DDL` and `DML` stand for
+ How to `CREATE` or `ALTER` a table
+ How to `SELECT` data from a table
+ How to `INSERT`, `UPDATE` or `DELETE` data
+ What are `subqueries`
+ How to use MySQL functions


# Requirements

## General

+ Allowed editors: `vi, vim, emacs`
+ All your files will be executed on `Ubuntu 20.04 LTS` using `MySQL 8.0 (version 8.0.25)`
+ All your files should end with a new line
+ All your SQL queries should have a comment just before (i.e. syntax above)
+ All your files should start by a comment describing the task
+ All SQL keywords should be in uppercase `(SELECT, WHERE…)`
+ A`README.md` file, at the root of the folder of the project, is mandatory
+ The length of your files will be tested using wc


## More Info

### Comments for your SQL file:
```ruby
$ cat my_script.sql
-- 3 first students in the Batch ID=3
-- because Batch 3 is the best!
SELECT id, name FROM students WHERE batch_id = 3 ORDER BY created_at DESC LIMIT 3;
$
```

# Install MySQL 8.0 on Ubuntu 20.04 LTS
```ruby
$ sudo apt update
$ sudo apt install mysql-server
...
$ mysql --version
mysql  Ver 8.0.25-0ubuntu0.20.04.1 for Linux on x86_64 ((Ubuntu))
$
```

### Connect to your MySQL server:
```ruby
$ sudo mysql
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 11
Server version: 8.0.25-0ubuntu0.20.04.1 (Ubuntu)

Copyright (c) 2000, 2021, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql>
mysql> quit
Bye
$
```

### Use “container-on-demand” to run MySQL
### In the container, credentials are root/root

+ Ask for container Ubuntu 20.04
+ Connect via SSH
+ OR connect via the Web terminal
+ In the container, you should start MySQL before playing with it:

```ruby
$ service mysql start                                                   
 * Starting MySQL database server mysqld 
$
$ cat 0-list_databases.sql | mysql -uroot -p                               
Database                                                                                   
information_schema                                                                         
mysql                                                                                      
performance_schema                                                                         
sys                      
$
```
+ In the container, credentials are `root/root`


# SQL - Introduction

In this project, we began working on relational databases. I started practising introductory SQL data definitions and data manipulation language, making subqueries, and using functions.

## Tasks :page_with_curl:

* **0. List databases**
  * [0-list_databases.sql](./0-list_databases.sql): MySQL script that lists all databases.

* **1. Create a database**
  * [1-create_database.sql](./1-create_database.sql): MySQL script that creates the database `hbtn_0c_0`.
  
* **2. Delete a database**
  * [2-remove_databases.sql](./2-remove_databases.sql): MySQL script that deletes the database `hbtn_0c_0`.

* **3. List tables**
  * [3-list_tables.sql](./3-list_tables.sql): MySQL script that lists all tables.
  
* **4. First table**
  * [4-first_table.sql](./4-first_table.sql): MySQL script that creates a table `first_table`.
  * Description:
    * `id`: INT
    * `name`: VARCHAR(256)

* **5. Full description**
  * [5-full_table.sql](./5-full_table.sql): MySQL script that prints the full description of the table `first_table`.
  
* **6. List all in table**
  * [6-list_values.sql](./6-list_values.sql): MySQL script that lists all rows of the table
  `first_table`.

* **7. First add**
  * [7-insert_value.sql](./7-insert_value.sql): MySQL script that inserts a new row in the table `first_table`.
  * Description:
    * `id` = `89`
    * `name` = `Best School`

* **8. Count 89**
  * [8-count_89.sql](./8-count_89.sql): MySQL script that displays the number records with `id = 89` in the table `first_table`.

* **9. Full creation**
  * [9-full_creation.sql](./9-full_creation.sql): MySQL script that creates and fills a table `second_table`.
  * Description:
    * `id`: INT
    * `name`: VARCHAR(256)
    * `score`: INT
  * Records:
    * `id` = 1, `name` = "John", `score` = 10
    * `id` = 2, `name` = "Alex", `score` = 3
    * `id` = 3, `name` = "Bob", `score` = 14
    * `id` = 4, `name` = "George", `score` = 8

* **10. List by best**
  * [10-top_score.sql](./10-top_score.sql): MySQL script that lists the `score` and `name` of all records of the table `second_table` in order of descending `score`.

* **11. Select the best**
  * [11-best_score.sql](./11-best_score.sql): MySQL script that lists the `score` and `name` of all records with a `score >= 10` in the table `second_table` in order of descending score.

* **12. Cheating is bad**
  * [12-no_cheating.sql](./12-no_cheating.sql): MySQL script that updates the score of Bob to 10 the table `second_table`.

* **13. Score too low**
  * [13-change_class.sql](./13-change_class.sql): MySQL script that removes all records with a `score <= 5` in the table `second_table`.

* **14. Average**
  * [14-average.sql](./14-average.sql): MySQL script that computes the average `score` of all records in the table `second_table`.

* **15. Number by score**
  * [15-groups.sql](./15-groups.sql): MySQL script that lists the `score` and number of records with the same score in the table `second_table` in order of descending count.

* **16. Say my name**
  * [16-no_link.sql](./16-no_link.sql): MySQL script that lists the `score` and `name` of all records in the table `second_table` in order of descending `score`.
  * Does not display rows without a `name` value.

* **17. Go to UTF8**
  * [100-move_to_utf8.sql](./100-move_to_utf8.sql): MySQL script that converts the `hbtn_0c_0` database to UTF8.

* **18. Temperatures #0**
  * [101-avg_temperatures.sql](./101-avg_temperatures.sql): MySQL script that displays the average temperature (Fahrenheit) by city in descending order.

* **19. Temperatures #1**
  * [102-top_city.sql](./102-top_city.sql): MySQL script that displays the three cities with the highest average temperature from July to August in descending order.

* **20. Temperature #2**
  * [103-max_state.sql](./103-max_state.sql): MySQL script that displays the max temperature of each state in order of state name.
  
## Dump file :dolphin:
* Tasks 101-103 query from the database [temperatures.sql](./temperatures.sql).
