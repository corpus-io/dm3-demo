# dm3-demo

## Getting Started
```
yarn install
yarn start
```
Open http://localhost:3000

## Demo Config
This repo uses the following .env config to connect to the dm3 backend:
```
REACT_APP_ADDR_ENS_SUBDOMAIN=".beta-addr.dm3.eth"
REACT_APP_USER_ENS_SUBDOMAIN=".beta-user.dm3.eth"
REACT_APP_DEFAULT_DELIVERY_SERVICE="beta-ds.dm3.eth"
REACT_APP_BACKEND="https://dm3-beta2.herokuapp.com"
REACT_APP_DEFAULT_SERVICE="https://dm3-beta2.herokuapp.com"
REACT_APP_RESOLVER_BACKEND="https://dm3-beta2-resolver.herokuapp.com"
```
You can also deploy your backend.
## Demo Creation 
This demo repo was created with the following commands:
```
yarn create react-app dm3-demo --template typescript
yarn add dm3-react
```
