import React from "react";

const Cards = ({userList}) => {
   
    const displayUserList =  userList.map((item, i)=>{
        return (
            
              <div className="mt-3 d-flex justify-content-center flex-wrap gap-3" id="list" key={i}>
              <div className="card" style={{ width: '18rem' }} >
                    <img src={item?.picture?.medium} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">
                        {item?.name?.title}{" "} 
                        {item?.name?.first} {" "}
                        {item?.name?.last}
                        </h5>
                      <div className="card-text">{item?.gender}
                        <div>
                          <i className="fa-solid fa-phone"></i>
                          {item?.cell}
                        </div>
                        <div>
                          <i className="fa-solid fa-envelope"></i>
                          {item?.email}
                        </div>
                        <div>
                          <i className="fa-solid fa-map-pin"></i>  {item?.location?.street?.number} {" "}
                          {item?.location?.street?.name} {" "}
                          {item?.location?.city} {" "}
                          {item?.location?.state} {" "}
                          {item?.location?.country}{" "}
                          {item?.location?.postcode}
                         
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            
          );
    })

    return(
        <div className="row mt-5">
              <div className="col">
                <span id="count">{userList.length}</span> Users found!
              </div>
              {displayUserList}
              </div>
    )
 
};

export default Cards;
