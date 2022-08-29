# 0 Knowledge Two Factor Auth
A simple node app you can use to create a secure two factor auth system that is locally run.

# How to use?

Open up setup.js and change the config elements. Change password to the password you want to use and change twoFactorCode to the code provided to your by the website you are authenticating on.

Setup.js will give you some information. Open index.js and put this information in there and save it. At the same time enter a port you would like to access the auth codes from.

After this delete setup.js. For security reasons the program will not run while setup.js is present.

Now you can access your auth code using http://localhost:PORT?password=yourPassword

# License
This software is provided as is and I cannot be held liable for anything you do with it. This includes the loss of data due to you forgetting your password.

This software is not distributed under any generic copyleft license. You may use it in your own projects if the project meets the three following criteria:

- The project is "Open Source"; this means the project's code is publicly available.
- The project is not for commercial use. You can use this code for educational and personal exploration.
- Credit is clearly given to this github page in the top of your source code.
