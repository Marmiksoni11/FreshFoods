

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

### All About admin-panel 🐛

<!-- check controller we have 2 files of controller  -->
<!-- controllers ==> AdminController.js and adminpanel.js -->

<!-- check middleware we have ==> authenticationAdmin -->
    // here we have error with user unAuthenticated issue with          middleware which is ==> authenticationAdmin
   // bcz of jwt related issue check middleware ==> authenticateAdmin !

<!-- if we solve above issue we can handle this route for front-end -->
router.get('/admin/userCount', authenticateAdmin, getUserCount);

<!-- now for css issue ! -->
// here we servering Html File =>  admin-panen.html !
// just need to adjust css issue!

<!-- we are serving admin-panel.html on this route check router -->
router.get('/admin/get/panel',AdminPanel.getAllUser);
------------------------------------- 

For Marmik : 

1) Products Routes are not Authenticated !
2) Products Data is not served from the DB served it from the DB !


---------------------------------


For       SMIT          :  

MAKE AN ADMIN :- 

1) DIRECTLY add this in your user in db  --- > role: "admin"

                           OR 

1) Go to postman/thunder-client ( BROWSER REQUEST FROM REGISTER PAGE WONT WORK ) 
2) create a new user using register user api and add the following fields in in req.body :
         {
            "name":"",
            "email":"",
            "password":"",
            "make_admin":false
         }
   And then just add this make_admin flag and it should be true


