import React, { useContext, useEffect, useState } from "react";
import "./listPage.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { SidebarContext } from "../../context/sidebarContext";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { productsData, usersData } from "../../data";
import { DataGrid } from "@mui/x-data-grid";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ListPage = ({ typePage, columns }) => {
  const columnsActions = {
    field: "actions",
    headerName: "Actions",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellActions">
          <Link
            className="btn_view"
            to={`/products/productDetails/${params.row.id}`}
          >
            <RemoveRedEyeIcon />
          </Link>
          <Link className="btn_edite" to={`/${typePage}/edit/${params.row.id}`}>
            <EditIcon />
          </Link>
          <button
            className="btn_delete"
            onClick={() => handleDelete(params.row.id)}
          >
            <DeleteIcon />
          </button>
        </div>
      );
    },
  };

  const { closeSidbar } = useContext(SidebarContext);
  const [data, setData] = useState([]);
  const loading = false;

  const handleDelete = (id) => {
    const d = productsData.filter((item) => item.id !== id);
    setData(d);
  };

  useEffect(() => {
    if (typePage === "products") {
      setData(productsData);
    } else {
      setData(usersData);
    }
  }, [typePage]);

  return (
    <main>
      <Sidebar />
      <div className={`container_conetnt ${closeSidbar ? "closeSideber" : ""}`}>
        <Navbar />
        <div className="table_container">
          <div className="head">
            <h4 className="title_list">{typePage}</h4>
            <Link className="btn_add" to={`/${typePage}/new`}>
              Add New
            </Link>
          </div>
          {loading ? (
            "Loading"
          ) : (
            <Box sx={{ height: 600, width: "100%" }}>
              <DataGrid
                rows={data}
                columns={[...columns, columnsActions]}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 8,
                    },
                  },
                }}
                pageSizeOptions={[8]}
                checkboxSelection
                disableRowSelectionOnClick
              />
            </Box>
          )}
        </div>
      </div>
    </main>
  );
};

export default ListPage;
