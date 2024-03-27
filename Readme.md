

```bash 

GITHUB COMMANDS :

    1) go to the folder i created in college and do the following  : 
       
       git checkout loginAuth
       git pull origin master

    2) THEN START WORKING ! ,  make all your changes in this branch and once you are done, 
     do the following  : 

        git add .
        git commit -m ""
        git push origin loginAuth
        
```

------------------ FOR SMIT ------------------------

### SMIT TODOS : 

    1) The Login Form is already created you only have to do designing
    
    2) Create a Register page (BACKEND ALREADY CREATED)
    
    3) A User should not be Able to hit a URL in CHROME only if the user is logged in 
    example, hit the following URL : http://localhost:3000/home.html 
    this url should not open if the user is not logged in like wise OTHER PAGES AS WELL ! 


----------------------- ADDITIONAL CONSIDERATIONS ------------------------------

### About Login API : 

   --- >  WHEN YOU DO LOGIN MAKE SURE TO REGISTER WITH THE ACCOUNT FIRST

### About Register API : 

   --- >  WHEN YOU DO Register MAKE SURE TO KEEP THE EMAIL UNIQUE FOR EVERY REGISTER OR ELSE IT WILL THROW THE 'DUPLICATE' ERROR , as the emails in the database have to be UNIQUE 

# plase check issue:

login signup !

changes made by SMIT:

app.js => i have set view engine for server ejs in dist!
          path set! all done!
dist/ public / css,js (working well)!


controller / random.js check this
routes / authRoutes.js check this





