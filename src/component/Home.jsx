import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <Nav />
      {/* <!-- Top Category Section --> */}
      <section className="top-category">
        <h2>Top Category</h2>
        <div className="category-container">
          <div className="category-item">
            <img src="https://electon-store.myshopify.com/cdn/shop/products/pro18.jpg?crop=center&height=575&v=1606987162&width=515" alt="Phone" />
          </div>
          <div className="category-item">
            <img src="https://electon-store.myshopify.com/cdn/shop/products/pro38.jpg?crop=center&height=575&v=1606986847&width=515" alt="Camera" />
          </div>
          <div className="category-item">
            <img src="https://electon-store.myshopify.com/cdn/shop/products/pro12.jpg?crop=center&height=575&v=1606987596&width=515" alt="Laptop" />
          </div>
          <div className="category-item">
            <img src="https://electon-store.myshopify.com/cdn/shop/products/pro49.jpg?crop=center&height=575&v=1606987770&width=515" alt="USB" />
          </div>
        </div>
      </section>

      {/* Trending Collection */}
      <div className="trending-collection">
        <h2>Trending Collection</h2>
        <div className="tabs">
          <button className="tab active">New Products</button>
          <button className="tab">Featured Products</button>
          <button className="tab">Best Seller</button>
        </div>
        <div className="product-grid">
          <div className="product-item">
            <img src="https://electon-store.myshopify.com/cdn/shop/products/pro59.jpg?crop=center&height=575&v=1606987893&width=515" alt="Refrigerator" />
            <h3>Refrigerator</h3>
            <p className="price"><span>$120.00</span> <span className="old-price">$180.00</span></p>
            <span className="discount">-33%</span>
          </div>
          <div className="product-item">
            <img src="https://electon-store.myshopify.com/cdn/shop/products/pro36_20b3e4a6-54ec-42a8-a760-3f40b78c2bc9.jpg?crop=center&height=575&v=1606987296&width=515" alt="JBL speaker" />
            <h3>JBL speaker</h3>
            <p className="price"><span>$60.00</span> <span className="old-price">$80.00</span></p>
            <span className="discount">-25%</span>
          </div>
          <div className="product-item">
            <img src="https://electon-store.myshopify.com/cdn/shop/products/pro12.jpg?crop=center&height=575&v=1606987596&width=515" alt="Laptop" />
            <h3>Laptop</h3>
            <p className="price"><span>$200.00</span> <span className="old-price">$210.00</span></p>
            <span className="discount">-5%</span>
          </div>
          <div className="product-item">
            <img src="https://electon-store.myshopify.com/cdn/shop/products/pro2_2c303381-fe9a-46fb-81cf-d0e8963ae517.jpg?crop=center&height=575&v=1606986647&width=515" alt="Boat" />
            <h3>Boat</h3>
            <p className="price"><span>$150.00</span> <span className="old-price">$180.00</span></p>
            <span className="discount">-17%</span>
          </div>
          <div className="product-item">
            <img src="https://electon-store.myshopify.com/cdn/shop/products/pro9.jpg?crop=center&height=575&v=1606987015&width=515" alt="Earbuds" />
            <h3>Earbuds</h3>
            <p className="price"><span>$120.00</span> <span className="old-price">$130.00</span></p>
            <span className="discount">-8%</span>
          </div>
          <div className="product-item">
            <img src="https://electon-store.myshopify.com/cdn/shop/products/pro67.jpg?crop=center&height=575&v=1606987366&width=515" alt="Juice machine" />
            <h3>Juice machine</h3>
            <p className="price"><span>$150.00</span> <span className="old-price">$155.00</span></p>
            <span className="discount">-3%</span>
          </div>
          <div className="product-item">
            <img src="https://electon-store.myshopify.com/cdn/shop/products/pro7_767bbe8e-0b76-4faa-944f-21f5efc9600b.jpg?crop=center&height=575&v=1606987093&width=515" alt="Headphone" />
            <h3>Headphone</h3>
            <p className="price"><span>$232.00</span> <span className="old-price">$250.00</span></p>
            <span className="discount">-7%</span>
          </div>
          <div className="product-item">
            <img src="https://electon-store.myshopify.com/cdn/shop/products/pro38.jpg?crop=center&height=575&v=1606986847&width=515" alt="Headphone" />
            <h3>Camera</h3>
            <p className="price"><span>$202.00</span> <span className="old-price">$250.00</span></p>
            <span className="discount">-17%</span>
          </div>
          <div className="product-item">
            <img src="https://electon-store.myshopify.com/cdn/shop/products/pro21.jpg?crop=center&height=575&v=1606987984&width=515" alt="Headphone" />
            <h3>Watch</h3>
            <p className="price"><span>$132.00</span> <span className="old-price">$250.00</span></p>
            <span className="discount">-9%</span>
          </div>
          <div className="product-item">
            <img src="https://electon-store.myshopify.com/cdn/shop/products/pro33.jpg?crop=center&height=575&v=1606987711&width=515" alt="Mouse" />
            <h3>Mouse</h3>
            <p className="price"><span>$25.00</span> <span className="old-price">$30.00</span></p>
            <span className="discount">-17%</span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
