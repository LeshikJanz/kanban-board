import React from "react"
import { connect } from "react-redux"
import "../Item/styles.scss"
import {
  fetchItemListRequested,
  updateItemListRequested,
  deleteItemListRequested
} from "./actions"

class EditItemList extends React.Component {
  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.fetchItemList(this.props.match.params.id)
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...nextProps.itemList })
  }

  handleDeleteItemList = () =>
    this.props.deleteItemList(this.state, this.props.history)

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.updateItemList(this.state, this.props.history)
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
          <div className="editActions">
            <button className="create" disabled={!isNaN(name)}>Update</button>
            <button type="button" onClick={this.handleDeleteItemList} className="delete">
              Delete
            </button>
          </div>
        </form>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  itemList: state.ItemList,
})

const mapDispatchToProps = (dispatch) => ({
  fetchItemList: (itemId) =>
    dispatch(fetchItemListRequested(itemId)),
  updateItemList: (item, history) =>
    dispatch(updateItemListRequested({ item, history })),
  deleteItemList: (item, history) =>
    dispatch(deleteItemListRequested({ item, history })),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditItemList)
