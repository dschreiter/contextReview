import GreetContext from '../context/GreetContext';
import DavidContext from '../context/DavidContext';
import JeongmiContext from '../context/JeongmiContext';

function CompleteContextWrapper({ children }) {
	return (
	
			<GreetContext.Provider value={'HEY from Context: '}>
				<DavidContext.Provider
					value={{
						name: 'david',
						age: 'likely enternal',
						hobbies: 'looking at trees',
					}}
				>
					<JeongmiContext.Provider value={'Jeongmi is AWESOME'}>
						{children}
					</JeongmiContext.Provider>
				</DavidContext.Provider>
			</GreetContext.Provider>

	);
}

export default CompleteContextWrapper;
