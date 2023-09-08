import './Post.css'
export default function Rifat({Jihana}){
    const{userId, id, title} = Jihana;
    return(
        <div className='box'>
            <h5>UserId:{userId}</h5>
            <h5>UserId:{id}</h5>
            <h5>UserId:{title}</h5>
        </div>
    )
}