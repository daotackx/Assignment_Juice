const initialState = {
  isLoggedIn: false,

};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGOUT':
      return {
        ...initialState // Đặt lại trạng thái ban đầu của auth
      };
    default:
      return state;
  }
};

export default authReducer;
