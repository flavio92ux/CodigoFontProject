 #!/bin/bash
 killall node
 cd back-end
 npm install
 npm start&
 cd ..
 cd front-end
 npm install
 npm start
