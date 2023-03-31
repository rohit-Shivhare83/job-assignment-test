import React, { useRef } from "react";
import CartList from "../CartList/CartList";
import "./AddProduct.css";

const AddProduct = ({ items, click, removeItem, setAddedItem }) => {
  const total = items
    .reduce((pre, cur) => {
      return pre + Number(cur.addNumber) * Number(cur.price);
    }, 0)
    .toFixed(2);
  // let curDate = new Date();
  // console.log(curDate);
  const showDivRef = useRef(null);
  return (
    <div ref={showDivRef} className="addproducts__container">
      <div className="left-side">
        <div className="check-out-container">
          <div className="check-out-print">
            <h1 className="check-out-title">Shopping</h1>
            {/* <p>{curDate}</p> */}
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th className="table-item-title">Item Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, i) => (
                  <tr key={item.id}>
                    <td>{i + 1}</td>
                    <td>{item.title}</td>
                    <td>${item.price}</td>
                    <td>{item.addNumber}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td className="total" colSpan={2}>
                    Total
                  </td>
                  <td className="total" colSpan={2}>
                    ${total}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
      <div className="right-side">
        <div className="right-side-header">
          <h1 className="fs-3">
            Shopping{" "}
            <span className="total-items fs-4 px-2">{items.length}</span>
            {items.length <= 1 ? " item" : " items"}
          </h1>
          <button
            className="remove-item-btn px-3 py-0 fs-3 text-danger border"
            onClick={() => {
              showDivRef.current.classList.add("animate");
              setTimeout(() => click(false), 200);
            }}
          >
            x
          </button>
        </div>
        <div className="right-side-body">
          {items.map((item, i, itemsArr) => (
            <CartList
              key={item.id}
              item={item}
              removeItem={removeItem}
              setAddedItem={setAddedItem}
              itemsArr={itemsArr}
            />
          ))}
        </div>
        <div className="right-side-footer">
          <div className="bar"></div>
          <div className="footer-head">
            <h4>Total :</h4>
            <h1>${total}</h1>
          </div>
          <div className="check-out mb-5">
            <button
              className="check-out-btn"
              onClick={() => {
                window.print();
              }}
            >
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
