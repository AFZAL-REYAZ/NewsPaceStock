import axios from 'axios'
import './NewsApi.css'
import React, { useEffect, useState } from 'react'

const NewsApi = () => {
    const [apidata, setapidata] = useState([])
    const getnewdata = async()=>{
        const response = await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2022-09-30&sortBy=publishedAt&apiKey=56582f70c63d458db036c3ae486d74c7")
        console.log("response",response.data.articles);
        response && setapidata(response.data.articles)
    }

    useEffect(() => {
      getnewdata()
    }, [])
    
  return (
          <div className="mainbox">
            {apidata.map((value,id)=>{
              return (
              <>
                <div className="cardcss " >
                    <img src={value.urlToImage} className="card-img-top" alt="img"/>
                    <div className="card-body">
                      <h5 className="card-title">{value.title}</h5>
                      <p className="card-text">{value.description}</p>
                    </div>
                    {/* <ul className="list-group list-group-flush">
                      <li className="list-group-item">An item</li>
                      <li className="list-group-item">A second item</li>
                      <li className="list-group-item">A third item</li>
                    </ul> */}
                    <div className="card-body">
                      <h6 href="#" className="card-link">{value.author}</h6>
                      <a href="#" className="card-link">{value.url}</a>
                    </div>
                </div>
            </>
        )
    })}
    
            </div>
  )
}

export default NewsApi