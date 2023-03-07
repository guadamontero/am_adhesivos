import React, { useEffect } from "react";
import { useParams } from "react-router";
import styles from "./item.module.css";
import PRODUCTOS from "../../data/products.json";
import SocialMediaShare from "../SocialMediaShare/SocialMediaShare";
import Icon from "../Global/Icon";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import ReactWhatsapp from "react-whatsapp";
import Random from "./Random";

const Item = ({ props }) => {
  const { id } = useParams();

  // Busca el producto en el archivo JSON que tenga el mismo id que en la URL
  const product = PRODUCTOS.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {product && (
        <section className={styles.itemContainer}>
          <div className={styles.itemDetail}>
            <div className={styles.itemImg}>
              <img src={process.env.PUBLIC_URL + product?.img} alt="cardImg" />
            </div>
            <div className={styles.itemText}>
              <h3>{product?.category.toUpperCase()}</h3>
              <h2>{product?.name}</h2>
              <div className={styles.iconsContainer}>
                <SocialMediaShare
                  url={`http://www.amadhesivos.com.ar`}
                  title={product?.name}
                  category={product?.category}
                />
                <a href="/">
                  <Icon icon={faClipboardList} css={styles.iconList} />
                </a>
              </div>
              <p>{product?.description}</p>
              <ReactWhatsapp
                number="+5493515186464"
                message={`Hola! Me gustaría más sobre el producto: ${product?.name}`}
                className={styles.whatsapp}
              >
                <button>
                  Realiza tu consulta
                  <Icon icon={faWhatsapp} css={styles.iconWhatsapp} />
                </button>
              </ReactWhatsapp>
            </div>
          </div>
          <div className={styles.itemsRandom}>
            <Random />
          </div>
        </section>
      )}
    </>
  );
};

export default Item;
