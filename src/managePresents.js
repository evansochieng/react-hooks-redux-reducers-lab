const initialState = { numberOfPresents: 0 };

export function managePresents(state = initialState, action) {
  // update state based on the type of action passed
  switch (action.type) {
    case "presents/increase":
      return { numberOfPresents: state.numberOfPresents + 1 };
    default:
      return state;
  }
}
