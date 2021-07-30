import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { Button, Input, Form, message } from "antd";
import "antd/dist/antd.css";
import "./AddProducts.css";
import { useParams, useHistory } from "react-router-dom";
import { customAxios } from "../../modules/axios";

const ProductsPage = () => {
  const { id, nama } = useParams();
  const [form] = Form.useForm();
  const [data, setData] = useState();
  const [isLoading, setisLoading] = useState(true);

  let history = useHistory();
  useEffect(() => {
    customAxios
      .get("/dorayaki/variant")
      .then((res) => {
        setData(res.data);
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [productValue, setProductValue] = useState({
    rasa: "",
    deskripsi: "",
    gambar: "",
    jumlah: 0,
  });

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

  const handleSubmit = async () => {
    const isInputValid = await checkInputs();
    if (!isInputValid) {
      return;
    }
    const body = {
      rasa: productValue.rasa,
      deskripsi: productValue.deskripsi,
      gambar: productValue.gambar,
      jumlah: Number(productValue.jumlah),
      DorayakiStoreID: Number(id),
    };

    try {
      const res = await customAxios.post("/dorayaki", body);
      if (res) {
        setTimeout(() => {
          message.success("Anda telah berhasil menambahkan stok dorayaki");
          history.push("/stores");
        }, 1750);
      }
    } catch (err) {
      setTimeout(() => {
        message.error(err.response.data.message);
      }, 1750);
    }
  };
  const handleInputChange = async (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setProductValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <Layout>
        <div className="product-container">
          <div className="product-form">
            <div className="product-form-title">
              Add New Dorayaki Variant in {nama}
            </div>
            <Form layout="vertical" form={form} className="event-content">
              <Form.Item
                label="Rasa"
                name="rasa"
                rules={[{ required: true, message: "Please input your rasa!" }]}
              >
                <Input
                  name="rasa"
                  value={productValue.rasa}
                  className="form-input rasa"
                  placeholder="Masukkan input rasa"
                  onChange={handleInputChange}
                />
              </Form.Item>
              <Form.Item
                label="Deskripsi"
                name="deskripsi"
                rules={[
                  { required: true, message: "Please input your deskripsi!" },
                ]}
              >
                <Input
                  name="deskripsi"
                  value={productValue.deskripsi}
                  className="form-input deskripsi"
                  placeholder="Masukkan input deskripsi"
                  onChange={handleInputChange}
                />
              </Form.Item>
              <Form.Item
                label="Gambar"
                name="gambar"
                rules={[
                  { required: true, message: "Please input your gambar!" },
                ]}
              >
                <Input
                  name="gambar"
                  value={productValue.gambar}
                  className="form-input gambar"
                  placeholder="Masukkan input gambar"
                  onChange={handleInputChange}
                />
              </Form.Item>
              <Form.Item
                label="Jumlah"
                name="jumlah"
                rules={[
                  { required: true, message: "Please input your jumlah!" },
                ]}
              >
                <Input
                  name="jumlah"
                  value={productValue.jumlah}
                  className="form-input jumlah"
                  placeholder="Masukkan input jumlah"
                  onChange={handleInputChange}
                />
              </Form.Item>
              <Button
                className="submit-add-dorayaki"
                type="primary"
                onClick={() => handleSubmit()}
              >
                Add Dorayaki
              </Button>
            </Form>
          </div>

          <div className="product-stock">Current Variant</div>
          <div className="column-variant">
            {!isLoading &&
              data.map((obj, i) => (
                <div className="column-variant-rasa" key={i}>
                  {obj.Rasa}
                </div>
              ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProductsPage;
