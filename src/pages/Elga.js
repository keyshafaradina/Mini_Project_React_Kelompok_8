import React from 'react';
import fotoku from '../images/fotoku.jpeg'; 

function Elga() { 
    return (
    <div style={{
      backgroundColor: "#78eb1aff",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "sans-serif" // Biar font-nya lebih rapi
    }}>
      <div style={{
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "20px",
        width: "350px",
        textAlign: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }}>

        <img 
          src={fotoku}
          alt="foto" 
          style={{
            width: "140px",
            height: "140px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid #78eb1aff" // Tambahin border dikit biar manis
          }} 
        />

        <h2 style={{ marginTop: "15px", color: "#333" }}>Elga</h2>
        <p style={{ color: "#555" }}><b>Domisili:</b> Sumatera Utara</p>

        <p style={{
          fontSize: "14px",
          marginTop: "10px",
          lineHeight: "1.6",
          textAlign: "justify", // Biar teks deskripsinya rata kiri-kanan
          color: "#666"
        }}>
          Saya adalah mahasiswa Teknologi Informasi di Universitas Brawijaya dengan antusiasme 
          tinggi terhadap perkembangan ekosistem digital. Fokus utama saya terletak pada 
          bidang Cyber Security, di mana saya mendalami strategi perlindungan data, analisis 
          kerentanan sistem, dan mitigasi ancaman siber. Sebagai calon praktisi TI, saya 
          berkomitmen untuk terus mengasah kemampuan teknis serta pemahaman mendalam mengenai 
          keamanan informasi guna menghadapi tantangan keamanan global yang kian kompleks.
        </p>

      </div>
    </div>
  
);
}

export default Elga; 