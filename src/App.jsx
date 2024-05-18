import './App.css'
import HookForm from './Components/HookForm/HookForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'
// import StateFullForm from './Components/StateFullForm/StateFullForm'
import RefForm from './Components/RefForm/RefForm'
import ReusableForm from './Components/ReusableForm/ReusableForm'

function App() {

  const handleSignUp = data => {
    console.log("sign up data", data)
  }

  const handleLogIn = data => {
    console.log("Login data", data)
  }

  return (
    <>
      {/* <SimpleForm /> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm /> */}
      <ReusableForm
        formTitle={"Sign Up"}
        handleSubmit={handleSignUp}
        submitBtnText={'Sign Up'}>
        <div>
          <h2>Please Sign up</h2>
        </div>
      </ReusableForm>

      <ReusableForm
        formTitle={"Log In"}
        handleSubmit={handleLogIn}
        submitBtnText={'Log in'}>
        <div>
          <h2> Loginn pleasee!!!</h2>
        </div>
      </ReusableForm>
    </>
  )
}

export default App
