import { Switch, Route, Redirect } from "react-router-dom";
import Test1 from './views/Test1';
function AppRoute(props) {
   
    return(
        <>
            {
            <Switch>
                <Route path="/test1" component={Test1}/>
                <Redirect to="/test1"/>
            </Switch>
           
        }
        </>
        

    );
}

export default AppRoute;