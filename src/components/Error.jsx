import { useRouteError } from "react-router";
const Error=() =>{
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h2>OOPS!!!</h2>
            <h3>SOMETHING WENT WRONG</h3>
            <h3>{err.status}:{err.statusText}</h3>
        </div>
    );

};
export default Error;
