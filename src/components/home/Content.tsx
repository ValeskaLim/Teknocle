import { useEffect, useState } from "react";
import Image1 from "../../assets/flowglow_bnr_schedule.webp"

const Content = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            const response = await fetch('http://localhost:3000/');
            const data = await response.json();
            setArticles(data);
        };
        fetchArticles();
    }, []);

    return (
        <div className="p-12 flex flex-col gap-10">
            {articles.map((article, index) => (
                <div key={index} className="flex">
                    <img src={Image1} width={600} height={1600} className="rounded-3xl"/>
                    <div className="ml-4 h-full flex flex-col">
                        <h2 className="text-5xl font-bold">{article.title}</h2>
                        <p className="text-xl mt-4">{article.content.substring(0, 200)}...</p>
                        <div className="flex justify-end items-end w-full h-full">
                            <div className="bg-black p-2 w-60 h-16 rounded-3xl">
                                <p className="text-white h-full justify-center flex items-center">Read more</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Content;