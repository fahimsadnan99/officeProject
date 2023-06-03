import { createSlice } from "@reduxjs/toolkit";

let ProductReducer = createSlice({
  name: "Product",
  initialState: {
    Product: [],
  },
  reducers: {
    allProduct(state, actions) {
      state.Product = actions.payload;
    },
    assignProduct(state, actions) {
      console.log(actions);
      let newProduct = {
        id: state.Product.length + 1,
        name: actions.payload.name,
        img : actions.payload.img,
        price : actions.payload.price
      };
      state.Product = [...state.Product, newProduct];
    },
    deleteProduct(state, actions) {
      let filterProduct = state.Product?.filter((item) => item.id !== actions.payload);
      state.Product = filterProduct;
    },
    updateProduct(state, actions) {
      
      let updateProduct = state.Product?.findIndex((item) => item.id == actions.payload.id);

       state.Product?.splice(updateProduct, 1, actions.payload);
    
    },
  },
});

export const { allProduct, assignProduct, deleteProduct, updateProduct } = ProductReducer.actions;
export default ProductReducer.reducer;
