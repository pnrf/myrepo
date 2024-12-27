import { useState } from 'react'
import styles from './photo-block.module.css'
import arr from './photo-block-arr.json'

export default function RenderPhotoBlock(icon, onIconClick) {
	const newArr = [];
	const [selectedIcon, setSelectedIcon] = useState(null);
	
	arr.forEach((elm) => {
			newArr.push(
				<li>
					<img className={styles.icons_item} src={elm.image} alt={elm.figcaption} onClick={handleIconClick}/>
				</li>
			)
		}
	)

	function handleIconClick(icon) {
    setSelectedIcon(icon)
  }

	return (
		<section>
			<div className={styles.wrapper}>
				<img className={styles.image} src={selectedIcon==null ? arr[0].image : selectedIcon.target.src} alt={selectedIcon==null ? arr[0].figcaption : selectedIcon.target.alt} />
				<div className={styles.icons}>
					<ul className={styles.icons_list}>
						{newArr}
						<li className={styles.icons_item_empty}></li>
						<li className={styles.icons_item_empty}></li>
						<li className={styles.icons_item_empty}></li>
						<li className={styles.icons_item_empty}></li>
					</ul>
				</div>
			</div>
			<span className={styles.figcaption}>{selectedIcon==null ? arr[0].figcaption : selectedIcon.target.alt}</span>
		</section>
	)
}