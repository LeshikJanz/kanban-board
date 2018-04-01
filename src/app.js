import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './modules/sagas'
import reducer from '../reducers'
import 'app.scss'
import thunk from 'redux-thunk'
const sagaMiddleware = createSagaMiddleware()
import Header from "modules/Main/components/Header"
import Wrapper from "modules/Main/components/Wrapper"
import Base from 'modules/Main/containers'
import urls from './urls'
import CreateItemList from "./modules/ItemList/CreateItemList"
import CreateItem from "./modules/Item/CreateItem"

const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware, thunk)
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Wrapper>
          <Header/>
          <Route exact path={urls.index} component={Base}/>
          <Route path={urls.list} component={CreateItemList}/>
          <Route path={urls.item} component={CreateItem}/>
        </Wrapper>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)
