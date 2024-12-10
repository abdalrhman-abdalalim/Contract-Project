interface IProps {
    msg: string
}

const ErrorMsg = ({msg}:IProps) => {
   return(
       <div className="text-red-600">{msg}</div>
   )
}

export default ErrorMsg;