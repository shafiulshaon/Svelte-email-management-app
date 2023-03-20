## Running the project

Install the dependencies...

```bash
npm install
```

...then start [Rollup](https://rollupjs.org) in development mode:

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). 

## Building the project for deployment

To generate production version:

```bash
npm run build
```

## Technologies used

- `Svelte` framework is used since it doesn't produce any runtime element. This should keep the app performant as new features are added.
- `Typescript` is used to augment Javascript with type information. Helps prevent bugs from showing up.
- `SCSS` syntax is used to help write complex CSS rules, as well as all its pre-processing benefits.
- `Lodash` is added so we don't have to reinvent the wheel for utility functions.