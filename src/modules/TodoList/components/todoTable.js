import React from 'react'
import '../styles/table.scss'
import { Link } from 'react-router'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const filterByPublicFields = (elem, i) => ({
  id: i + 1,
  title: elem.title,
  description: elem.description
})

const reorder = (list, startIndex, endIndex) => {
  const result = list
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const getItemStyle = (draggableStyle, isDragging) => ({
  userSelect: 'none',
  margin: 4,
  background: isDragging ? '#cf4868' : '#edf0f2',
  ...draggableStyle,
})

export const TodoTable = ({
                            todoList,
                            loading,
                            gotoTodo,
                            isFinishedList,
                            handleFinish,
                            handleDelete,
                            updateTodosOrder
                          }) => {

  const onDragEnd = (result) => {
    if ( !result.destination ) {
      return
    }

    const items = reorder(
      todoList.filter(t => t.isFinished === isFinishedList),
      result.source.index,
      result.destination.index
    )

    updateTodosOrder(items.map(i => i.id))
  }

  return (
    <div>
      {(todoList.length !== 0 && !loading) &&
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
            >
              <div className="row">
                <div>№</div>
                <div>Title</div>
                <div>Description</div>
                <div className="tableActions"></div>
              </div>
              {
                todoList
                  .filter(t => t.isFinished === isFinishedList)
                  .sort((a, b) => a.order - b.order)
                  .map((l, i) =>
                    <Draggable key={i} draggableId={i}>
                      {(provided, snapshot) => (
                        <div className="rowContainer">
                          <div className="row"
                               ref={provided.innerRef}
                               style={getItemStyle(
                                 provided.draggableStyle,
                                 snapshot.isDragging
                               )}
                               {...provided.dragHandleProps}>
                            {
                              Object.values(filterByPublicFields(l, i))
                                .map((o, i) => <div onClick={() => gotoTodo(l.id)} key={i}>{o}</div>)
                            }
                            <div className="tableActions">
                              {!isFinishedList && <button onClick={() => handleFinish(l)}>Finish</button>}
                              {isFinishedList && <button onClick={() => handleFinish(l)}>Active</button>}
                              <button onClick={() => handleDelete(l.id)}>Delete</button>
                            </div>
                          </div>
                          {provided.placeholder}
                        </div>
                      )}
                    </Draggable>
                  )
              }
            </div>
          )}
        </Droppable>
      </DragDropContext>
      }
      {
        loading && <h1>Loading...</h1>
      }
      {
        (!loading && todoList.length === 0) &&
        <h1 className="emptyTable">
          There is no one Todo. Tap to the New Button in the top left corner for starting your experience.
        </h1>
      }
    </div>
  )
}
