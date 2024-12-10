import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface LoginState {
    checkingLogin:boolean;
}

// const [counter, setCounter] = useState(0)
const initialState: LoginState = {
  checkingLogin:false ,
};

const LoginSlice = createSlice({
  name: "checkingLogin", // ** Attached with Store
  initialState,
  reducers: {
      changeLoginStateAction: (stata, actionPayload: PayloadAction<boolean>)=>{
          stata.checkingLogin = actionPayload.payload;  
       }
  },
});

export const { changeLoginStateAction } = LoginSlice.actions;
export const LoginSelector = ({ logIn }: RootState) => logIn;

export default LoginSlice.reducer;
