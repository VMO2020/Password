import React, { useState, useEffect } from 'react';

// Image
import Image from './assets/password.png';

// Icons
import { ReactComponent as Check } from './assets/check-lg.svg';
import { ReactComponent as Not } from './assets/x-lg.svg';
import { ReactComponent as Plus } from './assets/plus-lg.svg';
import { ReactComponent as Dash } from './assets/dash-lg.svg';
import { ReactComponent as Lock } from './assets/lock-fill.svg';
import { ReactComponent as Copy } from './assets/copy.svg';

// Helper
import { generatePassword } from './helpers/generatePassword.js';

// Styles
import './app.scss';

export const App = () => {
	const [setting, setSetting] = useState({
		numberCharacters: 6,
		symbols: true,
		numbers: true,
		uppercase: true,
	});

	const [password, setPassword] = useState('123456');

	useEffect(() => {
		setPassword(generatePassword(setting));
	}, [setting]);

	const addCharacters = () => {
		setSetting((setting) => {
			const newSetting = { ...setting };
			newSetting.numberCharacters += 1;
			// console.log(newSetting);
			return newSetting;
		});
	};

	const reduceCharacters = () => {
		if (setting.numberCharacters > 1) {
			setSetting((setting) => {
				const newSetting = { ...setting };
				newSetting.numberCharacters -= 1;
				// console.log(newSetting);
				return newSetting;
			});
		}
	};

	const toggleSimbols = () => {
		setSetting((setting) => {
			const newSetting = { ...setting };
			newSetting.symbols = !newSetting.symbols;
			// console.log(newSetting);
			return newSetting;
		});
	};

	const toggleNumbers = () => {
		setSetting((setting) => {
			const newSetting = { ...setting };
			newSetting.numbers = !newSetting.numbers;
			// console.log(newSetting);
			return newSetting;
		});
	};
	const toggleUppercase = () => {
		setSetting((setting) => {
			const newSetting = { ...setting };
			newSetting.uppercase = !newSetting.uppercase;
			// console.log(newSetting);
			return newSetting;
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		setPassword(generatePassword(setting));
	};

	const handleCopy = (e) => {
		const copyText = document.getElementById('my-text');
		copyText.select();
		document.execCommand('copy');
	};

	return (
		<div className='container'>
			<div>
				<img src={Image} alt='logo' />
			</div>
			<form onSubmit={onSubmit}>
				<div className='row'>
					<label>Number of characters:</label>
					<div className='columns'>
						<button onClick={reduceCharacters}>
							<Dash />
						</button>
						<span>{setting.numberCharacters}</span>
						<button onClick={addCharacters}>
							<Plus />
						</button>
					</div>
				</div>
				<div className='row'>
					<label>Include symbols?</label>
					<button onClick={toggleSimbols}>
						{setting.symbols ? <Check /> : <Not style={{ color: 'red' }} />}
					</button>
				</div>
				<div className='row'>
					<label>Include numbers?</label>
					<button onClick={toggleNumbers}>
						{setting.numbers ? <Check /> : <Not style={{ color: 'red' }} />}
					</button>
				</div>
				<div className='row'>
					<label>Include uppercase?</label>
					<button onClick={toggleUppercase}>
						{setting.uppercase ? <Check /> : <Not style={{ color: 'red' }} />}
					</button>
				</div>
				<div className='row'>
					<button type='submit'>
						Generate
						<span>
							<Lock />
						</span>
					</button>
					<input
						type='text'
						readOnly={true}
						value={password}
						id='my-text'
					></input>
				</div>
			</form>
			<div className='copy'>
				<button onClick={handleCopy}>
					<span>
						<Copy />
					</span>
					Copy
				</button>
			</div>
		</div>
	);
};
