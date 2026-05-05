export default function LearnPage() {
    return (
        <div className="bg-white h-screen flex gap-4">
            <div className="bg-purple-300 h-72 w-96 p-8 flex flex-col justify-between rounded-4xl">
                <div>
                <img src={"palette.svg"} alt="Icon Pallete"/>        
                <p>Design</p>        
                </div>
                <div>
                    <h1 className="text-4xl font-bold">Figma</h1>
                    <p>8 hours ago</p>
                </div>
            </div>

            <div className="bg-orange-300 h-72 w-96 p-8 flex flex-col justify-between rounded-4xl">
                <div>
                <img src={"palette.svg"} alt="Icon Pallete"/>        
                <p>Design</p>        
                </div>
                <div>
                    <h1 className="text-4xl font-bold">Figma</h1>
                    <p>8 hours ago</p>
                </div>
            </div>

            <div className="bg-blue-300 h-72 w-96 p-8 flex flex-col justify-between rounded-4xl">
                <div>
                <img src={"palette.svg"} alt="Icon Pallete"/>        
                <p>Design</p>        
                </div>
                <div>
                    <h1 className="text-4xl font-bold">Figma</h1>
                    <p>8 hours ago</p>
                </div>
            </div>
        </div>

        
    );      
} 
