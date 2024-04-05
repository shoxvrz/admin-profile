import { Navigate, Outlet} from "react-router-dom"

function Auth2() {

   const user = JSON.parse(localStorage.getItem('user'))

   if(user?.token){
      if(user.role === 1000 || user.role === 7777){
         return <Outlet/>
      }else{
         alert('you are not allowed in admin page')
      }
   }else{
      return <Navigate to={'/login'}/>
   }



  return (
    <div>Auth2</div>
  )
}

export default Auth2