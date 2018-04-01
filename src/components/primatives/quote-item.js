// @flow
import type { DraggableProvided } from 'react-beautiful-dnd'
import type { Item } from "types/item"
import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { borderRadius, colors, grid } from '../constants'

type Props = {
  item: Item,
  isDragging: boolean,
  provided: DraggableProvided,
  autoFocus?: boolean,
}

const Container = styled.div`
border-radius: ${borderRadius}px;
border: 1px solid grey;
background-color: ${({ isDragging }) => (isDragging ? colors.green : colors.white)};
box-shadow: ${({ isDragging }) => (isDragging ? `2px 2px 1px ${colors.shadow}` : 'none')};
padding: ${grid}px;
min-height: 40px;
margin-bottom: ${grid}px;
user-select: none;
transition: background-color 0.1s ease;
color: ${colors.black};
&:hover {
  color: ${colors.black};
  text-decoration: none;
}
&:focus {
  outline: 2px solid ${colors.purple};
  box-shadow: none;
}
display: flex;
align-items: center;
`

const Content = styled.div`
flex-grow: 1;
width: 100%;
flex-basis: 100%;
display: flex;
flex-direction: column;
`

const BlockQuote = styled.div`
&::before {
  content: open-quote;
}
&::after {
  content: close-quote;
}
`

const Attribution = styled.small`
display: flex;
justify-content: flex-end;
margin-top: 20px;
`

const getItemStyle = (draggableStyle, isDragging) => ({
  userSelect: 'none',
  margin: 4,
  background: isDragging ? '#cf4868' : '#edf0f2',
  ...draggableStyle,
})

export default class QuoteItem extends React.PureComponent<Props> {
  componentDidMount() {
    if (!this.props.autoFocus) {
      return
    }

    // eslint-disable-next-line react/no-find-dom-node
    const node: HTMLElement = (ReactDOM.findDOMNode(this) : any)
    node.focus()
  }

  render() {
    const { item, isDragging, provided, snapshot } = this.props

    return (
      <Container
        isDragging={isDragging}
        innerRef={provided.innerRef}
        style={
          getItemStyle(provided.draggableStyle, snapshot.isDragging)
        }
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <div>
          <Content>
            <BlockQuote>{item.description}</BlockQuote>
            <Attribution>{item.title}</Attribution>
          </Content>
        </div>
      </Container>
    )
  }
}
