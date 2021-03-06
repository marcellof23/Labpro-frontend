/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { customAxios } from "../../modules/axios";
import { Link } from "react-router-dom";
import { Button, Input } from "antd";
const { Search } = Input;

import "./Stores.css";
const Stores = () => {
  const [_, setData] = useState();
  const [items, setItems] = useState();
  const [isLoading, setisLoading] = useState(true);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["Provinsi", "Kecamatan"]);
  const [filterParam, setFilterParam] = useState(["All"]);

  const arrImage = ["/store1.jpg", "/store2.png", "/store3.jpeg"];
  useEffect(() => {
    customAxios
      .get("/dorayaki-store")
      .then((res) => {
        setData(res.data);
        setItems(res.data);
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleRemove = async (id) => {
    customAxios
      .delete(`/dorayaki-store/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSearch = (value) => {
    setQ(value);
  };

  function search(itemsArr) {
    return itemsArr.filter((item) => {
      if (item.Provinsi == filterParam) {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      } else if (filterParam == "All") {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      }
    });
  }

  const getImageURL = (id) => {
    return process.env.PUBLIC_URL + arrImage[id % 3];
  };

  return (
    <Layout>
      <div className="store-container">
        <div className="store-title">All stores</div>
        <Search
          placeholder="Search by kecamatan or province"
          style={{ width: 400 }}
          onSearch={onSearch}
          onChange={(e) => setQ(e.target.value)}
          className="searchbar"
        />
        <div className="column-store">
          {!isLoading &&
            search(items).map((obj) => (
              <div className="column-stores-card" key={obj.ID}>
                <div className="column-latest-thumbnail">
                  <img
                    className="column-latest-img"
                    src={getImageURL(obj.ID)}
                  />
                </div>
                <div className="column-latest-1 stores"> {obj.Nama}</div>

                <div className="column-latest-alamat">
                  <div className="column-latest-deskripsi">{obj.Jalan}</div>
                  <div className="column-latest-deskripsi">{obj.Kecamatan}</div>
                  <div className="column-latest-deskripsi">{obj.Provinsi}</div>
                </div>
                <Link className="store-edit-link" to={`/stores/edit/${obj.ID}`}>
                  <Button className="edit-btn" type="primary">
                    Edit Store
                  </Button>
                </Link>
                <Button
                  className="remove-btn"
                  type="danger"
                  onClick={() => handleRemove(obj.ID)}
                >
                  Remove Store
                </Button>
                <div className="column-latest-footer"></div>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default Stores;
