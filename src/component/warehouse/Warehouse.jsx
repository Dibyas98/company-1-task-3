import React, { useContext } from "react";
import WarehouseCard from "./WarehouseCard";
import { Link, useParams } from "react-router-dom";
import Header from "../header/Header";
import { contet } from "../../Data"; // Assuming the context is imported from "../../Data"

export default function Warehouse() {
  const { data,resi,setresi } = useContext(contet); // Assuming the context provides data

  

  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "center",
          marginTop: "1rem",
        }}
      >
        {data.map((ele) => (
          <Link to={`/dent/${ele.id}`} key={ele.id} onClick={()=>setresi(ele)}>
            <WarehouseCard ware={ele} />
          </Link>
        ))}
      </div>
    </>
  );
}
