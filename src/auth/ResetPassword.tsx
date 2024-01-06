// @ts-nocheck
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { account } from "@/lib/appwrite/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const ResetPassword = () => {
  const navigate = useNavigate();

  const [password, setpassword] = useState({
    newPassword:'',
    repeatedPassword: '',
  })
  const changePassword = async(e: React.FormEvent) => {
    e.preventDefault();
    

    const urlParems = new URLSearchParams(window.location.search);
    const userId = urlParems.get("userId");
    const secret = urlParems.get("secret");
    
    
    await account.updateRecovery(
      userId,
      secret,
      password.newPassword,
      password.repeatedPassword
    );
    navigate('/')


  }


  return (
    <div className="sm:w-420 flex-center flex-col ">
      <div className="flex items-center">
          <img
          src="/assets/biglogo.svg"
          className="w-12 h-8" 
          />
          <h1 className="ml-1 text-primary-500 h2-bold md:h2-bold pt-1 sm:pt-0">GrimGlideTrading</h1>
          </div>
          <h2 className="h3-bold md:h2-bold pt-1 sm:pt-0">Reset Password</h2>
          <p className="text-primary-500 small-medium md:base-regular mt-2"> Please enter your details</p>
       

      <form className="flex flex-col gap-1 w-full mt-1">
        <div className="mb-3">
          <Label className="shad-form_label">
            Enter your new password 
          </Label>
          <Input
          required
          type="password"
          name="password"
          onChange={(e)=> {
            setpassword({
              ...password,
              newPassword : e.target.value
            })
          }}
          className="shad-input"
          id="exampleInputPassword"
        />
        </div>
        <div className="mb-3">
          <Label className="shad-form_label">
            Repeat your new Password 
          </Label>
          <Input
          required
          type="password"
          name="password"
          onChange={(e)=> {
            setpassword({
              ...password,
              repeatedPassword : e.target.value
            })
          }}
          className="shad-input"
          id="exampleInputPassword"
        />
        </div>
        <Button className="shad-button_primary" type="submit" onClick={(e)=> changePassword(e) } >change password
        </Button>
      </form>
      
    </div>
  );
}

export default ResetPassword;
