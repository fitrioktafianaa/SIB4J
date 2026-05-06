export default function CardsPage () {
    return (
        <div className="bg-grey-300 p-2 rounded 2xl ">
                        <div className="bg-purple-200 flex flex-col gap-3 w-72 hauto p-4 rounded-2xl">
                        <h1 className="text-2xl font-bold">Web Design</h1>
                        <p>Create Eenganging user-friendly websites</p>
                        <div className="flex gap-2 flex-wrap">
                            <div className="bg-purple-300 p-1 text-xs">Landing Page</div>
                            <div className="bg-purple-300 p-1 text-xs">Website</div>
                            <div className="bg-purple-300 p-1 text-xs">One Page</div>
                        </div>    
                        </div>

                        <div className="bg-orange-200 flex flex-col gap-3 w-72 hauto p-4 rounded-2xl">
                        <h1 className="text-2xl font-bold">Graphic Design</h1>
                        <p>Creates impactful visuals and branding.</p>
                        <div className="flex gap-2 flex-wrap">
                            <div className="bg-orange-300 p-1 text-xs">Packaging</div>
                            <div className="bg-orange-300 p-1 text-xs">Brand Identity</div>
                            <div className="bg-orange-300 p-1 text-xs">Illustrations</div>
                            <div className="bg-orange-300 p-1 text-xs">Logo </div>
                            <div className="bg-orange-300 p-1 text-xs">Signage</div>
                        </div>    
                        </div>
        </div>
    );
}