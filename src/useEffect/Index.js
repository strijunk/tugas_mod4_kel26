import React, { useState, useEffect } from 'react';
import ThemedButton from '../useContext/Index';
import './Index.css';
export default function Index() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  //dijalankan 1 kali
  useEffect(() => {
    fetch('https://type.fit/api/quotes')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setData(data);
        console.log(data);
      });
  }, []);
  //dijalankan terus setiap ada perubahan count
  useEffect(() => {
    if (count > 0) {
      alert('component will update & count' + count);
    }
  }, [count]);
  //dijalankan terus menerus
  useEffect(() => {
    console.log('spam console kuy');
  });
  const countUp = () => {
    setCount(count + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <div className="Main">
      <p className="Text"> Implementasi useEffect</p>
      <h1>Kelompok 26</h1>
      <ul>
        {data.slice(0, 10).map((value) => (
          <li key={value.id}>{value.text}</li>
        ))}
      </ul>
      <p className="Text">{count}</p>
      <div className="ViewButton" style={{ marginBottom: 100 }}>
        <div className="ViewButton2">
          <button className="Button" onClick={countUp}>
            Up
          </button>
        </div>
        <div className="ViewButton1">
          <button className="Button" onClick={countDown}>
            Down
          </button>
        </div>
      </div>
      <ThemedButton />
    </div>
  );
}
