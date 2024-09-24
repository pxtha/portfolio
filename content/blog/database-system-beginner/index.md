---
title: System Design Beginner
date: '2024-18-09T12:00:00.00Z'
description: 'I will be more confident after this!'
color: 'rgb(10, 108, 188)'
---
![](./kitten-7157608_1280.png)

# Database System Advance
## Database Overview: Relational Model and Algebra

### What is a database?
  - Answer this your self! A database is a collection of data.

### What a database management system (DBMS) is?
  - A database management system (DBMS) is a software package designed to define, manipulate, retrieve and manage data in a database. 

### Data model
- A collection of concepts that can be used to describe the structure of a database.
  - Relational model
  - NoSQL model
  - Key-value model
  - Graph model
  - Wide-column model
  - Network model
- Schema: is a description of a particular collection of data, using the given data model.

### History of database system
  - 1970s: Relational model by Ted Codd at IBM in white paper
  - ...

### Relational Model
  - Relation model defines a database abstract based on the relations to avoid the complexity of the network and hierarchical model.
  - Store database in simple data structure
  - Physical storage is abstracted from the user, left up to the DBMS implementation
  - Access data through high-level query language, DBMS figures out the best execution strategy

  - **Structure, Integrity, and Manipulation of Data**
    - **Structure**: The definition of the database's relations and their content INDEPENDENT of their physical representation.
      - The user only worries about the high-level application logic
      - The DBMS figures out the best way to store and access the data
        <img alt="img.png" height="350" src="./img.png" width="350"/>
    - **Integrity**: Ensure the database's contents satisfy certain constraints.
    - **Manipulation**: The manipulation of a database refers to the way in which data is accessed, retrieved, and updated.

  - Keywords:
    - **Relation**: A table with columns and rows
    - **Tuple**: A row in a table
    - **Primary key**: A unique identifier for a tuple
    - **Foreign key**: A reference to a primary key in another table

### Data Manipulation Language (DML)
  - The API that a DBMS provides to allow users to access and manipulate data.
    - Procedural: Relational Algebra
    - Non-procedural: Relational Calculus

### Relation Algebra


  - A procedural query language, A set of operators that take relations as input and return relations as output
    
  <img alt="img_1.png" height="400" width="200" src="img_1.png" />

  - **Selection**: Selects a subset of rows from relation
  - **Projection**: Selects a subset of columns from relation
  - **Join**: Combines two relations by a common column
  - **Union**: Returns all tuples from two relations
  - **Difference**: Returns tuples in one relation but not the other
  - **Intersection**: Returns tuples in both relations
  - **Product**: Returns all possible combinations of tuples from two relations

  <img alt="img_2.png" width="400" src="img_2.png"/>

### Queries
  - Relational algebra defines an order of the high-level steps to execute a query
  - A better approach is to state the high-level query and let the DBMS figure out the best way to execute it: SQL
  - The relational algebra is the foundation of the SQL language
  - The relation model is independent of any query language implementation

## Modern SQL

### SQL history
  - 1970s: SQL was developed at IBM by Donald D. Chamber: SQUARE > SEQUEL > SQL

### Example Database
![img_3.png](img_3.png)

### Aggregation FUNCTIONS
  - **COUNT**: Returns the number of rows
    - SELECT COUNT(*) FROM student WHERE login LIKE '%@cs';
  - **AVG**: Returns the average value of a column
    -     SELECT AVG(gpa) FROM student; 
    -     SELECT AVG(gpa), e.cid FROM enrolled e JOIN student s ON e.sid = s.sid GROUP BY e.cid;
    Filter result based on aggregate function
    -     SELECT AVG(gpa), e.cid FROM enrolled e JOIN student s ON e.sid = s.sid GROUP BY e.cid HAVING AVG(gpa) > 3.5;
  - **SUM**: Returns the sum of a column
  - **MIN**: Returns the minimum value of a column
  - **MAX**: Returns the maximum value of a column
### String Operations
  - **LIKE**: Pattern matching
    -     SELECT * FROM student WHERE login LIKE '%@cs';
  - **CONCAT**: Concatenates two strings
    -     SELECT CONCAT(firstname, ' ', lastname) FROM student;
  - **SUBSTRING**: Extracts a substring from a string
    -     SELECT SUBSTRING(login, 1, 3) FROM student;
  - **Concatenation**: Combines two strings
    -     SELECT firstname || ' ' || lastname FROM student;
### Date/time Operations
    - Get the number of days since the beginning of the year
      -     SELECT EXTRACT(DOY FROM CURRENT_DATE);

### Output Redirection
    - Redirect the output of a query to a file
      -     SELECT DISTINCT cid INTO TEMPORARY CourseId FROM enrolled WHERE cid LIKE 'CS%';

#### Window functions
- Perform calculations across a set of table rows that are related to the current row, without collapsing the result set.
- **RANK**: Assigns a unique rank to each row within the partition of a result set. 
- **ROW_NUMBER**: Assigns a unique sequential integer to each row within the partition of a result set.
  -     SELECT ROW_NUMBER() OVER (PARTITION BY cid ORDER BY gpa DESC) AS row_num, * FROM enrolled;
    