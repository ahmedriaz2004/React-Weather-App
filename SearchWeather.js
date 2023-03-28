import React, { useState, useEffect } from "react";
import { FaSearch, FaCloud } from "react-icons/fa";
export default function SearchWeather() {
  const [search, setSearch] = useState("London");
  const [data, setData] = useState({});
  // const [input, setInput] = useState("");


  const fetchWeather = async (e) => {
    // if (!search) return
    e.preventDefault()
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=766e387f5cfd2d55f74c61aa6b5a3077`
    );
    response = await response.json();
    setData(response);
    console.log(response);
  };

  // useEffect(() => {
  //   fetchWeather();
  // },[]);

  let temp =(data?.main?.temp - 268.15).toFixed(0);
  // let temp_min=(data.main.temp_min - 281.53).toFixed(2);
  // let temp_max=(data.main.temp_max - 281.53).toFixed(2);

  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card text-white text-center border-0">
              <img
                src="https://source.unsplash.com/600x900/?nature,water"
                className="card-img"
                alt="..."
              />
              <div className="card-img-overlay">
                <form>
                  <div className="input-group mb-4 w-75 mx-auto">
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search City"
                      aria-label="Search City"
                      aria-describedby="basic-addon2"
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <button
                      // type="submit"
                      className="input-group-text"
                      id="basic-addon2"
                      onClick={fetchWeather}
                    >
                      <i className="fas fa-search">
                        <FaSearch />
                      </i>
                    </button>
                  </div>
                </form>
                <div
                  className="bg-dark bg-opacity-50 py-3"
                  style={{ borderRadius: "5px" }}
                >
                  <h2 className="card-title">{data.name}</h2>
                  <p className="card-text lead">Thursday, March 9,2023</p>
                  <hr />
                  <i className="cloud">
                    <FaCloud />
                  </i>
                  {/* <h1 className="fw-bolder mb-5">234&deg;C</h1> */}
                  <h1 className="fw-bolder mb-5">{data?.main?.temp ? temp : '00'}&deg;C</h1>
                  <p className="lead fw-bolder mb-0">Cloud</p>
                  <p style={{marginTop:"20px"}}>{data?.message ? data?.message: null}</p>
                  <p className="lead">{data?.main?.temp_min ? data?.main?.temp_min : '00'}&deg;C | {data?.main?.temp_max ? data?.main?.temp_max : '00'} &deg;C</p>
                  {/* <p>{data.id}</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
