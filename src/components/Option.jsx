export default function Option({option,onSelect}){
    return (
        <div >
            <button className="option my-2 ps-3" onClick={onSelect}>{option}</button>
        </div>
    )
}