<h1>Talker Manager</h1>

<p>
  Talker manage is a CRUD API. It was built using NodeJS and Express for read and write files using fs module.
  The user can create, read, update and delete talkers.
</p>

<h2>
 Built With
</h2>

<p> - NodeJS </p>
<p> - Express </p>
<p> - Conventional commits (extension) </p>

<h2>
  Endpoints
</h2>

<h3> Talker: </h3>
<hr />

<h3> - GET </h3>
 
<strong> /talker </strong>
<p> Get all talkers </p>
<strong> Parameters: No parameters </strong>
</br> </br>
<strong> Response: </strong>
<p> Status: 200 </p>
<img src="./images/AllTalkers.png"/>

<br />
<br />
<br />
<br />
<br />

<strong> /talker/:id </strong>
<p> Get talker by id </p>
<strong> Parameters: No parameters </strong>
<br /><br />
<strong> Response: </strong>
<p> Status: 200 </p>
<img src="./images/talkerGoodRequest.png"/>

<p> Status: 404 </p>
<p> -{ message: "Pessoa palestrante não encontrada" } </p>

<br />
<br />
<br />
<br />
<br />


<strong> /talker/search?q=searchTerm </strong>
<p> Get talkers by term </p>
<strong> Response: </strong>
<br />
<p> Status: 200 </p>
<img src="./images/talkerGoodRequest.png"/>

<p> If not found anyone with the search term return all talkers </p>

<p> Status: 401 </p>
<p> -{ message: "token not found" } </p>
<p> -{ message: "invalid token" } </p>

<br />
<br />
<br />

<h3> - POST </h3>

<strong> /talker </strong>
<p> Create new talker </p>
<strong> Parameters: </strong>
<p> - body </p>
<img src="./images/talkerBody.png" />

<p> - headers </p>
<p> authorization: 2zg4lua9ley7hdq5 </p>

<strong> Response: </strong>
<p> Status: 201 </p>
<img src="./images/talkerResponse.png"/>

<p> Status: 401 </p>
<p> -{ message: "token not found" } </p>
<p> -{ message: "invalid token" } </p>

<p> Status: 400 </p>
<p> -{ message: "name is required" } </p>
<p> -{ message: "name must be at least 3 characters" } </p>
<p> -{ message: "age is required" } </p>
<p> -{ message: "talk is required" } </p>
<p> -{ message: "watchedAt is required" } </p>
<p> -{ message: "watchedAt must be like "dd/mm/aaaa"" } </p>
<p> -{ message: "rate is required" } </p>
<p> -{ message: "rate must be a integer from 1 to 5" } </p>

<br />
<br />
<br />

<h3> - PUT </h3>

<strong> /talker:id </strong>
<p> Update a talker by id</p>
<strong> Parameters: </strong>
<p> - body </p>
<img src="./images/talkerBody.png" />

<p> - headers </p>
<p> authorization: 2zg4lua9ley7hdq5 </p>

<strong> Response: </strong>
<p> Status: 200 </p>
<img src="./images/talkerResponse.png"/>

<p> Status: 401 </p>
<p> -{ message: "token not found" } </p>
<p> -{ message: "invalid token" } </p>


<p> Status: 400 </p>
<p> -{ message: "name is required" } </p>
<p> -{ message: "name must be at least 3 characters" } </p>
<p> -{ message: "age is required" } </p>
<p> -{ message: "age must be greater than 18" } </p>
<p> -{ message: "talk is required" } </p>
<p> -{ message: "watchedAt is required" } </p>
<p> -{ message: "watchedAt must be like "dd/mm/aaaa"" } </p>
<p> -{ message: "rate is required" } </p>
<p> -{ message: "rate must be a integer from 1 to 5" } </p>

<br />
<br />
<br />


<h3> - DELETE </h3>
 
<strong> /talker:id </strong>
<p> Delete a talker by id</p>

<strong> Parameters: No parameters </strong>
</br> </br>
<strong> Response: </strong>
<p> Status: 204 </p>
<p> - Nothing </p>

<p> Status: 401 </p>
<p> -{ message: "token not found" } </p>
<p> -{ message: "invalid token" } </p>

<br />
<br />
<br />

<h3> Login: </h3>
<hr />

<h3> - POST </h3>

<strong> /login </strong>
<p> Do login and recive a token </p>
<strong> Parameters: </strong>
<p> - body </p>
<img src="./images/loginBody.png" />

<strong> Response: </strong>
<p> Status: 200 </p>
<img src="./images/loginResponse.png"/>

<p> Status: 400 </p>
<p> -{ message: "password is required" } </p>
<p> -{ message: "email is required" } </p>
<p> -{ message: "password must be at least 6 characters" } </p>
<p> -{ message: "email must be like email@email.com" } </p>

<br />
<br />
<br /> 

<h2>
  How try the application?
</h2>

<p>
  1. First run <code>npm install</code> to install all dependencies of project. </br>
  2. If you don´t have any client extension to do the requestions download <code>Thunder Client</code> extension on VS Code.</br>
  3. Run <code>npm start</code>.</br>
  4. Select the method on thunder client.</br>
  5. Do requisitions on thunder client using the URL shape http://localhost:3000/endpoint.
  </br>
  </br>
  Just it, enjoy!
</p>

<br />
<br />
<br /> 

<p> Any questions or suggestions? Contact me </p>

<a href="https://www.linkedin.com/in/george-santos-dev" rel="nofollow">
  <img
    height="50px"
    width="50px"
    src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/linkedin/linkedin-original.svg"
    alt="LinkedIn"
  />   
</a>
