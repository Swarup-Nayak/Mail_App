import Header from "./Components/Header/Header";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import EmaiList from "./Components/EmaiList/EmaiList";
import Compose from "./Components/Compose/Compose";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import EmailContent from "./Components/EmailContent/EmailContent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login/Login";
import { selectUser, signin, signout } from "./features/userSlice";
import { auth } from "./Firebase/Firebase";
import { useEffect } from "react";
import Logout from "./Components/Logout/Logout";

function App() {
  const isMessageOpen = useSelector(selectSendMessageIsOpen);
  console.log(isMessageOpen);

  const user = useSelector(selectUser);
  console.log(user);

  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          signin({
            displayName: user.displayName,
            photoUrl: user.photoURL,
            email: user.email,
          })
        );
      } else {
        dispatch(signout());
      }
    });
  }, []);

  if (user) {
    return (
      <Router>
        {
          <div className="App">
            <div className="app__header">
              <Header />
            </div>
            <div className="app__1">
              <div className="app__sidebar">
                <Sidebar />
              </div>
              <Switch>
                <Route path="/" exact>
                  <EmaiList />
                </Route>
                <Route path="/mail">
                  <EmailContent />
                </Route>
              </Switch>
              <div className="app__body">
                <Logout />
              </div>
            </div>
            {isMessageOpen && <Compose />}
          </div>
        }
      </Router>
    );
  } else {
    return <Login />;
  }

  {
    /* {user && (
        <div className="App">
          <div className="app__header">
            <Header />
          </div>
          <div className="app__1">
            <div className="app__sidebar">
              <Sidebar />
            </div>
            <Switch>
              <Route path="/" exact>
                <EmaiList />
              </Route>
              <Route path="/mail">
                <EmailContent />
              </Route>
            </Switch>
            {/* <div className="app__body"></div> */
  }
  {
    /* </div>
          {isMessageOpen && <Compose />}
        </div>
      )} */
  }
  // return (
  //   <Router>
  //     {

  //       <div className="App">
  //         <div className="app__header">
  //           <Header />
  //         </div>
  //         <div className="app__1">
  //           <div className="app__sidebar">
  //             <Sidebar />
  //           </div>
  //           <Switch>
  //             <Route path="/" exact>
  //               <EmaiList />
  //             </Route>
  //             <Route path="/mail">
  //               <EmailContent />
  //             </Route>
  //           </Switch>
  //           {/* <div className="app__body"></div> */}
  //         </div>
  //         {isMessageOpen && <Compose />}
  //       </div>
  //     }
  //     else{<Login />}
  //     {/* {user && (
  //       <div className="App">
  //         <div className="app__header">
  //           <Header />
  //         </div>
  //         <div className="app__1">
  //           <div className="app__sidebar">
  //             <Sidebar />
  //           </div>
  //           <Switch>
  //             <Route path="/" exact>
  //               <EmaiList />
  //             </Route>
  //             <Route path="/mail">
  //               <EmailContent />
  //             </Route>
  //           </Switch>
  //           {/* <div className="app__body"></div> */}
  //     {/* </div>
  //         {isMessageOpen && <Compose />}
  //       </div>
  //     )} */
  //     }
  //   </Router>
  // );
}

export default App;
