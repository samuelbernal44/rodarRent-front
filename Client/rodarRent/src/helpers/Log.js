import { setLocalStorage, removeLocalStorage } from './storage';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import revalidateCustomerData from './revalidateCustomerData';

export const successLogin = async (customerData, navigate) => {
  const newData = await revalidateCustomerData(customerData)
  setLocalStorage('isLoggedIn', true)
  setLocalStorage('loginData', newData);
  let name = ''
  customerData.given_name? name = customerData.given_name:name = customerData.name
  toast.success('Welcome!, ' + name, { position: 'top-left' }); //Mensaje al inicio en vista de usuario
  setTimeout(() => {
    navigate('/cars');
  }, '4000');
};

export const logOutSession = async (navigate) =>{
  setLocalStorage('isLoggedIn', false)
  removeLocalStorage('loginData')
  toast.success('Logged Out Succesfuly',{position:'top-left'})
  setTimeout(()=>{
    navigate('/cars')
  },'2000')
}
