import React from 'react';
import style from '../../css/Orders.module.css';
import { FaStar } from "react-icons/fa";

const Orders = ( {title, products} ) => {
    return (
        <section className={style.orders}>
            <h1 className={style.titleOrder}> { title } </h1>
            <div className={style.containerPedido}>

                {products.map((product, index) => (
                    <div className={style.containerProduto} key={index}>
                        <img src={product.image} alt={product.name} />
                        <div>
                            <h3 className={style.produto}>{product.name}: R$ {product.price}</h3>
                            <div className={style.containerAvaliacao}>
                                <h3>Avaliação: </h3>
                                {[...Array(product.rating)].map((_, i) => (
                                    <FaStar key={i} className={`${style.star} ${style['star-size']}`} />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}

export default Orders;
