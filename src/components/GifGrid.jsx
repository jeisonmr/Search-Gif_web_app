import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItems } from "./GifItems";
import { getGifs } from "./helpers/getGifs";

export const GifGrid = ({ category }) => {
  const { images, loading } = useFetchGifs(category);
  console.log(loading);
  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {loading ? (
          <h3>Cargando</h3>
        ) : (
          images.map((items) => {
            return <GifItems key={items.id} {...items} />;
          })
        )}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
