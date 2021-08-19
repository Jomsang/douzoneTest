import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import EmployeeListItem from './EmployeeListItem';
import data from './data';


function Test1(props) {
  
  
  const [peoples, setPeoples] = useState(data);
  const [info, setInfo] = useState({});

  const clickEmployee = (id) => {
    const selectEmployee = peoples.filter(people => people.employee_id === id);
    setInfo(
      ...selectEmployee
    )
  }

  
  const searchName = (event) => {
   
    const search = data.filter(infor => infor.employee_name.includes(event.target.value));
    setPeoples(search)
    setInfo({})
    
  };
  

  return(
    
    <div className="container">
      <h1 className="subject">조민상의 연락처</h1>
      <div className="contact-wrap">
        <div className="col left">
          <div className="search-box">
                <TextField onChange={searchName}
                  label="검색어를 입력하세요"
                  multiline
              />
              
          </div>
          <div className="contact-list">
            <ul>
            {peoples.map((man) => {
              return(
                <EmployeeListItem key={man.employee_id} man={man} clickEmployee={clickEmployee}/>
              );
            })}
            </ul>
          </div>
        </div>  
        <div className="col right">

          {info.employee_id === undefined ?

          <span>정보가 없습니다.</span>
          :
          <ul className="info">
                <li>이름: {info.employee_name}</li>
                <li>부서: {info.employee_department}</li>
                <li>휴대폰: {info.employee_phone}</li>
                <li>메일: {info.employee_name}{info.employee_email}</li>
          </ul>
          }
        </div>
      </div>
    </div>
      
    

    
  )
}

export default Test1;