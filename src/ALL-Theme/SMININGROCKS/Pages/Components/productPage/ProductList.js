import React, { useEffect, useState } from "react";
import Header from "../home/Header/Header";
import Footer from "../home/Footer/Footer";
import SmilingRock from "../home/smiling_Rock/SmilingRock";
import "./product.css";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import prodListData from "../../jsonFile/Productlist_4_95oztttesi0o50vr.json";
// import prodListData from "../../jsonFile/testingFile/Productlist_4_95oztttesi0o50vr_Original.json";
import filterData from "../../jsonFile/M_4_95oztttesi0o50vr.json";
import PriceData from "../../jsonFile/Productlist_4_95oztttesi0o50vr_8.json";
// import PriceData from "../../jsonFile/testingFile/Productlist_4_95oztttesi0o50vr_8_Original.json";
import { Accordion,AccordionDetails,AccordionSummary, Checkbox, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import LocalMallIcon from '@mui/icons-material/LocalMall';

 
const ProductList = () => {
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [drawerShowOverlay, setDrawerShowOverlay] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [HoveredID, setHoveredID] = useState();
  const [filterChecked, setFilterChecked] = useState({});

  const navigate = useNavigate();

  const toggleDeatilList = () => {
    setIsOpenDetail(!isOpenDetail);
  };

  const toggleDrawerOverlay = () => {
    setDrawerShowOverlay(!drawerShowOverlay);
  };

  let productData = [];

  prodListData.data[0].map((ele) => {
    let obj = {};
    Object.entries(prodListData.ProductsList).map((objele) => {
      obj[objele[0]] = ele[objele[1]];
    });
    productData.push(obj);
  });

  console.log("arr", productData);

  // let collectionsfilter = () =>{
  //   let arr1=[]
  //  filterData.CollectionList.map((filcollist)=>{
  //   console.log("arr",productData.Collectionid);
  //    productData?.map((pdColl)=>{
  //     if(filcollist.Collectionid === pdColl.Collectionid){
  //       arr1.push(filcollist.CollectionName)
  //     }
  //   })
  //   })
  //   return arr1
  // }

  // let Categoryfilter = () =>{
  //   let arr1=[]
  //  filterData.CategoryList.map((filcatlist)=>{
  //    productData?.map((pdColl)=>{
  //     if(filcatlist.Categoryid === pdColl.Categoryid){
  //       arr1.push(filcatlist.CategoryName)
  //     }
  //   })
  //   })
  //   return arr1
  // }

  // const MetalColor = () =>{
  //   let mtCol= [];
  //   filterData.MetalColorList.map((mtc)=>{
  //     productData.map((pdColl)=>{
  //       if(mtc.MetalColorid === pdColl.MetalColorid){
  //         mtCol.push(mtc.MetalColorName)
  //       }
  //     })
  //   })

  //   return mtCol
  // }

  function updateProductsWithMetalColorName() {
    productData.forEach((product) => {
      const metalColor = filterData.MetalColorList.find(
        (color) => color.MetalColorid === product.MetalColorid
      );
      const categoryName = filterData.CategoryList.find(
        (cate) => cate.Categoryid === product.Categoryid
      );
      const collectionName = filterData.CollectionList.find(
        (coll) => coll.Collectionid === product.Collectionid
      );
      const mtpurity = filterData.MetalPurityList.find(
        (mtp) => mtp.MetalPurityid === product.MetalPurityid
      );
      const prodtype = filterData.ProductTypeList.find(
        (pt) => pt.Producttypeid === product.Producttypeid
      );
      const gendertype = filterData.GenderList.find(
        (gen) => gen.Genderid === product.Genderid
      );



      if (metalColor) {
        product.MetalColorName = metalColor.MetalColorName;
      }
      if (categoryName) {
        product.CategoryName = categoryName.CategoryName;
      }
      if (collectionName) {
        product.CollectionName = collectionName.CollectionName;
      }
      if (mtpurity) {
        product.MetalPurity = mtpurity.MetalPurity;
      }
      if (prodtype) {
        product.ProducttypeName = prodtype.ProducttypeName;
      }
      if (gendertype) {
        product.GenderName = gendertype.GenderName;
      }
    });

    return productData;
  }

  // let GetPrice = () =>{
  //   // let PriceDataChange=[]
  //   updateProductsWithMetalColorName()?.forEach(product=>{
  //     const priceData = PriceData.find( priceD => priceD.A === product.autocode && priceD.B === product.diamondquality && priceD.C === product.diamondcolorname && priceD.D.split(" ")[1] === product.MetalPurity)
  //     if(priceData){
  //       product.price = priceData.E
  //      }

  //   })
  //   return updateProductsWithMetalColorName()

  // }

  updateProductsWithMetalColorName()?.forEach((product) => {
    const priceData = PriceData?.find(
      (priceD) =>
        priceD.A === product.autocode &&
        priceD.B === product.diamondquality &&
        priceD.C === product.diamondcolorname &&
        priceD.D.split(" ")[1] === product.MetalPurity
    );

    if (priceData) {
      product.price = priceData.E;
    } else {
      product.price = "Not Availabel";
    }
  });

  // console.log(updateProductsWithMetalColorName().map(()=>{    }));

  updateProductsWithMetalColorName()?.forEach((prods) => {
    let fullTitle =
      prods.CollectionName +
      " " +
      prods.totaldiamondweight +
      " " +
      prods.diamondquality +
      " " +
      "Diamond" +
      " " +
      prods.CategoryName +
      " " +
      prods.designno;
    prods.title = fullTitle;
  });

  const handelProductSubmit = (product) => {
    console.log("product", product);
    localStorage.setItem("srProductsData", JSON.stringify(product));
    navigate("/productdetail");
  };


  const NewFilterData = () =>{
    const newFilter = [];
    filterData.SideMenuList.forEach((ele) => {
        if (ele.Fno === '1') {
          newFilter.push({ label: "CATEGORY",filterList: filterData.CategoryList?.map((ele)=>{return ele.CategoryName }),listType:'CategoryName'});
        } else if (ele.Fno === '2') {
          newFilter.push({ label: "PRODUCT TYPE",filterList:filterData.ProductTypeList?.map((ele)=>{return ele.ProducttypeName}),listType:'ProducttypeName'});
        } else if (ele.Fno === '8') {
          newFilter.push({ label: "GENDER",filterList:filterData.GenderList?.map((ele)=>{return ele.GenderName}),listType:'GenderName'});
        } else if (ele.Fno === '12') {
          newFilter.push({ label: "PRICE",filterList:[]});
        } else if (ele.Fno === '15') {
          newFilter.push({ label: "COLLECTION",filterList:filterData.CollectionList?.map((ele)=>{return ele.CollectionName}),listType:'CollectionName'});
        } else if (ele.Fno === '18') {
          newFilter.push({ label: "CENTERSTONE",filterList:filterData.CenterStoneList?.map((ele)=>{return ele?.ColorStoneName }),listType:'ColorStoneName'});
        }
      });
      
      return newFilter;
  }


  const handleCheckboxChange = (e,ele,flist)=>{
    const { name, checked ,value } = e.target;

    setFilterChecked((prev) => ({
      ...prev,
      [name]: {checked,value:flist,type:ele.listType}
    }));
  }

  let NewFilterArr = []
  for (let key in filterChecked){
    if(filterChecked[key] === 'checked' && filterChecked['checked']===true){
      NewFilterArr.push(filterChecked)
    }
  }

  const filteredObjects = Object.entries(filterChecked)
  .filter(([key, value]) => value.checked)
  .reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});

 
  const sepeTypeVal = Object.entries(filteredObjects).map(ele=>{
    return {type:ele[1].type,value:ele[1].value}
  })

  console.log("filterChecked",sepeTypeVal);

  // const filteredProducts = productData.filter(product => {
  //   return sepeTypeVal.every(filter => {
  //     return product[filter.type] === filter.value 
  //   })
  // })

  // let ArrFil = []

  const filteredProducts = (productData).filter(product => {
    return sepeTypeVal.every(condition => {
        return product[condition.type] === condition.value
    });
});







  const mergedArray = filteredProducts.reduce((acc, curr) => acc.concat(curr), []);

  console.log("filteredProducts",filteredProducts);
  // console.log("ArrFil",ArrFil);

  const finalDataOfDisplaying = () =>{
    if(mergedArray.length && mergedArray){
      return mergedArray
    }
    else{
      return updateProductsWithMetalColorName()
    }
  }



  return (
    <div>
      {drawerShowOverlay && (
        <>
          <div className="mobileSmlingProductFilterOverly">
            <div
              style={{
                display: "flex",
                margin: "20px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <IoClose
                  style={{
                    height: "30px",
                    width: "30px",
                    color: "white",
                    cursor: "pointer",
                  }}
                  onClick={toggleDrawerOverlay}
                />
              </div>
              <p
                style={{
                  fontSize: "14px",
                  color: "white",
                  fontWeight: 500,
                }}
              >
                Clear Filter
              </p>
            </div>
            <div>{/* content....... */}</div>
            <div
              style={{
                backgroundColor: "#7d7f85",
                position: "fixed",
                bottom: "0px",
                width: "100%",
              }}
            >
              <p
                style={{
                  color: "white",
                  textAlign: "center",
                  paddingTop: "15px",
                }}
              >
                APPLY FILTERS
              </p>
            </div>
          </div>
        </>
      )}
      <div
        style={{
          backgroundColor: "#c0bbb1",
          height: "100%",
          width: "100%",
          paddingBottom: "100px",
        }}
      >
        {!drawerShowOverlay && <Header />}
        {/* <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
            gap: "12px",
            padding: "40px 20px 70px",
          }}
        >
          <h1 style={{ fontFamily: "FreightDisp Pro Medium", color: "white" }}>
            Rings
          </h1>

          <p
            style={{
              width: "346px",
              fontSize: "14px",
              color: "#fff",
              fontWeight: "500",
            }}
          >
            From uncompromising minimalism to ultra-femme, these are lab grown
            diamond rings are to revel in.
          </p>
        </div> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="smilingProductMain">
            <div
              className="smilingProductSubMain"
              style={{ width: "100%", display: "flex" }}
            >
              <div
                style={{
                  width: "20%",
                  margin: "0px 100px 0px 0px",
                  padding: "100px 0px 40px 50px",
                }}
                className="smilingWebProductListSideBar"
              >
                <ul>
                  <li className="finejwelery">Filters</li>
                  {/* <li className="finejli">Rings</li>
                  <li className="finejli">Necklaces</li>
                  <li className="finejli">Earrings</li>
                  <li className="finejli">Bracelets</li>
                  <li className="finejli">All</li> */}
                </ul>
                {/* <hr
                  style={{
                    width: "239px",
                    // marginTop: "30px",
                    marginLeft: "30px",
                  }}
                /> */}
                <div>
                  {NewFilterData().map((ele, index) => (
                    <Accordion
                      elevation={0}
                      sx={{
                        borderBottom: "1px solid #c7c8c9",
                        borderRadius: 0,
                        marginLeft: "28px",
                        "&.Mui-expanded": {
                          marginLeft: "28px",
                        },
                        "&.MuiPaper-root.MuiAccordion-root:last-of-type": {
                          borderBottomLeftRadius: "0px",
                          borderBottomRightRadius: "0px",
                        },
                        "&.MuiPaper-root.MuiAccordion-root:before": {
                          background: "none",
                        },
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ width: "20px" }} />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        sx={{
                          color: "#7f7d85",
                          borderRadius: 0,

                          "&.MuiAccordionSummary-root": {
                            padding: 0,
                          },
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "TT Commons, sans-serif",
                            fontSize: "12px",
                            opacity: "0.7",
                          }}
                        >
                          {ele.label}
                        </span>
                      </AccordionSummary>
                      <AccordionDetails
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "4px",
                        }}
                      >
                        {ele.filterList.map((flist, i) => (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                            key={i}
                          >
                            <Checkbox
                              name={`checkbox${index + 1}${i + 1}`}
                              checked={
                                filterChecked[`checkbox${index + 1}${i + 1}`]
                                  ?.checked
                              }
                              style={{
                                color: "#7f7d85",
                                padding: 0,
                                width: "10px",
                              }}
                              onClick={(e) =>
                                handleCheckboxChange(e, ele, flist)
                              }
                              size="small"
                            />
                            <small
                              style={{
                                fontFamily: "TT Commons, sans-serif",
                                color: "#7f7d85",
                                textTransform: "lowercase",
                              }}
                            >
                              {flist}
                            </small>
                          </div>
                        ))}
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </div>
              </div>
              <div className="smilingMobileProductListSideBar">
                <div onClick={toggleDeatilList} style={{ padding: "15px" }}>
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "#7d7f85",
                      fontSize: "13px",
                      fontWeight: 500,
                    }}
                  >
                    CATEGORY<span>{isOpenDetail ? "-" : "+"}</span>
                  </p>

                  <ul
                    className={`smilingProductCategory ${
                      isOpenDetail ? "open" : ""
                    }`}
                  >
                    <li className="finejwelery">fine Jewelry</li>
                    <li className="finejli">Rings</li>
                    <li className="finejli">Necklaces</li>
                    <li className="finejli">Earrings</li>
                    <li className="finejli">Bracelets</li>
                    <li className="finejli">All</li>
                  </ul>
                </div>
                <hr style={{ marginTop: "-25px" }} />
                <div style={{ display: "flex", marginInline: "15px" }}>
                  <div style={{ width: "49%" }} onClick={toggleDrawerOverlay}>
                    <p
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        color: "#7d7f85",
                        fontSize: "13px",
                        fontWeight: 500,
                        margin: "0px",
                      }}
                    >
                      FILTER<span>{isOpenDetail ? "-" : "+"}</span>
                    </p>
                  </div>
                  <hr
                    style={{
                      border: "none",
                      marginBottom: "0px",
                      marginInline: "5px",
                      borderLeft: "1px solid black",
                      height: "50px",
                      marginTop: "-16px",
                    }}
                  />
                  <div
                    style={{
                      width: "49%",
                      display: "flex",
                      marginTop: "-15px",
                      alignItems: "center",
                    }}
                  >
                    <select
                      style={{
                        width: "100%",
                        border: "none",
                        outline: "none",
                        fontSize: "13px ",
                      }}
                    >
                      <option>RECOMMENDED</option>
                      <option>PRICE HIGH TO LOW</option>
                      <option>PRICE LOW TO HIGH</option>
                    </select>
                    <p style={{ margin: "0px" }}>+</p>
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: "80%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "40px 50px 0px 0px",
                }}
                className="smilingProductImageMain"
              >
                <div
                  style={{
                    width: "100%",
                    // border: "1px solid #e1e1e1",
                    display: "flex",
                    // justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  {finalDataOfDisplaying()?.map((products, i) => (
                    <div
                      style={{
                        width: "33.33%",
                        border: "1px solid #e1e1e1",
                        textAlign: "center",
                        color: "#7d7f85",
                        position: "relative",
                        zIndex:0
                      }}
                      className="smilingProductImageBox"
                      
                    >
                      <div onClick={() => handelProductSubmit(products)}>
                        <img
                          className="prod_img"
                          // onMouseEnter={() => {
                          //   setIsHovered(true);
                          //   setHoveredID(products.id);
                          // }}
                          // onMouseLeave={() => setIsHovered(false)}
                          // src={products.imagepath + products.mediumimage.split(",")[isHovered && HoveredID === products.id ? 1 : 0    ]}
                          src={
                            products.imagepath +
                            products.mediumimage.split(",")[0]
                          }
                          // style={{
                          //   backgroundImage: `url(${
                          //     products.imagepath +
                          //     products.mediumimage.split(",")[0]
                          //   })`,
                          //   "&:hover": {
                          //     backgroundImage: `url(${
                          //       products.imagepath +
                          //       products.mediumimage.split(",")[1]
                          //     })`,
                          //   },
                          // }}
                        />
                      </div>
                      <div onClick={() => handelProductSubmit(products)}>
                        <p
                          style={{
                            fontSize: "13px",
                            textTransform: "uppercase",
                            fontWeight: "500",
                            cursor:"pointer"
                          }}
                        >
                          {products?.title}
                          {/* <br />
                        R-00363WHT */}
                        </p>
                      </div>
                      <div>
                        <p style={{ fontSize: "12px" }}>
                          {products?.MetalColorName} / ${products?.price}
                        </p>
                      </div>
                      <div style={{ position: "absolute",zIndex:999999,top:0,right:0,display:'flex'}}>
                        <div>
                          <Checkbox
                            icon={
                              <StarBorderIcon
                                sx={{ fontSize: "22px", color: "#ffd200" }}
                              />
                            }
                            checkedIcon={
                              <StarIcon
                                sx={{ fontSize: "22px", color: "#ffd200" }}
                              />
                            }
                            disableRipple={true}
                            sx={{padding:"5px"}}
                          />
                       
                        </div>
                        <div>
                          <Checkbox
                            icon={
                              <LocalMallOutlinedIcon
                                sx={{ fontSize: "22px", color: "#ffd200" }}
                              />
                            }
                            checkedIcon={
                              <LocalMallIcon
                                sx={{ fontSize: "22px", color: "#ffd200" }}
                              />
                            }
                            disableRipple={true}
                            sx={{padding:"5px"}}
                          />
                        </div>
                      </div>
                      {products?.IsColorWiseImageExists !== null && (
                        <div
                          style={{
                            display: "flex",
                            gap: "8px",
                            justifyContent: "center",
                            alignItems: "center",
                            marginBottom: "12px",
                          }}
                        >
                          <div
                            style={{
                              width: "9px",
                              height: "9px",
                              backgroundColor: "#c8c8c8",
                              borderRadius: "50%",
                            }}
                          ></div>
                          <div
                            style={{
                              width: "9px",
                              height: "9px",
                              backgroundColor: "#ffcfbc",
                              borderRadius: "50%",
                            }}
                          ></div>
                          <div
                            style={{
                              width: "9px",
                              height: "9px",
                              backgroundColor: "#e0be77",
                              borderRadius: "50%",
                            }}
                          ></div>
                        </div>
                      )}
                    </div>
                  ))}

                  {/* <div
                    style={{
                      width: "33.33%",
                      border: "1px solid #e1e1e1",
                      textAlign: "center",
                      color: "#7d7f85",
                    }}
                    className="smilingProductImageBox"
                  >
                    <div className="prod_img"></div>
                    <div>
                      <p
                        style={{
                          fontSize: "13px",
                          textTransform: "uppercase",
                          fontWeight: "500",
                        }}
                      >
                        Drizzle 0.51ct Lab Grown Diamond Ring
                        <br />
                        R-00363WHT
                      </p>
                    </div>
                    <div>
                      <p style={{ fontSize: "12px" }}>White Gold / $1125.00</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "8px",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "12px",
                      }}
                    >
                      <div
                        style={{
                          width: "9px",
                          height: "9px",
                          backgroundColor: "#c8c8c8",
                          borderRadius: "50%",
                        }}
                      ></div>
                      <div
                        style={{
                          width: "9px",
                          height: "9px",
                          backgroundColor: "#ffcfbc",
                          borderRadius: "50%",
                        }}
                      ></div>
                      <div
                        style={{
                          width: "9px",
                          height: "9px",
                          backgroundColor: "#e0be77",
                          borderRadius: "50%",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "33.33%",
                      border: "1px solid #e1e1e1",
                      textAlign: "center",
                      color: "#7d7f85",
                    }}
                    className="smilingProductImageBox"
                  >
                    <div className="prod_img"></div>
                    <div>
                      <p
                        style={{
                          fontSize: "13px",
                          textTransform: "uppercase",
                          fontWeight: "500",
                        }}
                      >
                        Drizzle 0.51ct Lab Grown Diamond Ring
                        <br />
                        R-00363WHT
                      </p>
                    </div>
                    <div>
                      <p style={{ fontSize: "12px" }}>White Gold / $1125.00</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "8px",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "12px",
                      }}
                    >
                      <div
                        style={{
                          width: "9px",
                          height: "9px",
                          backgroundColor: "#c8c8c8",
                          borderRadius: "50%",
                        }}
                      ></div>
                      <div
                        style={{
                          width: "9px",
                          height: "9px",
                          backgroundColor: "#ffcfbc",
                          borderRadius: "50%",
                        }}
                      ></div>
                      <div
                        style={{
                          width: "9px",
                          height: "9px",
                          backgroundColor: "#e0be77",
                          borderRadius: "50%",
                        }}
                      ></div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <SmilingRock />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
