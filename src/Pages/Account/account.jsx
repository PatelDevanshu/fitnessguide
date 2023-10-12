import '../Account/account.css';

const Account=()=>{
    return(
        
        // <div name="register" id="regisdivation" action="hr.txt" method="post" onsubmit="validate()">
            <div className='accountall'>
                <div className='rgpg'>LOGIN FORM</div>
        <form className="register">
            
            <div className="items">
                <label>First name :</label>
              <input type="text" name='fname' placeholder="Enter_First_Name"/>
            </div>
            <div className="items">
                <label>Last name :</label>
             <input type="text" name='lname' placeholder="Enter_Last_Name"/>
            </div>
            
            <div className="items">
                <label>E-mail : </label>
                <input type="email" name="Email" placeholder='Enter_Email_id'/>
            </div>
            
            <div className="items">
                <label>Gender : </label>
                
                <select>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div className="items">
                   
                   <input type="submit" value="Submit"/><p> </p>
                   <input type="reset" value="Reset"/>
            </div>
        
        </form> 
        </div>       
    )
}
export default Account