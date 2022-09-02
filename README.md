# Projet assistance de base version django et angular 14
### Dans ce projet, il y a deux type d'utilisateurs : utilisateur simple et l'administrateur
Tous les API ci-dessous nécessite une connexion ( basic auth)

## Installation du projet
Dans le dossier backend, il y a le fichier requirements.txt contenant les dépendances. Il faut lancer le  commande suivant
##### pip3 -r install requirements.txt
Ensuite, il faut lancer les migrations 
##### python3 manage.py makemigrations
##### python3 manage.py migrate
##### python3 manage.py runserver 8080

Après cela, on peut test les urls ci-dessous en utilisant les informations suivantes pour la connexion

### utilisateur simple : 
##### username : staff
##### password: staff

### utilisateur administrateur
##### username : admin
##### password: admin

Pour la partie front, il faut aller aux dossier frontend, et lance la commande suivante :
##### yarn install

## API pour le ticket
Methode : get, post, delete
http://127.0.0.1:8080/api/ticket 

Methode : get, put, delete
http://127.0.0.1:8080/api/ticket/id (id : paramètre)

## API pour le commentaire (reply)
Methode : get, post, delete
http://127.0.0.1:8080/api/post 

Methode : get, put, delete
http://127.0.0.1:8080/api/post/id (id : paramètre)

## API pour l'attachement
Methode : get, post, delete
http://127.0.0.1:8080/api/attachement 

Methode : get, put, delete
http://127.0.0.1:8080/api/attachement/id (id : paramètre)

