import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Base from "../components/index"
import { compose, lifecycle, withState, withHandlers, withProps } from 'recompose'
import { fetchItemListsRequested } from "../actions"

const mapStateToProps: any = (state): any => ({
  menuType: state.Todos.type
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
  })
)(Base)

