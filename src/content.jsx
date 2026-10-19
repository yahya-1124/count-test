import {useState , useEffect} from "react"

function Counter() {
  const [count, setCount] = useState(0);

  return(
    <div>
            <button onClick={() => setCount(count + 1)}>
                Clicks: {count}
            </button>
        </div>
  );
}

export default function Content(){
    const [numbers,setNumbers]=useState(0)

useEffect(()=>{
    console.log("success")
},[])

function plus(){
    setNumbers(numbers + 1);
}

function min(){
    setNumbers(numbers - 1);
}


return(
    

    <div >
        <Counter/>
        <dr/>
        <div>
            {numbers}
        </div>
        <div>
            <button onClick={plus}>+</button>
            <button onClick={min}>-</button>
        </div>
        

    </div>
)

}