Andrea O'Brisky

This is my repository for ITWS4500 or Web Science, the next in sequence after Web Systems.

For descriptions of labs:
Lab 1: Create a twitter ticker!  Take tweets from a JSON file and filter new tweets every 5 seconds.  I made 5 tweets show at a time, and for these tweets I displayed username, user photo, main tweet content and tweet time.
Lab 2: Using geolocatiom, we needed to display weather at our location.  I used openweather's api in order to get the current forecast and the forecast for the next 10 days (which is displayed on loop in groups of 5).
Lab 3: Set up a server for group project, and repositories for personal labs and group project.  Install bug software!


Here are commands that I used to create the git repository:

Windows PowerShell
Copyright (C) 2014 Microsoft Corporation. All rights reserved.

PS C:\Users\obrisa> git
usage: git [--version] [--help] [-C <path>] [-c name=value]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           <command> [<args>]

These are common Git commands used in various situations:

start a working area (see also: git help tutorial)
   clone      Clone a repository into a new directory
   init       Create an empty Git repository or reinitialize an existing one

work on the current change (see also: git help everyday)
   add        Add file contents to the index
   mv         Move or rename a file, a directory, or a symlink
   reset      Reset current HEAD to the specified state
   rm         Remove files from the working tree and from the index

examine the history and state (see also: git help revisions)
   bisect     Use binary search to find the commit that introduced a bug
   grep       Print lines matching a pattern
   log        Show commit logs
   show       Show various types of objects
   status     Show the working tree status

grow, mark and tweak your common history
   branch     List, create, or delete branches
   checkout   Switch branches or restore working tree files
   commit     Record changes to the repository
   diff       Show changes between commits, commit and working tree, etc
   merge      Join two or more development histories together
   rebase     Reapply commits on top of another base tip
   tag        Create, list, delete or verify a tag object signed with GPG

collaborate (see also: git help workflows)
   fetch      Download objects and refs from another repository
   pull       Fetch from and integrate with another repository or a local branch
   push       Update remote refs along with associated objects

'git help -a' and 'git help -g' list available subcommands and some
concept guides. See 'git help <command>' or 'git help <concept>'
to read about a specific subcommand or concept.
PS C:\Users\obrisa> ls


    Directory: C:\Users\obrisa


Mode                LastWriteTime     Length Name
----                -------------     ------ ----
d----        11/15/2016   3:16 PM            .gstreamer-0.10
d----          3/5/2016   2:32 PM            .idlerc
d----         6/16/2016   6:11 PM            .LSC
d----        11/23/2016   8:07 AM            .maplesoft
d----          7/7/2017   7:28 PM            .nbi
d----          7/7/2017   7:27 PM            .oracle_jre_usage
d----        11/27/2016   6:47 PM            .Origin
d----         6/16/2016   6:11 PM            .QtWebEngineProcess
d----         1/16/2018   1:05 PM            .spss
d-r--         1/15/2018   2:06 PM            Contacts
d-r--         7/27/2016   1:44 PM            Creative Cloud Files
d-r--          2/8/2018  11:55 AM            Desktop
d-r--         1/23/2018  12:42 PM            Documents
d-r--          2/8/2018  11:49 AM            Downloads
d-r--         1/15/2018   2:06 PM            Favorites
d----         2/18/2016   4:23 PM            Geneious 9.0 Data
d-r--          2/4/2018   9:33 AM            Google Drive
d----         3/16/2016  11:56 AM            Intel
d-r--         1/15/2018   2:06 PM            Links
d-r--         1/29/2018   6:46 PM            Music
d-r--         1/15/2018   2:06 PM            Pictures
d----         5/16/2015   3:04 PM            Roaming
d-r--         1/15/2018   2:06 PM            Saved Games
d-r--         1/15/2018   2:06 PM            Searches
d----         4/27/2016  10:57 AM            SimUText
d----        10/12/2015   8:53 PM            Tracing
d-r--         1/15/2018   2:06 PM            Videos
-a---        11/13/2017   7:36 PM       1791 .bash_history
-a---         11/6/2017   4:34 PM        107 .gitconfig
-a---         10/4/2016   2:56 PM        849 .viminfo
-a---          3/1/2016   8:40 PM         67 check1.py
-a---         5/14/2016  11:20 AM        374 new untitles.py
-a---         5/13/2016   3:21 PM        177 untitled-1.py
-a---         5/14/2016  11:22 AM        401 untitled-3.py
-a---        10/16/2016  11:35 AM      29765 untitled9_MAS.bak


PS C:\Users\obrisa> cd C:\xampp\htdocs\websys\webscience
PS C:\xampp\htdocs\websys\webscience> mkdir ITWS4500


    Directory: C:\xampp\htdocs\websys\webscience


Mode                LastWriteTime     Length Name
----                -------------     ------ ----
d----          2/8/2018  12:10 PM            ITWS4500


PS C:\xampp\htdocs\websys\webscience> cd ITWs4500
PS C:\xampp\htdocs\websys\webscience\ITWs4500> ls
PS C:\xampp\htdocs\websys\webscience\ITWs4500> git init
Initialized empty Git repository in C:/xampp/htdocs/websys/webscience/ITWS4500/.git/
PS C:\xampp\htdocs\websys\webscience\ITWs4500> git add .\readme.txt
PS C:\xampp\htdocs\websys\webscience\ITWs4500> git commit -m "First commit"
[master (root-commit) 91f6dcd] First commit
 1 file changed, 1 insertion(+)
 create mode 100644 readme.txt
PS C:\xampp\htdocs\websys\webscience\ITWs4500> git remote add origin https://github.com/obrisa/ITWS4500.git
PS C:\xampp\htdocs\websys\webscience\ITWs4500> git remote -v
origin  https://github.com/obrisa/ITWS4500.git (fetch)
origin  https://github.com/obrisa/ITWS4500.git (push)
PS C:\xampp\htdocs\websys\webscience\ITWs4500> git push origin master
Counting objects: 3, done.
Writing objects: 100% (3/3), 234 bytes | 0 bytes/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To https://github.com/obrisa/ITWS4500.git
 * [new branch]      master -> master
PS C:\xampp\htdocs\websys\webscience\ITWs4500>










