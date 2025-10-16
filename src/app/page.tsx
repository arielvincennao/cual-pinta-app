export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      {/* Navbar */}
      <nav className="w-full px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-[70px] font-lobster" style={{ color: 'var(--logo-color)' }}>
          Cuál Pinta?
        </div>
        
        {/* Access button */}
        <button className="bg-transparent border border-[var(--text-dark)] text-[var(--text-dark)] px-6 py-3 rounded-lg font-lexend hover:opacity-90 transition-opacity">
          Acceder
        </button>
      </nav>
    </div>
  );
}
