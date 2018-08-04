# Local dev environment setup

### Clone the repository
```
git clone git@github.com:MichalNetik/LanguageGame.git
```

### Create and activate virtual env
```
cd /webapp
python -m virtualenv env
source venv/bin/activate
```

### Install python dependencies
```
cd /webapp
python -m pip install -r requirements.txt
```

### Install npm dependencies
```
cd /angular/lang-game
npm install
```

### Create db
```
cd /webapp/lang_game
python manage.py migrate
```

### Populate db with sample_data
```
cd /webapp/lang_game
python manage.py loaddata sample_data
```

### Run django server + livereload
```
cd /webapp/lang_game
python manage.py runserver | python manage.py livereload
```

### Run front-end server
```
ng build --watch
```