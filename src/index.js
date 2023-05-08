import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// STEP 2: Give the APP access to your created context, all wrapped children have access
import GreetContext from './context/GreetContext';
import DavidContext from './context/DavidContext';
import JeongmiContext from './context/JeongmiContext';
// import CompleteContextWrapper from './context/CompleteContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		{/* STEP 3: create Provide and value to share, all elements wrapped will have access */}
		<GreetContext.Provider value={'HEY from Context: '}>
			<DavidContext.Provider
				value={{
					name: 'david',
					age: 'likely enternal',
					hobbies: 'looking at trees',
				}}
			>
				<JeongmiContext.Provider value={'Jeongmi is AWESOME'}>
					<App />
				</JeongmiContext.Provider>
			</DavidContext.Provider>
		</GreetContext.Provider>
	</React.StrictMode>
);


// if mutiple Context exist could structure could create a wrapper to handle

// root.render(
// 	<React.StrictMode>
// 		<CompleteContextWrapper>
// 			<App />
// 		</CompleteContextWrapper>
// 	</React.StrictMode>
// );
