#Cloud Final Project

#Group Memebers:
- JUSTIN RAMJATTAN: 816000989
- RACHEL PETERS: 816003509
- DAVID ORR: 816003099
- RANDELL PERSAD: 816003933
- TIANNA CORRIE: 816001580

#CloudFormation Stack
- Run the command sudo ./create.sh

#Deploy Application
- Wait for CloudFormation Stack to complete
- Go to DatabaseInstance
- Copy Endpoint url
- Replace current DB_HOST value with Endpoint url in app.yml
- Replace current host value in line 9 of the index.js file with the Endpoint urlencoded
- Go to AppNode
- Copy Public IP and replace "184.72.101.69" with the new IP in each line of the command.sh sendFile
- Build the docker app in and push to your docker hub account
- Replace the aundrae/final-project with the docker name you gave it in app.yml
- Run sudo ./command.sh to deploy

# Relevant File:
- app.yml
- create.sh
- delete.sh
- commands.sh
- Dockerfile
- index.js
- template.yml
