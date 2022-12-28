import './StartEventForm.css'
import FormLayout from "Layouts/FormLayout/FormLayout";
import FormInput from "Components/forms/FormInput/FormInput";
import { useEffect, useState } from "react";
import SharkParkLogo from "Components/SharkParkLogo/SharkParkLogo";
import FormTitle from '../FormTitle/FormTitle';

export default function StartEventForm({changeForm}){

  const [token, setToken] = useState()

  useEffect(() => {
    setToken(
      localStorage.getItem("token")
    )
  }, [])

  const [formData, setFormData] = useState()
  
  useEffect(()=> {
    setFormData(
      {
        userId: "",
        carId: "",
        slotId: "",
      }
    )
  }, [formData])


  /*============================================ *\
       ---------- SET DATA FUNCTION ---------
  \*============================================ */

  function setUserId(data){
    setFormData(prev => {
      return {...prev, userId: data}
    })  
  }

  function setCarId(data){
    setFormData(prev => {
      return {...prev, carId: data}
    })  
  }

  function setSlotId(data){
    setFormData(prev => {
      return {...prev, slotId: data}
    })  
  }

  /*============================================ *\
       ---------- Post Request ---------
  \*============================================ */
  
  async function sendData(){
    const data = await fetch( "", {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${token}`
      },
      body: JSON.stringify(formData)
    })
  }

  return (
    <div id="start-event-form">
      <div id="shark-park-logo">
        <FormTitle text="my parking events" />
      </div>
      <FormLayout redirectFn={changeForm} btnText="start parking">
        <FormInput inputId="userID-input" pHolderText="Enter License plate nr..." getInputValue={setUserId} />
        <FormInput inputId="carID-input" pHolderText="Enter car model..." getInputValue={setCarId} />
        <FormInput inputId="slotID-input" pHolderText="Enter car model..." getInputValue={setSlotId} />
      </FormLayout>
    </div>
  )
}