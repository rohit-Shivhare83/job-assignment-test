import React from "react";
import "./Home.css";

import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Search from "../../components/Search/Search";
import CartBtn from "../../components/CartBtn/CartBtn";
import AddProduct from "../../components/AddProduct/AddProduct";
import CardBody from "../../components/CardBody/CardBody";
import Sort from "../../components/Sort/Sort";
import Filter from "../../components/Filter/Filter";
import Spinner from "../../components/Spinner/Spinner";

const Home = () => {
  const [items, setItem] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [category, setCategory] = useState();
  const [addedItems, setAddedItem] = useState([]);
  const [showAddProducts, setShowAddProducts] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sorting, setSorting] = useState({
    field: "title",
    order: "abc",
  });

  // useEffect

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     fetch("https://fakestoreapi.com/products/")
  //       .then((res) => res.json())
  //       .then((data) => setItem(data));
  //     setLoading(false);
  //   }, 500);
  // }, []);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      fetch(
        !category
          ? "https://fakestoreapi.com/products/"
          : `https://fakestoreapi.com/products/category/${category}`
      )
        .then((res) => res.json())
        .then((data) => setItem(data));
      setLoading(false);
    }, 2000);

    // console.count("hi");
  }, [category]);

  //   OnChnage Search Data
  const changingSearchData = (e) => {
    setSearchValue(e.target.value);
  };

  //   Add Items
  function addItem(item) {
    item.addNumber = 1;
    const itemArr = addedItems;
    setAddedItem([...itemArr, item]);
  }

  //   Filter Items
  const searchItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  //   removeItem
  const removeItem = (item) => {
    const newItems = addedItems.filter((addedItem) => addedItem.id !== item.id);
    setAddedItem(newItems);
  };

  // Sort Items

  const sortedItems = !searchItems
    ? items
    : searchItems.sort((a, b) => {
        if (sorting.order === "asc" && sorting.field === "title") {
          return a.title.localeCompare(b.title);
        } else if (sorting.order === "desc" && sorting.field === "title") {
          return b.title.localeCompare(a.title);
        } else if (sorting.order === "asc" && sorting.field === "price") {
          return a.price - b.price;
        } else if (sorting.order === "desc" && sorting.field === "price") {
          return b.price - a.price;
        } else {
          return items;
        }
      });

  // Handle Sorting
  const handleSorting = (field, value) => {
    setSorting({
      field: field,
      order: value,
    });
  };

  return (
    <div className="container-fluid p-0 m-0 position-home">
      {/* Header */}
      <nav className=" px-5 navbar header-color px-3 sticky-top shadow ">
        <div className="container-fluid navbar d-flex justify-content-between  flex-wrap align-items-center m-auto">
          <div className="logo-head fw-semibold ">
            <NavLink className="navbar-brand" to="/">
              Shopping
            </NavLink>
          </div>

          <form
            className="d-flex align-items-center justify-content-center"
            role="search"
          >
            <Search value={searchValue} onChangeData={changingSearchData} />

            <CartBtn num={addedItems.length} click={setShowAddProducts} />
          </form>
        </div>
      </nav>

      {/* body */}
      <div className="container-fluid  ">
        <div className="row">
          {/* Left */}

          <div className="col-lg-3 col-md-3 col-sm-12 position-stickey left-section-filter-sort border-2 border-body-tertiary border-end  py-3 ">
            <div className="container-fluid left-section w-100">
              <div className=" d-flex flex-wrap flex-lg-column flex-sm-row justify-content-start align-items-center fs-5 left-btn w-100">
                <p className="m-1 p-2 px-2 fw-semibold">Apply Your Filters</p>
                <div className="w-sm-100 w-lg-100 w-md-100 ">
                  <Filter items={items} setCategory={setCategory} />
                </div>
                <div className="w-sm-100 w-lg-60 w-md-100 ">
                  <Sort sortBy={handleSorting} />
                </div>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="col-lg-9 col-md-9 col-sm-12 overflow-x-scroll right-section-list bg-light">
            <div className="container-fluid">
              {showAddProducts && (
                <AddProduct
                  click={setShowAddProducts}
                  items={addedItems}
                  removeItem={removeItem}
                  setAddedItem={setAddedItem}
                />
              )}
              {loading ? (
                <Spinner />
              ) : (
                <CardBody
                  searchItems={searchItems}
                  products={!searchItems ? sortedItems : searchItems}
                  addItem={addItem}
                  removeItem={removeItem}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
