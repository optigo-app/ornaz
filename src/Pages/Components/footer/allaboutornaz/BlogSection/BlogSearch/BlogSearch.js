import React from 'react'
import './blogsearch.css'
import { FaSearch } from "react-icons/fa";

import { Widget } from './utils/common';

const BlogSearch = () => {
  return (
    <>
      <div
        style={{
          border: "1px solid #ddd",
          padding: "8px 12px 12px",
          width: "100%",
          marginTop: "45px",
        }}
      >
        <input
          style={{
            border: "none",
            outline: "none",
            fontSize: "14px",
            fontFamily: "Montserrat,sans-serif",
            width: "250px",
          }}
          placeholder="Search The Site..."
        />
        <FaSearch />
      </div>

      <div stylke={{ width: "296px" }}>
        {Widget(1)}
        {Widget(2)}
        {Widget(3)}
        
      </div>
    </>
  );
}

export default BlogSearch