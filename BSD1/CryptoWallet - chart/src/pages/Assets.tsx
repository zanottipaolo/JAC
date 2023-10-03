import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Assets = () => {
    const [data, setData] = useState()

    useEffect(() => {
      axios
        .get("https://api.coincap.io/v2/assets/bitcoin/history?interval=d1")
        .then(function (response: any) {
          setData(response)
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    }, [])
    
    return (
      <LineChart
        width={500}
        height={300}
        data={data?.data.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='time' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type='monotone'
          dataKey='priceUsd'
          stroke='#8884d8'
          activeDot={{ r: 8 }}
        />
      </LineChart>
    )
};

export default Assets;