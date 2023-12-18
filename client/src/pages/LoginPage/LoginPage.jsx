import { useState } from "react"
import "./LoginPage.css"

export default function LoginPage() {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault();
        // Logika untuk autentikasi (bisa dipisahkan berdasarkan role jika perlu)
        console.log('Login dengan:', phoneNumber, password);
        // Proses lebih lanjut setelah ini...
    };


    return(
        <div className="login-container">
            <form onSubmit={handleLogin}>
                <h2>Login</h2>
                <div>
                    <label htmlFor="phoneNumber">Nomor HP:</label>
                    <input 
                        type="text" 
                        id="phoneNumber" 
                        value={phoneNumber} 
                        onChange={(e) => setPhoneNumber(e.target.value)} 
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}