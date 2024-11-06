import "./App.css";
import React from "react";
import Signin from "./signin.component";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./signup.component";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import Sidebar from "./maincontent.component";
import Mainbody from "./mainbody.component";

// window.React1 = require('react');

function App() {
	return (
		<div className="App">

			<Router>
				<div>
					<Routes>
						<Route path="/" element={<Navigate to="/signin" />} />
						<Route path="/signup" element={<Signup />} />
						<Route path="/signin" element={<Signin />} />
						<Route path="/sidebar" element={<Sidebar />} />
						<Route path="/mainbody" element={<Mainbody />} />
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;
