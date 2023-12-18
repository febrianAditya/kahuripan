import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import "./SplashScreen.css"
import logo from "../../assets/logo.png"

export default function SplashScreen() {
    const navigate = useNavigate()
    const [fade, setFade] = useState(false);


    useEffect(() => {
        // Mengatur waktu untuk splash screen sebelum menghilang
        setTimeout(() => {
            setFade(true); // Memulai animasi fade out
            setTimeout(() => { 
                navigate("/login")
            }, 200); // Menghilangkan splash screen
        }, 2000); // Durasi tampilan splash screen, misal 3 detik

    }, [])
    
    return(
        <>
            <div className={`splash-screen ${fade ? 'fade-out' : ''}`}>
                <img src={logo} alt="Logo" className="rotate-scale-down-diag-2" />
            </div>
            
        </>
    )
}