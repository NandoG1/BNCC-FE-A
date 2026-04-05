import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

function Home(){
    return (
        <div>
            <Button variant="destructive" size="lg">Click</Button>
            <Slider defaultValue={[33]} max={100} step={1}/>
        </div>
    )
}

export default Home