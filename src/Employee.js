function Employee(props){
    console.log(props)
    return(
        <div>
            <h1>Employee Data</h1>
            <h2>employee Name :{props.name}</h2>
        <h2>employee email :{props.email}</h2>
        </div>
    )
}
export default Employee;