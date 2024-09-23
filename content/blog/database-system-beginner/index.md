---
title: System Design Beginner
date: '2024-18-09T12:00:00.00Z'
description: 'I will be more confident after this!'
color: 'rgb(10, 108, 188)'
---
![](./kitten-7157608_1280.png)

# Database System Advance
## Database

- What is a database?
  - A database is an organized collection of data, generally stored and accessed electronically from a computer system.
- What a database management system (DBMS) is?
  - A database management system (DBMS) is a software package designed to define, manipulate, retrieve and manage data in a database. 
- Data model: is a collection of concepts that can be used to describe the structure of a database.
  - Relational model
  - NoSQL model
  - Key-value model
  - Graph model
  - Wide-column model
  - Network model
- Schema: is a description of a particular collection of data, using the given data model.
- History of database system
  - 1960s: Hierarchical model, Network model
  - 1970s: Relational model
  - 1980s: Object-oriented model
  - 1990s: Semi-structured data model
  - 2000s: NoSQL model
  - Codasyl vs Relational model
  - 
- Relation model defines a database abstract based on the relations to avoid the complexity of the network and hierarchical model.
  - store database in simple data structure
  - physical storage is abstracted from the user, left up to the DBMS implementation
  - Access data through high-level query language, DBMS figures out best execution strategy

- Structure, Integrity, and Manipulation of Data
  - Structure: The definition of the database's relations and their content INDEPENDENT of their physical representation.
    - The user only worries about the high-level application logic
    - The DBMS figures out the best way to store and access the data
    - ![img.png](./img.png)
  - Integrity: Ensure the database's contents satisfy certain constraints.
  - Manipulation: The manipulation of a database refers to the way in which data is accessed, retrieved, and updated.