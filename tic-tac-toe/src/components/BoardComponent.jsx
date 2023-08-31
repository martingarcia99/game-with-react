import { Square } from "./square"

export function BoardComponent({boardUI,updateBoard}){
    return (
        <section className='game'>
        {
          boardUI.map((square,index) => {
            return (
              <Square 
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
        </section>
    )
}