/* eslint-disable */ 
import React, { useState } from 'react';
import './Timer.scss';
// import { ISettings } from '../../interfaces/SettingsTypes'

type TimerProps = {
	time: number
	// settings?: ISettings
	// setSettings?: React.Dispatch<React.SetStateAction<ISettings>>
	isDisabled?: boolean
	timerNeeded?: boolean
}

// const Timer: React.FC<TimerProps> = ({ time, isDisabled = true, settings, setSettings, timerNeeded }: TimerProps)
const Timer: React.FC<TimerProps> = ({ time, isDisabled = true,  timerNeeded }: TimerProps) => {
	// const minutes = Math.floor(time / 60);
	// const seconds = time - minutes * 60;

	const [minutes, setNewMinutes] = useState(Math.floor(time / 60));
	const [seconds, setNewSeconds] = useState(time - minutes * 60)

	const validateMaxTime = (time: number) => {
		if (time > 59) return 59
		return time
	}

	const setMinutes = (min: string) => {
		if (min.length > 2) return;
		const time = validateMaxTime(+min) * 60 + seconds;
		setNewMinutes(time);
	}

	const setSeconds = (sec: string) => {
		if (sec.length > 2) return;
		const time = validateMaxTime(+sec) + minutes * 60;
		setNewSeconds(time);
	}

	return (
		<>
			<div className={!timerNeeded ? 'form__timer' : 'form__timer disabled'}>
				<div className="timer__item">
					<label htmlFor="minutes" className="timer__title">
						minutes
					</label>
					<input
						type="number"
						className="timer__inp"
						id="minutes"
						// disabled={isDisabled}
						value={minutes}
						onChange={(e) => setMinutes(e.target.value)}
					/>
				</div>
				<span className="timer__double-dot">:</span>
				<div className="timer__item">
					<label htmlFor="seconds" className="timer__title">
						seconds
					</label>
					<input
						type="number"
						className="timer__inp"
						id="seconds"
						data-testid="seconds"
						// disabled={isDisabled}
						value={seconds}
						onChange={(e) => setSeconds(e.target.value)}
					/>
				</div>
			</div>
		</>
	)
}

export default Timer
