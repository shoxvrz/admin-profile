import { Navigate, Outlet} from "react-router-dom"

function Auth1() {

   const user = JSON.parse(localStorage.getItem('user'))


   if(user?.token){
      if(user.role === 7777){
         return <Outlet/>
      }else{
         alert('you are not allowed in admin page')
      }
   }else{
      return <Navigate to={'/login'}/>
   }


  return (
    <div>Auth1</div>
  )
}

export default Auth1