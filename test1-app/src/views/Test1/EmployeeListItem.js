
function EmployeeListItem(props) {

    return(
        <>
            <li key={props.man.employee_id} onClick={()=>{props.clickEmployee(props.man.employee_id)}}><button>{props.man.employee_name}</button></li>
            
        </>
    )
}

export default  EmployeeListItem;