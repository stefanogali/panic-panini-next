export default function ButtonGhost({ children, customClasses }) {
  return (
    <button
      className={`px-5 uppercase py-2 mt-3 text-white whitespace-nowrap font-bold text-base bg-transparent rounded-full transition-all hover:bg-yellow-600 hover:text-white border-2 border-yellow-btn-primary ${
        customClasses ? ` ${customClasses}` : ""
      }`}
    >
      {children}
    </button>
  );
}
