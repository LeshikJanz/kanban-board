// @flow
import type {
  DropResult,
  DragStart,
  DraggableLocation,
  DroppableProvided,
} from 'react-beautiful-dnd'
import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'
import Column from './Column'
import { colors } from './constants'
import reorder, { reorderQuoteMap } from './reorder'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

import type { QuoteMap } from '../types'

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
  initial: QuoteMap,
  containerHeight?: string,
}

type State = {
  columns: QuoteMap,
  ordered: string[],
  autoFocusQuoteId: ?string,
}

export default class Board extends Component<Props, State> {
  state: State = {
    columns: this.props.initial,
    ordered: Object.keys(this.props.initial),
    autoFocusQuoteId: null,
  }

  boardRef: ?HTMLElement

  componentDidMount() {
    // eslint-disable-next-line no-unused-expressions
    injectGlobal`
      body {
        background: ${colors.blue.deep}
      }
    `
  }

  onDragStart = (initial: DragStart) => {
    this.setState({
      autoFocusQuoteId: null,
    })
  }

  onDragEnd = (result: DropResult) => {
    // dropped nowhere
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
    })
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