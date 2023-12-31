import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newprods: [],
      hotprods: [],
    };
  }

  renderProductList(products) {
    return products.map((item) => (
      <div key={item._id} className="inline">
        <figure>
          <Link to={`/product/${item._id}`}>
            <img src={`data:image/jpg;base64,${item.image}`} width="250px" height="250px" alt="" />
          </Link>
          <figcaption className="text-center">
            {item.name}<br />
            Giá tiền: {parseInt(item.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
          </figcaption>
        </figure>
      </div>
    ));
  }

  componentDidMount() {
    this.apiGetNewProducts();
    this.apiGetHotProducts();
    this.scrollToTop();
  }

  // APIs
  apiGetNewProducts() {
    axios.get('/api/customer/products/new').then((res) => {
      const result = res.data;
      this.setState({ newprods: result });
    });
  }

  apiGetHotProducts() {
    axios.get('/api/customer/products/hot').then((res) => {
      const result = res.data;
      this.setState({ hotprods: result });
    });
  }

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  render() {
    const { newprods, hotprods } = this.state;

    return (
      <div>
        <div className="anh-mot" style={{ textAlign: 'center' }}>
          <img src="banner1.png" alt="Banner 1" />
        </div>

        <div className="align-center">
          <h2 className="text-center">SẢN PHẨM MỚI</h2>
          {this.renderProductList(newprods)}
        </div>

        {hotprods.length > 0 && (
          <div className="align-center">
            <h2 className="text-center">SẢN PHẨM NỔI BẬT</h2>
            {this.renderProductList(hotprods)}
          </div>
        )}

        <div className="google-map">
          <iframe
            title="gmap"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.7878741515547!2d106.69744577559833!3d10.827539189324364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528f4a62fce9b%3A0xc99902aa1e26ef02!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBWxINuIExhbmc!5e0!3m2!1svi!2s!4v1700722208655!5m2!1svi!2s"
            width="700"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="anh-hai" style={{ textAlign: 'center' }}>
          <img src="banner12.png" alt="Ảnh Hai" />
        </div>

        <div className="banner3">
          <img src="banner3.webp" alt="Banner 3" />
        </div>
      </div>
    );
  }
}

export default Home;
