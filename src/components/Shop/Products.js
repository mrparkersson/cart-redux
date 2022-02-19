import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const DUMMY_DATA = [
    {
      id: 'p1',
      price: 6,
      title: 'My first book',
      description: 'My first book I ever wrote',
    },
    {
      id: 'p2',
      price: 5,
      title: 'My second book',
      description: 'My second book I ever wrote',
    },
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map((product) => (
          <ProductItem
            title={product.title}
            id={product.id}
            key={product.id}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
