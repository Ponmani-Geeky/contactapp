export const initial ={
    messages:[{
      name: "ponmani",
      chats: {
        "kamal": ["hello kamall"],
        "vijay": ["hi vijay"],
      },
    },
    {
      name: "kamal",
      chats: {
        "ponmani": ["hello ponmani"],
        "vijay": ["hi Vijay "],
      },
    },
    {
      name: "vijay",
      chats: {
        "ponmani": ["hello mani"],
        "kamal": ["hi kamal"],
      },
    },
]
}
  
  export const actionTypes = {
    SET_User: "SET_MSG",
  };
  
  const Messagereducer = (state, action) => {
      console.log('messageeeeeee',action.message)
    switch (action.type) {
      case actionTypes.SET_MSG:
        return {
          ...state,
          messages:action.message
        };
  
      default:
        return state;
    }
  };
  
  export default Messagereducer;
  