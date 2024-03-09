import { useEffect, useState } from "react";

const AppRouter = () => {
    const [item, setItem] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(item => {setItem(item)})
        }, []);
    return <div className="app__router max-w-[1200px] m-0 m-auto flex text-slate-600 d-flex items-center flex-col text-center">
        <h1 className="text-[32px]">Food Full of treaty Love</h1>
        <p className="max-w-[748px] my-[25px] mb-[60px]">There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, </p>
        <div className="cards flex flex-wrap  gap-[60px]">
            {
                item.map(item => {
                    return (
                        <div className="card flex flex-col items-center w-[360px] border-2 rounded-s-[150px] border-black overflow-hidden" key={item.id}>
                            <div className="card__image max-w-[360px] max-h-[264px]">
                                <img src={item.image} alt={item.name} className=" w-[100%] h-[100%]"/>
                            </div>
                            <div className="card__content flex flex-col items-center">
                                <h2 className="card__title text-[25px] py-[20px]">{item.title}</h2>
                                <p className="card__price">{item.price}$</p>
                                <p className="card__description max-w-[310px]">{item.description}</p>
                                <p className="card__category">{item.category}</p>
                                <div className="flex gap-x-[20px]">
                                <p className="card__rating_count">{item.rating.count}</p>
                                <p className="card__rating_rate">{item.rating.rate}</p>
                                </div>
                            </div>
                            <div className="card__button">
                                <a href={item.url} target="_blank" rel="noreferrer">
                                    <button className="btn bg-black text-white p-[10px]">View</button>
                                </a>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
}

export default AppRouter