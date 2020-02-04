import { connect } from "react-redux";
import UsersAPIComponent from "./UsersAPIComponent";
import {
  followAC,
  setCurrentPageAC,
  setUsersAC,
  unFollowAC,
  setTotalUsersCountAC
} from "../../redux/users-reducer";

let mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  };
};

let mapDispatchToProps = dispatch => {
  return {
    follow: userId => {
      dispatch(followAC(userId));
    },
    unFollow: userId => {
      dispatch(unFollowAC(userId));
    },
    setUsers: users => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: pageNumber => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: totalCount => {
      dispatch(setTotalUsersCountAC(totalCount));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);
