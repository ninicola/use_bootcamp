# Mac MySQL Installation

## MySQL Server

* Download **MySQL Community Server 5.7** from [MySQL Server](https://dev.mysql.com/downloads/mysql/5.7.html#downloads) choosing the DMG option.

* Follow the installation [instructions](https://dev.mysql.com/doc/refman/5.7/en/osx-installation-pkg.html).

* During setup a temporary password will be given. Be sure to record this for the time being

![temp root password](../Images/mac-installer-root-password.png)

* Once the download has been complete, open the terminal and run `mysql -u root -p`. With the following prompt, enter the temporary password. If everything works, your terminal will now be in the MySQL Command Line Interface (also referred to as CLI).

* The next step is to change the temp password to a personal password. From the mysql CLI run the command `ALTER USER 'root'@'localhost' IDENTIFIED BY '<your new password>';` Where `<your new password>` is your newly created password.

* Finally, check the new password by exiting mysql CLI  with `exit`, then start the MySQL CLI again with `mysql -u root -p`. Log in with the newly created password to confirm the change.

* Remember the new password you created for future use.

## MySQL Workbench

* Download [MySQL Workbench](https://www.mysql.com/products/workbench/).

* Once the download has finished, open the installer and run through the installation. This process should be more straightforward opposed to the server.

* Open up MySQL Workbench after installation.
