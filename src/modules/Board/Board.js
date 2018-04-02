// @flow
import type {
  DropResult,
  DragStart,
  DraggableLocation,
  DroppableProvided,
} from 'react-beautiful-dnd'
import React, { Component } from 'react'
import styled from 'styled-components'
import Column from './Column'
import { connect } from 'react-redux'
import reorder, { reorderQuoteMap } from './reorder'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

import { updateItemsOrderRequested, updateItemListsOrderRequested } from "./actions"

const ParentContainer = styled.div`
  height: ${({ height }) => height};
  overflow-x: hidden;
  overflow-y: auto;
`

const Container = styled.div`
  margin-top: 30px;
  min-height: 100vh;
  min-width: 100vw;
  display: inline-flex;
`

type Props = {
  containerHeight?: string,
}

type State = {
  columns: QuoteMap,
  ordered: string[],
  autoFocusQuoteId: ?string,
}

class Board extends Component<Props, State> {
  state: State = {
    columns: this.props.initial,
    ordered: Object.keys(this.props.initial),
    autoFocusQuoteId: null,
  }

  onDragStart = (initial: DragStart) => {
    this.setState({
      autoFocusQuoteId: null,
    })
  }

  onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return
    }

    const source: DraggableLocation = result.source
    const destination: DraggableLocation = result.destination

    if (source.droppableId === destination.droppableId &&
      source.index === destination.index) {
      return
    }

    if (result.type === 'COLUMN') {
      const ordered: string[] = reorder(
        this.state.ordered,
        source.index,
        destination.index
      )

      this.setState({
        ordered,
      }, () => {
        const sortedItemLists = this.state.ordered.map(itemListName =>
          this.props.itemLists.find(itemList => itemList.name === itemListName)
        )
        const sortedItemListsIds = sortedItemLists.map(itemList => itemList.id)
        this.props.updateItemListsOrder(sortedItemListsIds)
      })

      return
    }

    const data = reorderQuoteMap({
      quoteMap: this.state.columns,
      source,
      destination,
    })

    this.setState({
        columns: data.quoteMap,
        autoFocusQuoteId: data.autoFocusQuoteId,
      }, () => {
        const sortedIds = Object.keys(this.state.columns)
          .reduce((result, itemListName) => ({
            ...result,
            [itemListName]: this.state.columns[itemListName].map(item => item.id)
          }), {})
        this.props.updateItemsOrder(sortedIds)
      }
    )
  }

  render() {
    const columns: QuoteMap = this.state.columns
    const ordered: string[] = this.state.ordered
    const { containerHeight } = this.props

    const board = (
      <Droppable
        droppableId="board"
        type="COLUMN"
        direction="horizontal"
        ignoreContainerClipping={Boolean(containerHeight)}
      >
        {(provided: DroppableProvided) => (
          <Container innerRef={provided.innerRef} {...provided.droppableProps}>
            {ordered.map((key: string, index: number) => (
              <Column
                key={key}
                index={index}
                title={key}
                items={columns[key]}
                autoFocusQuoteId={this.state.autoFocusQuoteId}
              />
            ))}
          </Container>
        )}
      </Droppable>
    )

    return (
      <DragDropContext
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
      >
        {this.props.containerHeight ? (
          <ParentContainer height={containerHeight}>{board}</ParentContainer>
        ) : (
          board
        )}
      </DragDropContext>
    )
  }
}

const mapStateToProps = state => ({
  itemLists: state.Board.lists
})

const mapDispatchToProps = (dispatch) => ({
  updateItemListsOrder: (ids: string[]) =>
    dispatch(updateItemListsOrderRequested(ids)),
  updateItemsOrder: (ids: string[]) =>
    dispatch(updateItemsOrderRequested(ids))
})

export default connect(mapStateToProps, mapDispatchToProps)(Board)
