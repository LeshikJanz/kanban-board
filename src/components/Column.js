// @flow
import type { Quote } from '../types'
import { Item } from "types/item"
import type { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd'
import React, { Component } from 'react'
import styled from 'styled-components'
import { grid, colors, borderRadius } from './constants'
import { Draggable } from 'react-beautiful-dnd'
import QuoteList from './primatives/quote-list'
import Title from './primatives/title'

const Wrapper = styled.div`
  display: flex
  flex-direction: column
`

const Container = styled.div`
  margin: ${grid}px
  display: flex
  flex-direction: column
`

const Header = styled.div`
  display: flex
  align-items: center
  justify-content: center
  border-top-left-radius: ${borderRadius}px
  border-top-right-radius: ${borderRadius}px
  background-color: ${({ isDragging }) => (isDragging ? colors.blue.lighter : colors.blue.light)}
  transition: background-color 0.1s ease
  &:hover {
    background-color: ${colors.blue.lighter}
  }
`

type Props = {|
  title: string,
  quotes: Quote[],
  index: number,
  autoFocusQuoteId: ?string,
  |}

const getItemStyle = (draggableStyle, isDragging) => ({
  userSelect: 'none',
  margin: 4,
  background: isDragging ? '#cf4868' : '#edf0f2',
  ...draggableStyle,
})

export default class Column extends Component<Props> {
  render() {
    const title: string = this.props.title
    const items: Item[] = this.props.items
    const index: number = this.props.index
    return (
      <Draggable draggableId={title} index={index} type="COLUMN">
        {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
          <Wrapper>
            <Container
              innerRef={provided.innerRef}
              style={getItemStyle(
                                 provided.draggableStyle,
                                 snapshot.isDragging
                               )}
              {...provided.draggableProps}
            >
              <Header isDragging={snapshot.isDragging}>
                <Title
                  isDragging={snapshot.isDragging}
                  {...provided.dragHandleProps}
                >
                  {title}
                </Title>
              </Header>
              <QuoteList
                listId={title}
                listType="QUOTE"
                items={items}
                autoFocusQuoteId={this.props.autoFocusQuoteId}
              />
            </Container>
            {provided.placeholder}
          </Wrapper>
        )}

      </Draggable>
    )
  }
}
