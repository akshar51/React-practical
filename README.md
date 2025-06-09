# 🛍️ React Product Management App Documentation

This is a **React-based CRUD application** for managing products including image uploads, dynamic options, and separate client/admin views. It integrates `React Router`, `Axios`, `React Toastify`, and a `JSON Server` for backend simulation.

---

## 📁 Project Structure

```
src/
├── pages/
│   ├── Home.js          # Landing/Home page
│   ├── Form.js          # Add/Edit product form
│   ├── Table.js         # Admin product table
│   └── Client.js        # Client-facing product list
├── App.js               # Main logic + routes + state + handlers
├── index.js             # React DOM entry
└── db.json              # Mock database (for JSON Server)
```

---

## 📦 Dependencies

Install required packages:

```bash
npm install axios react-router-dom react-toastify
```

Install JSON Server globally:

```bash
npm install -g json-server
```

Run the JSON Server:

```bash
json-server --watch db.json --port 3000
```

---

## 🌐 API Endpoint

```js
const URL = "http://localhost:3000/Product";
```

---

## 🔁 Routes

Defined in `App.js` using React Router:

| Path      | Component | Description                   |
| --------- | --------- | ----------------------------- |
| `/`       | Home      | Landing page                  |
| `/form`   | Form      | Add/Edit product              |
| `/table`  | Table     | Admin table (edit/delete)     |
| `/client` | Client    | Product list for client users |

---

## 🧠 State Management (App.js)

```js
const [product, setProduct] = useState({});
const [productList, setProductList] = useState([]);
const [options, setOption] = useState([]);
const [isEdit, setEdit] = useState(0);
const [error, setError] = useState({});
const imageRef = useRef(null);
```

---

## ⚙️ Core Functions

### handleChange

Handles input, checkbox, and file changes (image base64 encoding).

### validation

Validates required fields before submission.

### handleSubmit

Performs POST or PUT depending on `isEdit` status:

```js
if (isEdit) {
  axios.put(`${URL}/${isEdit}`, product);
} else {
  axios.post(URL, product);
}
```

After successful submission, it updates the product list and redirects to `/client`.

### handleDelete

Deletes a product from the list.

### handleEdit

Retrieves a product by ID and populates the form for editing.

---

## 🧾 Validation Rules

| Field   | Requirement                   |
| ------- | ----------------------------- |
| pName   | Required                      |
| stock   | Required                      |
| price   | Required                      |
| image   | Required (via file upload)    |
| content | Required                      |
| options | At least one must be selected |

---

## 🧩 Props Usage

### Form Component Props

```js
{
  handleSubmit,
  handleChange,
  product,
  options,
  imageRef,
  error
}
```

### Table & Client Component Props

```js
{
  productList,
  handleDelete,
  handleEdit
}
```

---

## 🔔 Toast Notifications

Integrated using `react-toastify`:

```js
toast.success("Product Added Successfully..!");
toast.warn("Product Deleted Successfully..!");
```

Include in main component:

```jsx
<ToastContainer position="top-center" autoClose={5000} theme="dark" />
```

---

## ✨ Suggestions for Improvement

* ✅ Confirmation popup before delete
* 🛑 Disable submit while processing
* 🔍 Search/filter options in tables
* 📱 Responsive design fixes
* 📄 Pagination for product tables
* 🔄 Reset form after submission

---

## 🚀 Quick Start Guide

```bash
npm install
npm start
json-server --watch db.json --port 3000
```

Open in browser:

* `http://localhost:3000/` – Home
* `http://localhost:3000/form` – Add/Edit Form
* `http://localhost:3000/table` – Admin Table
* `http://localhost:3000/client` – Client View

---

## ✅ Feature Summary

* Full CRUD operations (Create, Read, Update, Delete)
* Image upload and live preview (base64)
* Dynamic checkbox options
* Toast notifications for user feedback
* Route-based navigation (React Router)
* Validation for all fields
* Admin (Table) and Client (Public) views
