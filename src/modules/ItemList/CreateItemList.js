import React from "react"
import { connect } from "react-redux"
import "../Item/styles.scss"
import { createItemListRequested } from "./actions"

class CreateItemList extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createItemList(this.state, this.props.history)
  }

  state = { name: "" }

  handleChange = ({ target }) =>
    this.setState({ [target.name]: target.value })

  render() {
    const { name } = this.state

    return (
      <div className="createItemContainer">
        <h1>Create new ItemList</h1>
        <form className="createItemForm" onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input
            type="text" name="name"
            placeholder="*Should be a string"
            value={name}
            onChange={this.handleChange}/>
          <button className="primary" disabled={!isNaN(name)}>Create</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  createItemList: (itemList, history) =>
    dispatch(createItemListRequested({ itemList, history }))
})

export default connect(null, mapDispatchToProps)(CreateItemList)
