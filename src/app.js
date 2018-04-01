import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './modules/sagas'
import reducer from '../reducers'
import routes from './modules/routes'
import 'app.scss'
import { Router, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware, routerMiddleware(hashHistory), thunk)
)

const history = syncHistoryWithStore(hashHistory, store)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <div style={{ height: '100%' }}>
      <Router history={history} routes={routes}/>
    </div>
  </Provider>,
  document.getElementById('root')
)
