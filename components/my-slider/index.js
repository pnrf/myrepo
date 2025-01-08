import MySlider from './my-slider.js'
import images from './arr-images.json'
import photos from './arr-photos.json'

/** слайдер с рисунками для страницы Иллюстрации */
function MySliderImages() {
	return (
		MySlider(images)
	)
}

/** слайдер с фотографиями для страницы Обо мне */
function MySliderPhotos() {
	return ( 
		MySlider(photos) 
	)	
}

export { MySliderImages, MySliderPhotos }