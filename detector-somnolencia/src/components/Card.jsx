export default function Card({ title, description, children }) {
  return (
    <div className="neon-card bg-[#0f1629]/70 backdrop-blur-lg card-hover rounded-xl p-6 w-full max-w-md mx-auto my-4 cursor-pointer">
      
      {/* Si se pasan title y description, se muestran */}
      {title && (
        <h2 className="text-2xl font-bold text-cyan-300 mb-2 glow">
          {title}
        </h2>
      )}

      {description && (
        <p className="text-gray-300 mb-2">
          {description}
        </p>
      )}

      {/* Si se usa children, se renderiza aquí */}
      {children}
    </div>
  );
}
