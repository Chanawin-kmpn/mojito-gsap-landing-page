import gsap from "gsap";
import { ScrollToPlugin, SplitText } from "gsap/all";

import Navbar from "./components/Navbar";

gsap.registerPlugin(ScrollToPlugin, SplitText);

const App = () => {
	return (
		<div>
			<Navbar />
		</div>
	);
};

export default App;
