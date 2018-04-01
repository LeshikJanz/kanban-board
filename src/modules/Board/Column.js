// @flow
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import type { Quote } from '../types'
import type { Item } from "types/item"
import type { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd'
import React, { Component } from 'react'
import styled from 'styled-components'
import { grid, colors, borderRadius } from './constants'
import { Draggable } from 'react-beautiful-dnd'
import QuoteList from './primatives/quote-list'
import Title from './primatives/title'
import urls from 'urls'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Container = styled.div`
  margin: ${grid}px;
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: ${borderRadius}px;
  border-top-right-radius: ${borderRadius}px;
  background-color: ${({ isDragging }) => (isDragging ? colors.blue.lighter : colors.blue.light)};
  transition: background-color 0.1s ease;
  &:hover {
    background-color: ${colors.blue.lighter};
   
    a {
      display: block !important;
    }
  }
`

const Edit = styled(Link)`
  display: none;
  position: absolute;
  right: 5px;
  top: 0;
  z-index: 10;
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

class Column extends Component<Props> {
  render() {
    const title: string = this.props.title
    const items: Item[] = this.props.items
    const index: number = this.props.index
    const itemList = this.props.itemLists &&
      this.props.itemLists.find(itemList => itemList.name === title)

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
                <Edit to={`${urls.list}/${itemList.id}`}>
                  Edit
                </Edit>
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

const mapStateToProps = state => ({
  itemLists: state.Board.lists,
})

export default connect(mapStateToProps)(Column)
