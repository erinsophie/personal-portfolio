function Dots({ color = 'bg-black', position }) {
  const rows = new Array(5).fill(null);

  return (
    <div className={` flex flex-col items-center gap-6 ${position}`}>
      {rows.map((_, rowIndex) => (
        <div key={rowIndex} className="flex flex-row items-center gap-6">
          {rows.map((_, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`w-2 h-2 rounded-full ${color}`}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Dots;
