# Code-Example
It's a single page app. Implemented an example of the connection between client and server using API(GET requests). To edit the database pre-installed the ActiveAdmin panel.

Visit http://localhost:3000/admin and log in using:
User: admin@example.com
Password: password

The basic idea was that the client can record your expenses and can make plans based on deadline

### System dependencies
- [Ruby](https://www.ruby-lang.org) version `2.4.1`
- [Ruby on Rails](http://rubyonrails.org/) version `5.1.4`
- [Node](https://nodejs.org) version `8.2.1`
- [Angular CLI](https://github.com/angular/angular-cli) version `1.5.5`

### Installing
```
  bundle install
  yarn install
```

### Database creation
```
  rails db:setup
```

### Usage

Run `rails start` for a dev backend server.
Run `yarn start` for a dev frontend server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
