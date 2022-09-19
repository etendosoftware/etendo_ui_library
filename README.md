# Etendo UI Workspace

## Requirements

### Stack versions

* Node v18.9.0
* Yarn 1.22.18

### Code requirements

_Typescript_


_Folder structure_

* Components: 

```src/components/```

Each component must have a Component itself and a file ".types.ts" with the needed declaration of it

* Stories: 

```src/components/__stories__```

* Tests: 

```src/components/__tests__```


### VS Code extensions

* Jest
* EditorContig for VS Code

## Commands

### Install libraries

```
yarn install
```

### Run storybook

```
yarn storybook
```

### Run tests

```
yarn test
```

### Publish library

```
yarn publish --tag next
```

```
yarn publish --tag latest
```



