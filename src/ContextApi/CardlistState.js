import react from "react";
import { useState} from "react/cjs/react.development";
import Cardlistcontext from "./Cardlistcontext";
import images from "../Assets/Images/Images";


const CardlistState =(props)=>{
    const [OnbordingData] = useState(
        [
        {
          "Jevellery":"Chetmani jewellers",
          "name":"Siddharth Patel",
          "city":"Bangalore",
          "address":"HSR Layout sector 7",
           "phone":91+ 9847656588,
          "email":"Sidharthpatel@gmail.com",
          "image":`${images.avatar}`,

        },
        {
          "Jevellery":"Chetmani jewellers",
          "name":"Siddharth Patel",
          "city":"Bangalore",
          "address":"HSR Layout sector 7",
           "phone":91+ 9847656588,
          "email":"Sidharthpatel@gmail.com",
          "image":`${images.avatar}`,
         
        },
        {
          "Jevellery":"Chetmani jewellers",
          "city":"Bangalore",
          "address":"HSR Layout sector 7",
           "phone":91+ 9847656588,
          "email":"Sidharthpatel@gmail.com",
          "name":"Siddharth Patel",
          "image":`${images.avatar}`,
          
        },
        {
          "Jevellery":"Chetmani jewellers",
          "city":"Bangalore",
          "address":"HSR Layout sector 7",
           "phone":91+ 9847656588,
          "email":"Sidharthpatel@gmail.com",
          "name":"Siddharth Patel",
          "image":`${images.avatar}`,
        },
        {
          "Jevellery":"Chetmani jewellers",
          "city":"Bangalore",
          "address":"HSR Layout sector 7",
           "phone":91+ 9847656588,
          "email":"Sidharthpatel@gmail.com",
          "name":"Siddharth Patel",
          "image":`${images.avatar}`,
         
        },
        {
          "Jevellery":"Chetmani jewellers",
          "city":"Bangalore",
          "address":"HSR Layout sector 7",
           "phone":91+ 9847656588,
          "email":"Sidharthpatel@gmail.com",
          "name":"Siddharth Patel",
          "image":`${images.avatar}`,
        }
        ]
        );

        const [PostData] =useState([
            {
              "Jevellery":"Chetmani jewellers",
              "name":"Siddharth Patel",
               "date":"24/01/2021",
               "image":`${images.jewelrs}`,
            },
            {
              "Jevellery":"Chetmani jewellers",
              "name":"Siddharth Patel",
               "date":"24/01/2021",
               "image":`${images.jewelrs}`,

            },
            {
              "Jevellery":"Chetmani jewellers",
              "name":"Siddharth Patel",
               "date":"24/01/2021",
               "image":`${images.jewelrs}`,

            },
            {
              "Jevellery":"Chetmani jewellers",
              "name":"Siddharth Patel",
               "date":"24/01/2021",
               "image":`${images.jewelrs}`,
            },
            {
              "Jevellery":"Chetmani jewellers",
              "name":"Siddharth Patel",
               "date":"24/01/2021",
               "image":`${images.jewelrs}`,
            },
            {
              "Jevellery":"Chetmani jewellers",
              "name":"Siddharth Patel",
               "date":"24/01/2021",
               "image":`${images.jewelrs}`,

            },         
        ])
        const [lastnameData,setlastnameData] =useState([
          {
            id:0,
            lastname:"Shinde",
             date:"24/01/2021",           
          },
          {
            id:1,
            lastname:"Sign",
             date:"24/01/2021",
          },
          {
            id:2,
            lastname:"Agarwal",
             date:"24/01/2021",
          },
          {
            id:3,
            lastname:"Prathek",
             date:"24/01/2021",
          },
          {
            id:4,
            lastname:"Amit Guptha",
             date:"24/01/2021",
          },
        ])

        const [paymentlistData] =useState([
          {
            id:0,
            date:"24/01/2021",           
            shopname:"Shinde",
            shopcategory:"vendor",
            productname:"Shoes nike jordan",
            paymentamount:"₹ 1000/-",
            paymentmode:"UPI",
          },
          {
            id:1,
            date:"24/01/2021",           
            shopname:"Shinde",
            shopcategory:"vendor",
            productname:"Shoes nike jordan",
            paymentamount:"₹ 1000/-",
            paymentmode:"UPI",
          },
          {
            id:2,
            date:"24/01/2021",           
            shopname:"Shinde",
            shopcategory:"vendor",
            productname:"Shoes nike jordan",
            paymentamount:"₹ 1000/-",
            paymentmode:"UPI",
          },
          {
            id:3,
            date:"24/01/2021",           
            shopname:"Shinde",
            shopcategory:"vendor",
            productname:"Shoes nike jordan",
            paymentamount:"₹ 1000/-",
            paymentmode:"UPI",
          },
          {
            id:4,
            date:"24/01/2021",           
            shopname:"Shinde",
            shopcategory:"vendor",
            productname:"Shoes nike jordan",
            paymentamount:"₹ 1000/-",
            paymentmode:"UPI",
          },
          {
            id:5,
            date:"24/01/2021",           
            shopname:"Shinde",
            shopcategory:"vendor",
            productname:"Shoes nike jordan",
            paymentamount:"₹ 1000/-",
            paymentmode:"UPI",
          },
          {
            id:6,
            date:"24/01/2021",           
            shopname:"Shinde",
            shopcategory:"vendor",
            productname:"Shoes nike jordan",
            paymentamount:"₹ 1000/-",
            paymentmode:"UPI",
          },
          {
            id:7,
            date:"24/01/2021",           
            shopname:"Shinde",
            shopcategory:"vendor",
            productname:"Shoes nike jordan",
            paymentamount:"₹ 1000/-",
            paymentmode:"UPI",
          },
          {
            id:8,
            date:"24/01/2021",           
            shopname:"Shinde",
            shopcategory:"vendor",
            productname:"Shoes nike jordan",
            paymentamount:"₹ 1000/-",
            paymentmode:"UPI",
          },
        ])

const[cardlistClose,setCardlistClose]= useState(true);
const[uploadFile,setUploadFile]= useState(true);

return(
    <Cardlistcontext.Provider value={{cardlistClose, setCardlistClose,OnbordingData,PostData,lastnameData,setlastnameData,
      uploadFile,setUploadFile, paymentlistData,
    }}>
       {props.children}
    </Cardlistcontext.Provider>
)
}
export default CardlistState;