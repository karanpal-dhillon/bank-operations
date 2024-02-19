const initialCustomerState = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

function customerReducer(state = initialCustomerState, action) {
  switch (action.type) {
    case "customer/create":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return {
        ...state,
        fullName: action.payload,
      };
    default:
      return state;
  }
}

function createCustomer(fullName, nationalId) {
  return {
    type: "customer/create",
    payload: {
      fullName: fullName,
      nationalId: nationalId,
      createdAt: new Date().toISOString(),
    },
  };
}

export { customerReducer, createCustomer };
