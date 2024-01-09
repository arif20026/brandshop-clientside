
const Features = () => {
    return (
        <div className="card  bg-base-100 shadow-xl flex flex-col text-center border border-orange-200 mb-10 ">
            <h3 className="text-3xl font-bold">Our Features</h3>
            <div className="card-body grid grid-cols-3 gap-48">
               <div  className="flex flex-col justify-center items-center ">
               <img src="/src/assets/cash on delivery.jpg" alt="" className="w-20 h-20"/>
               <h2 className="card-title">Cash on Delivery</h2>
                
               </div>
               <div className="flex flex-col justify-center items-center ">
               <img src="/src/assets/download.jpg" alt="" className="w-20 h-20"/>
               <h2 className="card-title">Easy Return Policy</h2>
                
               </div>
               <div  className="flex flex-col justify-center items-center ">
               <img src="/src/assets/48h.jpg" alt="" className="w-20 h-20"/>
               <h2 className="card-title">Delivery within 48 hours</h2>
                
               </div>
                
            </div>
        </div>
    );
};

export default Features;