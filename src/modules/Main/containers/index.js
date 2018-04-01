import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { Base } from "../components/index"
import { changeListType } from "../../actions"

const mapStateToProps: any = (state): any => ({
  menuType: state.Todos.type
})

const mapDispatchToProps = (dispatch) => ({
  handleMenu: ({ target }) => {
    dispatch(changeListType(target.innerText.toLowerCase()))
  },
  backToMainPage: (pathname) => {
    if ( pathname !== '/' ) {
      dispatch(push('/'))
    }
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Base)

