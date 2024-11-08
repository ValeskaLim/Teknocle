import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Image1 from "../../assets/flowglow_bnr_schedule.webp"

const Content = () => {
    const { id } = useParams();
    const [articles, setArticles] = useState(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/articles/${id}`);
                if (!response.ok) throw new Error("Article not found");

                const data = await response.json();
                setArticles(data);
            } catch (err) {
                if(err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("An unkown error occured");
                }
            }
        };
        fetchArticles();
    }, [id]);

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-4xl text-red-500 font-bold">Error: {error}</p>
            </div>
        )
    }

    if (!articles) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-4xl text-blue-500 font-bold">Loading...</p>
            </div>
        )
    }

    return (
        <div className="flex flex-col pt-10 px-16 ">
            <div className="w-full h-[400px]">
                <img src={Image1} className="object-cover w-full h-full rounded-3xl"/>
            </div>
            <div className="mt-5 px-4">
                <p className="text-5xl font-bold">{ articles['title'] }</p>
                <p className="text-xl mt-4">{ articles['content'] }</p>
            </div>
        </div>
    )
}

export default Content;
