/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import sampleThumbnail from "../../assets/RedStore/images/user-2.png";
import Layout from "../../components/Layout";
import { useParams } from "react-router-dom";
import {
  Button,
  Input,
  Form,
  message,
  Spin,
  Modal,
  Menu,
  Dropdown,
} from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

import "antd/dist/antd.css";
import "./EditStores.css";
import { customAxios } from "../../modules/axios";

const EditStoresPage = () => {
  const [form] = Form.useForm();
  const { id } = useParams();
  const [isLoadingProps, setIsLoadingProps] = useState(true);
  const [isLoadingStock, setIsLoadingStock] = useState(true);
  const [isLoadingModal, setIsLoadingModal] = useState(true);

  const [stockAnother, setStockAnother] = useState(0);
  const [storeValue, setStoreValue] = useState({
    Nama: "",
    Jalan: "",
    Kecamatan: "",
    Provinsi: "",
  });

  const [storeStockValue, setStoreStockValue] = useState([]);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [transferID, setTransferID] = useState(null);

  const [allStore, setAllStore] = useState();

  const [currDorayakiId, setCurrDorayakiId] = useState(null);
  const [indexDorayakiId, setIndexDorayakiId] = useState(null);

  const [currMax, setCurrMax] = useState(null);
  const showModal = (ids, i) => {
    setCurrMax(storeStockValue[i].Jumlah);
    console.log(currMax);
    setCurrDorayakiId(ids);
    setIndexDorayakiId(i);
    setIsModalVisible(true);
  };

  const handleOk = async (idDorayaki) => {
    if (transferID !== null) {
      console.log(idDorayaki);
      var body = {
        DorayakiStoreID: transferID,
        Rasa: storeStockValue[indexDorayakiId].Rasa,
        Deskripsi: storeStockValue[indexDorayakiId].Deskripsi,
        Gambar: storeStockValue[indexDorayakiId].Gambar,
        Jumlah: storeStockValue[indexDorayakiId].Jumlah,
      };
      const res1 = await customAxios.post(`/dorayaki/transfer`, body);
      var body2 = {
        DorayakiStoreID: Number(id),
        Rasa: storeStockValue[indexDorayakiId].Rasa,
        Deskripsi: storeStockValue[indexDorayakiId].Deskripsi,
        Gambar: storeStockValue[indexDorayakiId].Gambar,
        Jumlah: currMax - storeStockValue[indexDorayakiId].Jumlah,
      };
      const res2 = await customAxios.put(`/dorayaki/${currDorayakiId}`, body2);
      if (res1 && res2) {
        console.log(res1);
        console.log(res2);
        message.success("Anda berhasil mentransfer stock");
      }
    }
    setCurrDorayakiId(null);
    setIndexDorayakiId(null);
    setTransferID(null);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setCurrDorayakiId(null);
    setIndexDorayakiId(null);
    setTransferID(null);
    setIsModalVisible(false);
  };

  const handleDropdownClick = (id) => {
    setTransferID(id);
    console.log(id);
  };

  const handleUpdateJumlah = (id, objID) => {
    var body = {
      DorayakiStoreID: storeStockValue[id].DorayakiStoreID,
      rasa: storeStockValue[id].Rasa,
      deskripsi: storeStockValue[id].Deskripsi,
      gambar: storeStockValue[id].Gambar,
      jumlah: storeStockValue[id].Jumlah,
    };
    console.log(body);
    customAxios
      .put(`/dorayaki/${objID}`, body)
      .then((res) => {
        console.log(res);
        message.success("Anda berhasil mentransfer stock");
      })
      .catch((err) => {
        message.error("Anda gagal mentransfer stock");
      });
  };
  const menu = (
    <Menu>
      {!isLoadingModal &&
        allStore.map((obj) => (
          <Menu.Item onClick={() => handleDropdownClick(obj.ID)} key={obj.ID}>
            <div className="nama-toko">{obj.Nama}</div>
          </Menu.Item>
        ))}
    </Menu>
  );

  useEffect(() => {
    axios
      .get(`http://localhost:8080/dorayaki-store/${id}`)
      .then((res) => {
        setStoreValue(res.data);
        setTimeout(() => {
          setIsLoadingProps(false);
        }, 750);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/dorayaki/store/${id}`)
      .then((res) => {
        console.log(res.data);
        setStoreStockValue(res.data);
        setTimeout(() => {
          setIsLoadingStock(false);
        }, 750);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/dorayaki-store")
      .then((res) => {
        setAllStore(res.data);
        setIsLoadingModal(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const checkInputs = async () => {
    try {
      await form.validateFields();
      message.success("Form validation Successfull", 1.5);
      return true;
    } catch (errorInfo) {
      message.error(
        "Form validation not successfull, please check your input",
        1.5
      );
      return false;
    }
  };

  const handleSubmit = async (id) => {
    const isInputValid = await checkInputs();
    if (!isInputValid) {
      return;
    }
    const body = {
      nama: storeValue.Nama,
      jalan: storeValue.Jalan,
      kecamatan: storeValue.Kecamatan,
      provinsi: storeValue.Provinsi,
    };

    try {
      const res = await customAxios.put(`/dorayaki-store/${id}`, body);
      if (res) {
        setTimeout(() => {
          message.success("Anda telah berhasil menambahkan stok dorayaki");
        }, 2000);
      }
    } catch (err) {
      setTimeout(() => {
        message.error(err.response.data.message);
      }, 2000);
    }
  };

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setStoreValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAdd = (id) => {
    console.log(id);
    setStoreStockValue(
      [...storeStockValue].map((object) => {
        if (isModalVisible) {
          if (object.Jumlah < currMax) {
            return {
              ...object,
              Jumlah: object.Jumlah + 1,
            };
          }
        }
        if (object.ID === id && !isModalVisible) {
          return {
            ...object,
            Jumlah: object.Jumlah + 1,
          };
        } else return object;
      })
    );
    console.log(storeStockValue);
  };

  const handleMinus = (id) => {
    setStoreStockValue(
      [...storeStockValue].map((object) => {
        if (object.ID === id) {
          return {
            ...object,
            Jumlah: object.Jumlah > 0 ? object.Jumlah - 1 : object.Jumlah,
          };
        } else return object;
      })
    );
  };

  if (isLoadingProps && isLoadingStock) {
    return (
      <main className="loading-screen">
        <Spin size="large" />
      </main>
    );
  }
  return (
    <>
      <Layout>
        <div className="store-container">
          <div className="store-form">
            <div className="store-form-title">Edit Dorayaki Store</div>
            <Form layout="vertical" form={form} className="event-content">
              <Form.Item
                label="Nama Toko"
                name="nama"
                initialValue={storeValue.Nama}
                rules={[
                  { required: true, message: "Please input your Nama Toko!" },
                ]}
              >
                <Input
                  name="nama"
                  value={storeValue.Nama}
                  className="form-input nama"
                  placeholder="Masukkan input nama toko"
                  onChange={handleInputChange}
                />
              </Form.Item>
              <Form.Item
                label="Jalan Toko"
                name="Jalan"
                initialValue={storeValue.Jalan}
                rules={[
                  {
                    required: true,
                    message: "Please input your Jalan Toko!",
                  },
                ]}
              >
                <Input
                  name="Jalan"
                  value={storeValue.Jalan}
                  className="form-input Jalan"
                  placeholder="Masukkan input Jalan"
                  onChange={handleInputChange}
                />
              </Form.Item>
              <Form.Item
                label="Kecamatan Toko"
                name="Kecamatan"
                initialValue={storeValue.Kecamatan}
                rules={[
                  {
                    required: true,
                    message: "Please input your Kecamatan Toko!",
                  },
                ]}
              >
                <Input
                  name="Kecamatan"
                  value={storeValue.Kecamatan}
                  className="form-input Kecamatan"
                  placeholder="Masukkan input Kecamatan"
                  onChange={handleInputChange}
                />
              </Form.Item>
              <Form.Item
                label="Provinsi Toko"
                name="Provinsi"
                initialValue={storeValue.Provinsi}
                rules={[
                  {
                    required: true,
                    message: "Please input your Provinsi Toko!",
                  },
                ]}
              >
                <Input
                  name="Provinsi"
                  value={storeValue.Provinsi}
                  className="form-input Provinsi"
                  placeholder="Masukkan input Provinsi"
                  onChange={handleInputChange}
                />
              </Form.Item>
            </Form>
          </div>
          <Button
            className="submit-add-dorayaki"
            type="primary"
            onClick={() => handleSubmit(id)}
          >
            Edit Dorayaki Store
          </Button>
          <Link
            className="store-edit-link"
            to={`/products/add/${id}/${storeValue.Nama}`}
          >
            <Button className="submit-add-dorayaki" type="primary">
              Add Variant
            </Button>
          </Link>
          <div className="column-store-stock">
            {storeStockValue.map((obj, i) => (
              <div className="column-stores-stock-card" key={obj.ID}>
                <div className="column-latest-thumbnail">
                  <img className="column-latest-img" src={sampleThumbnail} />
                </div>
                <div className="column-latest-2"> {obj.Rasa}</div>
                <div className="column-latest-deskripsi">{obj.Deskripsi}</div>
                <div className="column-latest-jumlah">
                  {" "}
                  <Button
                    className="plus-btn"
                    type="primary"
                    shape="circle"
                    icon={<PlusOutlined />}
                    onClick={() => handleAdd(obj.ID)}
                  />
                  {obj.Jumlah}
                  <Button
                    className="minus-btn"
                    type="primary"
                    shape="circle"
                    icon={<MinusOutlined />}
                    onClick={() => handleMinus(obj.ID)}
                  />
                </div>
                <div className="column-update">
                  <Button
                    className="update-btn-store"
                    type="secondary"
                    onClick={() => handleUpdateJumlah(i, obj.ID)}
                  >
                    Update Jumlah
                  </Button>
                </div>

                <div className="column-transfer">
                  <Button type="primary" onClick={() => showModal(obj.ID, i)}>
                    Transfer Dorayaki
                  </Button>
                  <Modal
                    title="Where do you want to transfer?"
                    visible={isModalVisible}
                    onOk={() => handleOk(currDorayakiId)}
                    onCancel={handleCancel}
                  >
                    <div className="input-user-modal ">
                      <Dropdown trigger="click" overlay={menu}>
                        <a
                          className="ant-dropdown-link"
                          onClick={(e) => e.preventDefault()}
                        >
                          <Button className="show-store" type="primary">
                            Show Stores
                          </Button>
                        </a>
                      </Dropdown>
                      <div className="column-latest-transfer">
                        <Button
                          className="plus-btn2"
                          type="primary"
                          shape="circle"
                          icon={<PlusOutlined />}
                          onClick={() => handleAdd(currDorayakiId)}
                        />
                        {currDorayakiId != null ? (
                          <div>{storeStockValue[indexDorayakiId].Jumlah}</div>
                        ) : (
                          <div></div>
                        )}
                        <Button
                          className="minus-btn2"
                          type="primary"
                          shape="circle"
                          icon={<MinusOutlined />}
                          onClick={() => handleMinus(currDorayakiId)}
                        />
                      </div>
                    </div>
                  </Modal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default EditStoresPage;
