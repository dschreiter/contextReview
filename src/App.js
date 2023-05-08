//STEP 4: to use the context/ provider you have created  import useContext
import { useContext } from 'react';
import GreetContext from './context/GreetContext';
import DavidContext from './context/DavidContext';
import JeongmiContext from './context/JeongmiContext';

function App() {
	// STEP 5: Pass in the context you would like to access, in this case "GreetContext"
	const greet = useContext(GreetContext);
	const { name, age, hobbies } = useContext(DavidContext);
	const myWife = useContext(JeongmiContext);
	return (
		<>
			{greet} {name} you are {age} and you enjoy {hobbies} so their is
			that to consider. {myWife}
		</>
	);
}

export default App;
