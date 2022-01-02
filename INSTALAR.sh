 #!/bin/bash
 killall node
 cd back-end
 npm install
 npm start&
 node seed.js*
 cd ..
 cd front-end
 npm install
 npm start
