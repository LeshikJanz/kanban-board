import React from 'react'
import { Route } from 'react-router'
import { urls } from "urls"
import { PageNotFound } from './Main/components/PageNotFount'
import Base from './Main/containers'
import { TodoList } from './TodoList/components'
import Todo from './Todo/containers'

export default (
  <Route component={Base}>
    <Route path={urls.index} component={TodoList}/>
    <Route path={urls.todo} component={Todo}/>
    <Route path={urls.todo + '/:id'} component={Todo}/>
    <Route path='*' component={PageNotFound}/>
  </Route>
)
