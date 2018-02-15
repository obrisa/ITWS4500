Link to group repository:
https://github.com/fakedestinyck/RPI-WebSysDev-FORMQ
Link to personal repository:
https://github.com/obrisa/ITWS4500
Mantis for project server(Password and Username ITWS4500):
http://ec2-34-235-151-212.compute-1.amazonaws.com/mantisbt-2.11.1/my_view_page.php

NOTE: WORD DOCUMENT HAS IMAGES TO SUPPORT THE STEPS FOLLOWED

This lab was great because I learned more about AWS, github, SSH and other technologies!  I personally
had a little bit of difficulty with installing bugzilla. However, with the help of Ahmed,
I was able to set it up throught the alteration of the localconfig file.

For individual requirements:
Setup hosted account (github, bitbucket, other)
-obrisa is my account
Setup local and remote repositories for your coursework
Remote – github 
-remote repository titled 
-see images of local repositories 
-both titled ITWS4500
-to make local repository I completed the following steps:
--PS C:\xampp\htdocs\websys\webscience> cd ITWs4500
--PS C:\xampp\htdocs\websys\webscience\ITWs4500> ls
--PS C:\xampp\htdocs\websys\webscience\ITWs4500> git init
--Initialized empty Git repository in C:/xampp/htdocs/websys/webscience/ITWS4500/.git/
--PS C:\xampp\htdocs\websys\webscience\ITWs4500> git add .\readme.txt
--PS C:\xampp\htdocs\websys\webscience\ITWs4500> git commit -m "First commit"
--[master (root-commit) 91f6dcd] First commit
--1 file changed, 1 insertion(+)
--create mode 100644 readme.txt
--PS C:\xampp\htdocs\websys\webscience\ITWs4500> git remote add origin https://github.com/obrisa/ITWS4500.git
--PS C:\xampp\htdocs\websys\webscience\ITWs4500> git remote -v
--origin  https://github.com/obrisa/ITWS4500.git (fetch)
--origin  https://github.com/obrisa/ITWS4500.git (push)
--PS C:\xampp\htdocs\websys\webscience\ITWs4500> git push origin master
--Counting objects: 3, done.
--Writing objects: 100% (3/3), 234 bytes | 0 bytes/s, done.
--Total 3 (delta 0), reused 0 (delta 0)
--To https://github.com/obrisa/ITWS4500.git
-- * [new branch]      master -> master
--PS C:\xampp\htdocs\websys\webscience\ITWs4500>
Share the repository with Rahul (rahulprajapati3568) and me – taswegian (pfox@cs.rpi.edu)
-Completed!
Install Bug Tracking software to your local machines – Show configuration and screenshot when complete.
-See word document for images.
Submit links in readme to LMS with Part 2
-https://github.com/obrisa/ITWS4500
 
For Group Requirements:
Setup a server for your projects
-We used aws to setup a server for our project
"itws4500gp.pem" itws4500@ec2-34-235-151-212.compute-1.amazonaws.com
Readme should include a description of your project and the repo should contain your proposal
-Placed this in; link is as follows:
-Readme: https://github.com/fakedestinyck/RPI-WebSysDev-FORMQ/blob/master/README.md
-Proposal: https://github.com/fakedestinyck/RPI-WebSysDev-FORMQ/blob/master/Form%20Q%20Project%20Proposal.docx 
Setup local and remote repositories
Local – each team member
-Cloned repository look at image in word document
Remote – github or bitbucket
-Used github: https://github.com/fakedestinyck/RPI-WebSysDev-FORMQ
Remote – your production server 
-We used aws to setup a server for our project
"itws4500gp.pem" itws4500@ec2-34-235-151-212.compute-1.amazonaws.com
Setup a Bug Tracking server for your projects
-We used mantis, look at image or log in using ITWS as username and password for the following link to see
 http://ec2-34-235-151-212.compute-1.amazonaws.com/mantisbt-2.11.1/my_view_page.php 
-Give us authority to the server and the repo
run ssh -i "itws4500gp.pem" itws4500@ec2-34-235-151-212.compute-1.amazonaws.com
Submit links in readme via LMS
-see links above!
