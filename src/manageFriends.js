// Initial state
const initialState = {
  friends: []
};

export function manageFriends(state, action) {
  // update state based on the type of action passed
  switch (action.type) {
    case "friends/add":
      return { friends: [...state.friends, action.payload] };
    case "friends/remove":
      return { friends: state.friends.filter( (friend) => friend.id !== action.payload) };
    default:
      return state;
  }
}
