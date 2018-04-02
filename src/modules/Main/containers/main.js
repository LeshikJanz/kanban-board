import { connect } from 'react-redux'
import Main from "../components/Main"
import { compose, lifecycle, withProps } from 'recompose'
import { fetchItemListsRequested } from "../actions"

const mapStateToProps = state => ({
  itemLists: state.Board.lists,
  loading: state.Board.loading,
})

const mapDispatchToProps = (dispatch) => ({
  fetchItemLists: () => {
    dispatch(fetchItemListsRequested())
  },
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.fetchItemLists()
    }
  }),
  withProps((props) => ({
    itemLists: !!props.itemLists.length &&
    props.itemLists.reduce((result, itemList) => ({
      ...result,
      [itemList.name]: itemList.items
    }), {})
  })))
(Main)

