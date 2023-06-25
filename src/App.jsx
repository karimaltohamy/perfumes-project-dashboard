import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ListPage from "./pages/listPage/ListPage";
import UsersPage from "./pages/usersPage/UsersPage";
import AddProduct from "./pages/addProduct/AddProduct";
import EditProduct from "./pages/editProduct/EditProduct";
import ProductDetails from "./pages/productDetails/ProductDetails";
import { ordersColumns, productsColumns, userColumns } from "./dataTable";
import AddUser from "./pages/addUser/AddUser";
import EditUser from "./pages/editUser/EditUser";
import Login from "./pages/login/Login";
import AddOrder from "./pages/addOrder/AddOrder";
import EditOrder from "./pages/editOrder/EditOrder";
import OrderDetails from "./pages/orderDetails/OrderDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/products"
        element={<ListPage typePage={"products"} columns={productsColumns} />}
      />
      <Route path="/products/new" element={<AddProduct />} />
      <Route path="/products/edit/:id" element={<EditProduct />} />
      <Route path="/products/productDetails/:id" element={<ProductDetails />} />
      <Route
        path="/users"
        element={<ListPage typePage={"users"} columns={userColumns} />}
      />
      <Route path="/users/new" element={<AddUser />} />
      <Route path="/users/edit/:id" element={<EditUser />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/orders"
        element={<ListPage typePage={"orders"} columns={ordersColumns} />}
      />
      <Route path="/orders/new" element={<AddOrder />} />
      <Route path="/orders/edit/:id" element={<EditOrder />} />
      <Route path="/orders/productDetails/:id" element={<OrderDetails />} />
    </Routes>
  );
}

export default App;
