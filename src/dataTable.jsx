export const productsColumns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "title", headerName: "Title", width: 130 },
  { field: "price", headerName: "Price", width: 100 },
  { field: "desc", headerName: "Description", width: 250 },
  { field: "type", headerName: "Type", width: 70 },
  { field: "size", headerName: "Size", width: 70 },
  { field: "fragrance", headerName: "Fragrance", width: 120 },
];

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="profile">
          <img
            className="cellImg"
            src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
            alt="avatar"
          />
          <span>{params.row.username}</span>
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "country",
    headerName: "Country",
    width: 100,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 100,
  },
];

export const ordersColumns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 90 },
  { field: "title", headerName: "Title", width: 130 },
  { field: "price", headerName: "Price", width: 90 },
  { field: "address", headerName: "Address", width: 100 },
  { field: "type", headerName: "Type", width: 90 },
  { field: "desc", headerName: "Description", width: 250 },
];
