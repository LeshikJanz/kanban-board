import React from "react"
import { connect } from "react-redux"
import "./styles.scss"
import { createItemRequested } from "./actions"
import { fetchItemListsRequested } from "modules/Main/actions"

class CreateItem extends React.Component {
  state = {
    title: "",
    description: "",
    itemListId: ""
  }

  componentDidMount() {
    if (!this.props.itemLists.length) {
      this.props.fetchItemLists()
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createItem(this.state, this.props.history)
  }

  handleChange = ({ target }) =>
    this.setState({ [target.name]: target.value })

  handleSelect = ({ target }) =>
    this.setState({ itemListId: target.value })

  render() {
    const { title, description, itemListId } = this.state
    return (
      <div className="createItemContainer">
        <h1>Create new Item</h1>
        <form className="createItemForm" onSubmit={this.handleSubmit}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="*Should be a string"
            value={title} onChange={this.handleChange}
          />
          <label>Description</label>
          <textarea type="text" rows="10" name="description" value={description} onChange={this.handleChange}/>
          <label>Item List</label>
          <select value={itemListId} onChange={this.handleSelect}>
            <option value="">Select Item List</option>
            {
              this.props.itemLists.map(itemList =>
                <option key={itemList.id} name="itemListId" value={itemList.id}>
                  {itemList.name}
                </option>
              )
            }
          </select>
          <button className="primary" disabled={!(isNaN(title) && description && itemListId)}>
            Create
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  itemLists: state.Board.lists
})

const mapDispatchToProps = (dispatch) => ({
  fetchItemLists: () => {
    dispatch(fetchItemListsRequested())
  },
  createItem: (item, history) =>
    dispatch(createItemRequested({ item, history }))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateItem)
