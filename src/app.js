import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './modules/sagas'
import reducer from '../reducers'
import 'app.scss'
import { syncHistoryWithStore } from 'react-router-redux'
import thunk from 'redux-thunk'
const sagaMiddleware = createSagaMiddleware()
import Base from 'modules/Main/containers'

const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware, thunk)
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <div style={{ height: '100%' }}>
      <Router>
        <Switch>
          <Route exact path='/' component={Base}/>
        </Switch>
      </Router>
    </div>
  </Provider>,
  document.getElementById('root')
)
