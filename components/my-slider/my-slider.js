import { useState } from 'react'
import styles from './my-slider.module.css'

export default function RenderMySlider(arr) {
	const newArr = [];
	const [selectedIcon, setSelectedIcon] = useState(null);
	
	arr.forEach((elm) => {
			newArr.push(
				<li key={elm.figcaption}>
					<img className={styles.icons_item} src={elm.image} alt={elm.figcaption} onClick={setSelectedIcon}/>
				</li>
			)
		}
	)

	for (let i=0; i<20; i++) {
		newArr.push(
			<li key={`likey-${i}`} className={styles.icons_item_empty}></li>
		)
	}
	
	return (
		<section>
			<div className={styles.wrapper}>
				<img className={styles.image} src={selectedIcon==null ? arr[0].image : selectedIcon.target.src} alt={selectedIcon==null ? arr[0].figcaption : selectedIcon.target.alt} />
				<div className={styles.icons}>
					<ul className={styles.icons_list}>
						{newArr}
					</ul>
				</div>
			</div>
			<span className={styles.figcaption}>{selectedIcon==null ? arr[0].figcaption : selectedIcon.target.alt}</span>
		</section>
	)
}