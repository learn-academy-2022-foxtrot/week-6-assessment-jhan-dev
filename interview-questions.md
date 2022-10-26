# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer:    If the user forgot to have a foreign key column, they can do a migration with the rails command --> $ rails g migration TitleOfWhatMigrationIsFor --> afterwards an empty migration file will be created. Inside the the method add --> add_column :model/plural, :new_column_name :dataTypeOfColumn. The foreign key would be located inside of the Student model, which is in relation with the primary key id from the Cohort model called cohort_id.

Researched answer:      If you need to add a new column, generate a migration with $ rails g migration TitleOfWhyYouAreMigrating --> this command will generate a new ActiveRecord::Migration file with a method called change. Inside the empty method you will use --> add_column :model/plural :new_column_name :integer <-- as that is the data type  associated with the primary key id from cohort. The name of the foreign key would be cohort_id as that will establish the relationship between Student and Cohort. The foreign key would be located in the Student model which links to the Cohort model's primary key id.

2. Which RESTful routes must always be passed params? Why?

Your answer:    I believe the only RESTful routes that must always pass params are SHOW, EDIT, CREATE, UPDATE and DESTROY. This is because for SHOW --> it will need to know what to show, such as ID. For EDIT --> it will have to know what ID to display a form for user input. For CREATE --> it will take in private params that are required to be answered correctly. For UPDATE --> the database will need the params to update the table with the required params. For DELETE --> it needs to know which ID to destroy from the table so it will take in params from the user to determine the correct thing to destroy.

Researched answer:  I am a bit confused on if only params with requirements were meant or all params including params[:id] as well. Assuming all params, RESTful routes would need SHOW, EDIT, and  DESTROY because the database will need to know the associated params[:id] of the thing to be shown, edited or deleted. For things that need private params that are required, only form methods such as CREATE and UPDATE will need private require params. This is because without the correct inputs of what rails is expecting, it will limit incorrect values and null inputs to be added to the database.


3. Name three rails generator commands. What is created by each?

Your answer:    From the top of my head there are: 
    - 'rails g controller ControllerName' <-- generates a Rails Controller
    - 'rails g model ModelName' <-- generates a Rails Model
    - 'rails g resource' <-- generates a Rails Controller and Model

Researched answer:  Three rails generator commands are listed below:
    - 'rails g ModelName column1:dataType column2:dataType (etc)' if additional columns are needed.
        This command will generate a Rails model for the rails app with its coorelated columns to be apart of the table.

    - 'rails g controller ControllerName' <-- generates a rails Controller where we put our CRUD and HTTP verbs associations with our Model.

    - 'rails g resource ModelName column1:dataType column2:dataType (etc)' if additional columns are needed. This command will generate a Rails model, and controller for the rails app with  its coorelated columns. 

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
def index would be used with the GET HTTP Verb. This will retrieve all available IDs from the table students.

action: "POST" location: /students
def create would be used with the POST HTTP Verb. This will post user inputs collected from the def new which displayed a form to collect information for this process to be tasked to the database to create a new unique primary key.

action: "GET" location: /students/new
def new would be used with the GET HTTP Verb. This will render a form template to the user to take inputs for a new creation for the table.

action: "GET" location: /students/2
def show would be used with the GET HTTP Verb. This will display the one thing associated with the specific primary key of 2 from the table.

action: "GET" location: /students/2/edit
def edit would be used with the GET HTTP Verb. This will render a form temaplte to the user associated with the primary key id of 2 and allow the user to input information associated to this primary key id.

action: "PATCH" location: /students/2
def update would be used with the PATCH HTTP Verb. This will update the user inputs collected from the def edit which displayed a form to collect information for this process to be tasked to the database to update data for the associated primary key id 2.

action: "DELETE" location: /students/2
def destroy would be used with the DELETE HTTP Verb. This will delete the data associated with the primary key id of 2. Nothing new will be displayed as this feature would typically be available strictly on the specific primary key id associated page. But on the database side, it will use the primary key id information to destroy the specific id from the table.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1) As a user, I can login or create a new account.
2) As a user, I can view all my to-do-list(s).
3) As a user, I can create a new to-do-list.
4) As a user, I can click on a specific to-do-list.
5) As a user, I can check of tasks from a to-do-list.
6) As a user, I can edit an existing to-do-list.
7) As a user, I can share my to-do-list.
8) As a user, I can make share my to-do-list with a link.
9) As a user, I can delete my to-do-list.
10) As a user, I cannot access other people's to-do-list without a share link.