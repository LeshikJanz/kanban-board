import React from "react"
import { connect } from "react-redux"
import "./styles.scss"
import { fetchItemRequested } from "./actions"
import { fetchItemListsRequested } from "../Main/actions"
import { updateItemRequested } from "./actions"

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
    if (this.props.match.params.id) {
      this.props.fetchItem(this.props.match.params.id)
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...nextProps.item })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.updateItem(this.state, this.props.history)
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
            <option value="">Select ItemList</option>
            {
              this.props.itemLists.map(itemList =>
                <option key={itemList.id} name="itemListId" value={itemList.id}>
                  {itemList.name}
                </option>
              )
            }
          </select>
          <div className="editActions">
            <button className="create" disabled={!(isNaN(title) && description && itemListId)}>
              Update
            </button>
            <button className="delete">
              Delete
            </button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  item: state.Item,
  itemLists: state.Board.lists,
})

const mapDispatchToProps = (dispatch) => ({
  fetchItem: (itemId) =>
    dispatch(fetchItemRequested(itemId)),
  updateItem: (item, history) =>
    dispatch(updateItemRequested({ item, history })),
  fetchItemLists: () =>
    dispatch(fetchItemListsRequested())
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateItem)
