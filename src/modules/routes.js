import React from 'react'
import { Route } from 'react-router'
import { urls } from "urls"
import { PageNotFound } from './Main/components/pageNotFount'
import Base from './Main/containers/index'
import { TodoList } from './TodoList/components/index'
import Todo from './Todo/containers/index'

export default (
  <Route component={Base}>
    <Route path={urls.index} component={TodoList}/>
    <Route path={urls.todo} component={Todo}/>
    <Route path={urls.todo + '/:id'} component={Todo}/>
    <Route path='*' component={PageNotFound}/>
  </Route>
)
