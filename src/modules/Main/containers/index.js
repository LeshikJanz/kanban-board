import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Base from "../components/Main"
import { compose, lifecycle, withState, withHandlers, withProps } from 'recompose'
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
      props.itemLists.reduce((result, itemList) =>
        ({
          ...result,
          [itemList.name]: itemList.items
        }), {})
    })
  )
)(Base)

