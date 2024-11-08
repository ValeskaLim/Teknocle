import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const articles = [
    {title: 'AI in Healthcare: Revolutionizing Diagnosis and Treatment', content: 'Artificial Intelligence (AI) is transforming healthcare, enhancing diagnostic accuracy and personalized treatments. Machine learning models are now able to analyze medical imaging, detect patterns in patient data, and provide insights faster than traditional methods. For example, AI tools can identify early signs of diseases like cancer, heart conditions, and neurological disorders, significantly improving outcomes. As AI continues to advance, we can expect even more precise diagnostics and individualized treatment plans, potentially reducing healthcare costs and making quality care accessible worldwide'},
    {title: '5G Networks: Empowering IoT and Smart Cities', content: 'The rollout of 5G technology is opening doors for faster, more reliable connectivity, especially for the Internet of Things (IoT) and smart cities. With its low latency and high data rates, 5G enables seamless communication between devices, powering innovations like autonomous vehicles, real-time monitoring, and automated traffic management. Smart city infrastructures, such as intelligent lighting and waste management, can now be optimized with 5G, leading to safer, more sustainable urban environments. As 5G coverage expands, it is set to accelerate digital transformation across industries'},
    {title: 'Blockchain Beyond Cryptocurrency: Secure Data and Supply Chains', content: 'While blockchain technology is often associated with cryptocurrency, its applications extend far beyond digital finance. Businesses are now leveraging blockchain for secure, transparent data sharing and supply chain management. With blockchain, every transaction or data entry is recorded in an immutable ledger, making it easy to trace products from origin to delivery. This has been particularly beneficial in industries like pharmaceuticals and food production, where authenticity and tracking are crucial. Blockchains potential to prevent fraud and enhance transparency is driving its adoption in a wide range of sectors'},
    {title: 'Quantum Computing: The Next Frontier of Processing Power', content: 'Quantum computing is poised to redefine computing power, tackling problems traditional computers cannot handle efficiently. Using quantum bits (qubits), quantum computers perform complex calculations at unprecedented speeds, holding promise for fields like cryptography, material science, and artificial intelligence. While still in early stages, companies like Google, IBM, and startups worldwide are making significant strides. When fully realized, quantum computing could revolutionize industries, optimizing processes from logistics to medicine, and solving some of the most challenging scientific problems'},
]

app.get('/', (req, res) => {
    res.json(articles);
});

app.listen(3000, () => {
    console.log(`Listening to port 3000`);
});