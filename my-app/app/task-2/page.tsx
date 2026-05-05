export default function TaskPage() {
  return (
    <div className="bg-gray-50 min-h-screen p-10 flex flex-col items-center gap-6">
      
      {/* BARIS ATAS: Grid 2 Kolom */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full">
        
        {/* Adobe Photoshop */}
        <div className="bg-cyan-50 p-8 flex flex-col justify-between rounded-[2.5rem] min-h-[280px]">
          <div className="flex items-center gap-2">
            <img src="palette.svg" alt="palette" className="w-6 h-6"/> 
            <p className="text-cyan-800 font-medium font-bold">Design</p>
          </div>
          <div>
            <h1 className="text-4xl font-bold text-cyan-950">Adobe Photoshop</h1>
            <p className="text-cyan-700 opacity-70 font-bold">in 3 days</p>
          </div>
        </div>

        {/* AI */}
        <div className="bg-green-100 p-8 flex flex-col justify-between rounded-[2.5rem] min-h-[280px]">
          <div className="flex items-center gap-2">
            <img src="terminal-2.svg" alt="Terminal" className="w-6 h-6"/>  
            <p className="text-green-800 font-medium font-bold">AI</p>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-green-950">DALL·E 2, Midjourney, Stable Diffusion</h1>
            <p className="text-green-700 opacity-70 font-bold">in 5 days</p>
          </div>
        </div>

      </div>

      {/* BARIS BAWAH: Grid 3 Kolom */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        
        {/* Figma */}
        <div className="bg-purple-100 p-8 flex flex-col justify-between rounded-[2.5rem] min-h-[280px]">
          <div className="flex items-center gap-2">
            <img src="palette.svg" alt="icon" className="w-6 h-6" />
            <p className="text-purple-800 font-bold font-medium ">Design</p>
          </div>
          <div>
            <h1 className="text-4xl font-bold text-purple-950">Figma</h1>
            <p className="text-purple-700 opacity-70 font-bold">8 hours ago</p>
          </div>
        </div>

        {/* Python */}
        <div className="bg-orange-100 p-8 flex flex-col justify-between rounded-[2.5rem] min-h-[280px]">
          <div className="flex items-center gap-2">
            <img src="code.svg" alt="Coding" className="w-6 h-6"/>
            <p className="text-orange-800 font-medium font-bold">Coding</p>
          </div>
          <div>
            <h1 className="text-4xl font-bold text-orange-950">Python</h1>
            <p className="text-orange-700 opacity-70 font-bold">2 days ago</p>
          </div>
        </div>

        {/* Sketch */}
        <div className="bg-pink-100 p-8 flex flex-col justify-between rounded-[2.5rem] min-h-[280px]">
          <div className="flex items-center gap-2">
            <img src="palette.svg" alt="icon" className="w-6 h-6" />
            <p className="text-pink-800 font-medium font-bold">Design</p>
          </div>
          <div>
            <h1 className="text-4xl font-bold text-pink-950">Sketch</h1>
            <p className="text-pink-700 opacity-70 font-bold">4 days ago</p>
          </div>
        </div>

      </div>


    </div>
  );
}