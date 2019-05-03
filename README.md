# WappyGeb

This project was made using [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3.

CONFIGURATION
------------

### Back-end envinronment

You will need to change the host address in the environment file `src/environments/environments.ts`.
You should find a sample at `src/environments/environments.sample.ts`.

You will set it up like the following:

serverAPI is the base url needed to call the backend APIs

serverFileUrl is the base url where files will be stored
(so if files folder is on the root of the server, then it will be something like http://8.8.8.8:8888/files)

```typescript
export const environment = {
  production: false,
  serverAPI: 'http://8.8.8.8:8888/backend/web',
  serverFileUrl: 'http://8.8.8.8:8888/files',
};
```

COMMANDS
------------

### Update dependencies

You may need to update project dependencies, before running it.
In order to do that, you will need to use the following command:

~~~
npm install
~~~

### Run it

To run the server, you will need to use the following command:

~~~
ng serve --host YOUR_HOSTNAME --port YOUR_PORT
~~~

or if you configure package.json by changing the following line

~~~
"start": "ng serve --host YOUR_HOSTNAME --port YOUR_PORT",
~~~

you can then run it with the following command:

~~~
npm start
~~~

The app will automatically reload if you change any of the source files.

## Build it

To build the project, you will need to use the following command:

~~~
ng build
~~~

The build artifacts will be stored in the `dist/` directory.