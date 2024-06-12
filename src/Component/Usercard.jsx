import propTypes from "prop-types"
let data=[
    {
        name:"Mohana",
        city:"London",
        des:"Software developer",
        skills:["C","C++","Java","Python","C#",".Net","Mongo DB"],
        online:true,
        profile:"images/1.jpg"
    },
    {
        
        name:"Mohinth",
        city:"Australia",
        des:"Web developer",
        skills:["C","C++","Java","Python","C#",".Net","Mongo DB","React","Node js"],
        online:false,
        profile:"images/2.jpg"
    },
    {
            
        name:"Leo",
        city:"Canada",
        des:"React developer",
        skills:["Java","Python","C#",".Net","Mongo DB","React","Node js"],
        online:false,
        profile:"images/3.jpg"
    }

]


function User(props){
    return(
        <div className="container">
            <div className={props.online? "line online" : "line offline"}>{props.online? "ONLINE" : "OFFLINE"}</div>
            <img src={props.profile}  className="img"  />
            <h3>{props.name}</h3>
            <h3>{props.city}</h3>
            <p className="p1">{props.des}</p>
            <button className="btn1 ">Message</button>
            <button className="btn1 btn">Following</button>
            <p className="p2">Skills</p>
            <ul className="list">
                    {props.skills.map((value)=>(
                        <li >{value}</li>

                    ))}

                    
            </ul>

        </div>
    )
}

export const Usercard = () => {
  return (
    <>
   
   {data.map((value)=>(
        <User name={value.name} city={value.city} des={value.des} skills={value.skills} profile={value.profile}
        online={value.online}/>
    ))}
    
    </>
  )
}
User.propTypes={
    name:propTypes.string.isRequired,
    city:propTypes.string.isRequired,
    des:propTypes.string.isRequired,
    skills:propTypes.arrayOf(propTypes.string).isRequired,
    online:propTypes.bool.isRequired,
    profile:propTypes.string.isRequired

}
