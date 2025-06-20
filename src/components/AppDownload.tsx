import img1 from "../assets/AppDownload.png";
import img2 from "../assets/AppDownButtons.png";
import { headingH1 } from "./styles";

export default function AppDownload() {
    return (
        <div className="flex flex-row justify-center items-start gap-24 py-10 px-4 w-full mb-20 m-10 bg-white">
            <div className='mt-8'><h1 className={headingH1}>Download Be My Life <br />Coach App</h1>
                <p className="mt-8 leading-snug font-light">Download Be My Life Coach app today to get started <br />on a better you for tomorrow</p>
                <img src={img2} alt="AppDownload" className="w-[400px] h-auto mt-10" />
            </div>
            <div><img src={img1} alt="AppDownload" className="w-[500px] h-auto" /></div>
        </div>
    )
}