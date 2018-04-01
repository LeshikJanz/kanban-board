// @flow
/* eslint-disable react/no-multi-comp */
import { Item } from "types/item"
import React, { Component } from 'react'
import styled from 'styled-components'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import QuoteItem from './quote-item'
import { grid, colors } from '../constants'
import Title from './title'
import type {
  DroppableProvided,
  DroppableStateSnapshot,
  DraggableProvided,
  DraggableStateSnapshot,
} from 'react-beautiful-dnd'

const Wrapper = styled.div`
  background-color: ${({ isDraggingOver }) => (isDraggingOver ? colors.blue.lighter : colors.blue.light)};
  display: flex;
  flex-direction: column;
  opacity: ${({ isDropDisabled }) => (isDropDisabled ? 0.5 : 'inherit')};
  padding: ${grid}px;
  padding-bottom: 0;
  transition: background-color 0.1s ease, opacity 0.1s ease;
  user-select: none;
  width: 250px;
`

const DropZone = styled.div`
  min-height: 250px;
  margin-bottom: ${grid}px;
`

const ScrollContainer = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 300px;
`

const Container = styled.div``

type Props = {
  listId: string,
  listType?: string,
  items: Item[],
  title?: string,
  internalScroll?: boolean,
  isDropDisabled ?: boolean,
  style?: Object,
  // may not be provided - and might be null
  autoFocusQuoteId?: ?string,
  ignoreContainerClipping?: boolean,
}

type QuoteListProps = {
  items: Item[],
  autoFocusQuoteId: ?string,
}

class InnerQuoteList extends Component<QuoteListProps> {
  shouldComponentUpdate(nextProps: QuoteListProps) {
    if (nextProps.items !== this.props.items) {
      return true
    }

    return false
  }

  render() {
    return (
      <div>
        {this.props.items.map((item: Item, index: number) => (
          <Draggable key={item.id} draggableId={item.id} index={index}>
            {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
              <div>
                <QuoteItem
                  item={item}
                  provided={provided}
                  snapshot={snapshot}
                  {...provided.dragHandleProps}
                  autoFocus={this.props.autoFocusQuoteId === item.id}
                />
                {provided.placeholder}
              </div>
            )}
          </Draggable>
        ))}
      </div>
    )
  }
}

type InnerListProps = {|
  dropProvided: DroppableProvided,
  items: Items[],
  title: ?string,
  autoFocusQuoteId: ?string,
  |}

class InnerList extends Component<InnerListProps> {
  render() {
    const { items, dropProvided, autoFocusQuoteId } = this.props
    const title = this.props.title ? (
      <Title>{this.props.title}</Title>
    ) : null

    console.log("items")
    console.log(items)

    return (
      <Container>
        {title}
        <DropZone innerRef={dropProvided.innerRef}>
          <InnerQuoteList
            items={items}
            autoFocusQuoteId={autoFocusQuoteId}
          />
          {dropProvided.placeholder}
        </DropZone>
      </Container>
    )
  }
}

export default class QuoteList extends Component<Props> {
  render() {
    const {
      ignoreContainerClipping,
      internalScroll,
      isDropDisabled,
      listId,
      listType,
      style,
      items,
      autoFocusQuoteId,
      title,
    } = this.props

    return (
      <Droppable
        droppableId={listId}
        ignoreContainerClipping={ignoreContainerClipping}
        isDropDisabled={isDropDisabled}
      >
        {(dropProvided: DroppableProvided, dropSnapshot: DroppableStateSnapshot) => (
          <Wrapper
            style={style}
            isDraggingOver={dropSnapshot.isDraggingOver}
            isDropDisabled={isDropDisabled}
            {...dropProvided.droppableProps}
          >
            {internalScroll ? (
              <ScrollContainer>
                <InnerList
                  items={items}
                  title={title}
                  dropProvided={dropProvided}
                  autoFocusQuoteId={autoFocusQuoteId}
                />
              </ScrollContainer>
            ) : (
              <InnerList
                items={items}
                title={title}
                dropProvided={dropProvided}
                autoFocusQuoteId={autoFocusQuoteId}
              />
            )}
          </Wrapper>
        )}
      </Droppable>
    )
  }
}
